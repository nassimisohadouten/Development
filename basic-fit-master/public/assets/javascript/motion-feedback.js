/*
Motion Feedback script

This script is made to work with Tracker.js
The documentation for this script can be found here: https://github.com/szczyglis-dev/js-ai-body-tracker
*/

/* GLOBAL VARIABLES */
// Interval for tracking body elements in ms
const trackingInterval = 25
// Keep track of how many times in a row the script was too unsure about the rigged body
let failedCountDueToLowScore = 0
// Speed in which a squat should be performed in seconds
let squatSpeed = 2
// Time the squat should be held at the bottom in seconds, this is added to the to the total time of the squat
let squatHold = 1
// Element id that should track your hip
const hipLine = 'hip-line'
const hipLineElem = document.getElementById( hipLine )
// Element id that defines the area your hip should be in
const targetLine = 'target-line'
const targetLineElem = document.getElementById( targetLine )

let exerciseStarted = false

// Global variable that will be filled with coordinates of joints later
class Body {
    constructor( body ) {
        this.body = body
    }
    
    // Setters
    setBody( body ) {
        this.body = body
    }

    // Functions
    drawHipLine() {
        const renderHeightDifference = ( window.innerHeight - document.getElementById( 'video' ).height ) / 2
        hipLineElem.style.top = this.calcHipHeight() + renderHeightDifference + 'px'
        setTimeout( () => {
            this.drawHipLine()
        }, trackingInterval )
    }

    // Getters
    get lowerBodyVisible() {
        if( tracker.video.height < this.calcAnkleHeight ) {
            return false
        } else if ( this.hipHeight < 0 ) {
            return false
        } else if ( this.kneeHeight < 0 ) {
            return false
        } else if ( ( this.leftHip.score + this.rightHip.score + this.leftAnkle.score + this.rightAnkle.score ) / 4 < 0.5 ) {
            return false
        } else {
            return true
        }
    }
    get hipHeight() {
        return this.calcHipHeight()
    }
    get kneeHeight() {
        return this.calcKneeHeight()
    }
    get leftHip() {
        return this.body['left_hip']
    }
    get rightHip() {
        return this.body['right_hip']
    }
    get leftKnee() {
        return this.body['left_knee']
    }
    get rightKnee() {
        return this.body['right_knee']
    }
    get leftAnkle() {
        return this.body['left_ankle']
    }
    get rightAnkle() {
        return this.body['right_ankle']
    }

    // Methods
    calcHipHeight() {
        return ( this.leftHip.y + this.rightHip.y ) / 2
    }
    calcKneeHeight() {
        return ( this.leftKnee.y + this.rightKnee.y ) / 2
    }
    calcAnkleHeight() {
        return ( this.leftAnkle.y + this.rightAnkle.y ) / 2 
    }
}
// Creating a new body instance
let body = new Body( {} )

// Setting the mode the tracker runs in:
tracker.setModel( 'MoveNetSinglePoseThunder' )

// Turn video off
tracker.enableVideo = false
// Setting the video container to use for the webcam, this video instance is not displayed on the page
tracker.elVideo = '#video'
// Setting the canvas the tracker will display the body rig in
tracker.elCanvas = '#canvas'
// // Setting the tracker to run using the camera
tracker.run('camera')

// Listen to each pose update from the tracker and create a body object from it
tracker.on('beforeupdate', poses => {
    const pose = poses[0]

    // Return if no body was found in the screen
    if (! pose ) return
    
    // Create a new object of all joints and the certainty of each joint
    let bodyParts = {}
    pose.keypoints.forEach( keypoint => {
        const bodyPart = {
            x: keypoint.x,
            y: keypoint.y,
            score: keypoint.score
        }
        
        bodyParts[keypoint.name] = bodyPart
    })

    body.setBody( bodyParts )

    if ( body.lowerBodyVisible && ! exerciseStarted ) {
        exerciseStarted = true
        setTimeout( () => {
            initializeTargetLine()
            startExercise()
        }, 1000 * 3 )
    }
})

