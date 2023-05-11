document.querySelectorAll( '.step-1 button.next-step' )[0].addEventListener( 'click', ( e ) => {
    document.querySelectorAll( '.step-1' )[0].classList.add( 'completed' )
})
document.querySelectorAll( '.step-2 button.start' )[0].addEventListener( 'click', ( e ) => {
    document.querySelectorAll( '.step-2' )[0].classList.add( 'completed' )
    
    // Setting the tracker to run using the camera
    // tracker.run('camera')
})