function startExercise() {
    hipLineElem.classList.add( 'active' )
    body.drawHipLine()
    document.getElementById( 'bodyNotFullyVisible' ).classList.add( 'd-none' )

    let counter = 3
    countdownTillStart()

    function countdownTillStart() {
        document.getElementById( 'countdown' ).innerHTML = counter
        counter--

        if ( counter < 0 ) {
            setTimeout( () => {
                moveTargetLine()
                motionFeedback()
                document.getElementById( 'countdown' ).classList.add( 'd-none' )
            }, 1000 * 1 )
        } else {
            setTimeout( () => {
                countdownTillStart()
            }, 1000 * 1 )
        }
    }
}

let targetStart = null
let targetEnd = null
let prevExerciseState = null
let exerciseState = 'down'
targetLineElem.style.transition = squatSpeed + 's ease'
// Sets variables and correctly positions the target line so that the user has a visual indication of the area they should be in
function initializeTargetLine() {
    if (! targetStart ) targetStart = body.hipHeight - ( targetLineElem.offsetHeight / 2 )
    if (! targetEnd ) targetEnd = body.kneeHeight - ( targetLineElem.offsetHeight / 2 )
    targetLineElem.style.top = targetStart + 'px'
    targetLineElem.classList.add( 'active' )
}
// Moves the target area between hip and knee height
function moveTargetLine() {
    let interval
    if ( exerciseState == 'down' ) {
        exerciseState = 'hold'
        prevExerciseState = 'down'
        targetLineElem.style.top = targetEnd + 'px'
        interval = squatSpeed * 1000 / 2
    } else if ( exerciseState == 'hold' ) {
        exerciseState = 'up'
        exerciseState = prevExerciseState == 'up' ? 'down' : 'up'
        interval = squatHold * 1000
    } else if ( exerciseState == 'up' ) {
        exerciseState = 'hold'
        prevExerciseState = 'up'
        targetLineElem.style.top = targetStart + 'px'
        interval = squatSpeed * 1000 / 2
    }

    setTimeout( () => {
        moveTargetLine()
    }, interval )
}

// Color the line position on the hip to give visual feedback to the user
function motionFeedback() {
    const hipArea = {
        top: hipLineElem.offsetTop,
        bottom: hipLineElem.offsetTop + hipLineElem.offsetHeight
    }
    const targetArea = {
        top: targetLineElem.offsetTop,
        bottom: targetLineElem.offsetTop + targetLineElem.offsetHeight
    }

    if ( targetArea.top > hipArea.top || targetArea.bottom < hipArea.bottom ) { // Hip line is not within the target area
        hipLineElem.style.background = 'red'
    } else { // Hip line is within the target area
        hipLineElem.style.background = 'green'
    }

    setTimeout( () => {
        motionFeedback()
    }, trackingInterval )
}

/**
 * @param {Number} angleJointX X coordinate of the joint that the angle should be calculated of
 * @param {Number} angleJointY Y coordinate of the joint that the angle should be calculated of
 * @param {Number} supportingJointOneX X coordinate of a adjacent joint of the joint the angle should be calculated of
 * @param {Number} supportingJointOneY Y coordinate of a adjacent joint of the joint the angle should be calcutated of
 * @param {Number} supportingJointTwoX X coordinate of a adjacent joint of the joint the angle should be calculated of
 * @param {Number} supportingJointTwoY Y coordinate of a adjacent joint of the joint the angle should be calcutated of
 * @returns {Number} Angle of the first joint passed to the function
*/
function calculateAngle( angleJointX, angleJointY, supportingJointOneX, supportingJointOneY, supportingJointTwoX, supportingJointTwoY ) {
    let numerator = supportingJointOneY * ( angleJointX - supportingJointTwoX ) + angleJointY * ( supportingJointTwoX - supportingJointOneX ) + supportingJointTwoY * ( supportingJointOneX - angleJointX )
    let denominator = ( supportingJointOneX - angleJointX - supportingJointTwoX ) + ( supportingJointOneY - angleJointY ) * ( angleJointY - supportingJointTwoY )
    let ratio = numerator / denominator

    let angleRad = Math.atan( ratio )
    let angleDeg = ( angleRad * 180 ) / Math.PI

    if ( angleDeg < 0 ) {
        angleDeg = 180 + angleDeg
    }

    return angleDeg
}