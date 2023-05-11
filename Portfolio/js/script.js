const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};

const open= document.getElementById('open');
const modal_container= document.getElementById('modal_container');
const sluiten= document.getElementById('sluiten');

open.addEventListener('click', () =>{
	modal_container.classList.add('show');
});

sluiten.addEventListener('click', () =>{
	modal_container.classList.remove('show');
});


console.clear();

const CARD = document.querySelector(".about-img");

const UPDATE = ({ x, y }) => {
  const BOUNDS = CARD.getBoundingClientRect();
  // Bereken het bereik tussen het midden en de positie van de aanwijzer.
  const posX = x - BOUNDS.x;
  const posY = y - BOUNDS.y;
  const ratioX = posX / BOUNDS.width;
  const ratioY = posY / BOUNDS.height;
  CARD.style.setProperty("--ratio-x", ratioX);
  CARD.style.setProperty("--ratio-y", ratioY);
};

document.body.addEventListener("pointermove", UPDATE);

  

//Onload-animatie voor home teksten
const first = gsap.timeline({});
      first
        .from('.greet', {
          duration: 2,
          opacity: 0,
          y: 80,
          x: -300,
          ease: "expo.out",
        }, 0)

        .from('.name, .button', {
         duration: 2,
         opacity: 0,
         stagger: 0.15,
          y: 150,
          x: -400,
          ease: "expo.out",
        }, 0.25) 



//ScrollTrigger voor Skills horizontaal scrollen van tekst
    gsap.to("#text, .outline-text", {
      scrollTrigger:{
        trigger: ".text, .outline-text", 
        start: "center bottom", 
        end: "bottom top", 
        scrub: 1,
      },
      x: 200
    })

    gsap.to("#text2", {
      scrollTrigger:{
        trigger: "#text2",
        start: "bottom bottom", 
        end: "bottom top", 
        scrub: 1,
      },
      x: -250,
    })

//ScrollTrigger tijdlijn voor Animatie voor de about teksten 
let intTimeline1 = gsap.timeline({
 
    scrollTrigger: {
        trigger: ".about",
        start: "10% top",
        end: "bottom bottom",
        ease: "power4.out",
        scrub: 1,
        onEnter: function() { gsap.from(".abtp", { opacity: 0, y: 50, duration:1})},
    }
})

//ScrollTrigger-tijdlijn voor animatie voor portfolioteksten  
let intTimeline2 = gsap.timeline({
 
    scrollTrigger: {
        trigger: ".portfolio",
        start: "top top",
        end: "bottom bottom",
        ease: "power4.out",
        scrub: 1,
        
    }
})
    intTimeline2.from(".r1", { x: -150, duration: 5 },0);
    intTimeline2.from(".l1", { x: 150, duration: 5 },0);
    intTimeline2.from(".m1", { y: -60, duration: 5 },0);
    intTimeline2.from(".m2", { y: 60, duration: 5 },0);


  //ScrollTrigger-tijdlijn voor animatie voor portfolio-sectie

      gsap.utils.toArray(".port-cont").forEach(function(container) {
        let image = container.querySelector("img");
      
          gsap.to(image, {
            // opacity: 0,
            y: () => image.offsetHeight - container.offsetHeight*1.05,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top center",
              end: "bottom bottom",
              scrub: true,
              pin: false,
              invalidateOnRefresh: true
            },
          }); 
      });
         
  //ScrollTrigger-tijdlijn voor sectie Animatie voor services
     
      let intTimeline3 = gsap.timeline({
      
          scrollTrigger: {
              trigger: ".services",
              start: "top top",
              end: "bottom bottom",
              // markers: true,
              ease: "power4.out",
              scrub: 1,
              onEnter: function() { 
                  gsap.from(".design", { x: -250, duration: 1}),
                  gsap.from(".creative", { x: 250, duration: 1 });
              },
          }
      })


  //ScrollTrigger-tijdlijn voor sectie Animatie voor contact

      let intTimeline4 = gsap.timeline({
      
          scrollTrigger: {
              trigger: ".contact",
              start: "top center",
              end: "bottom bottom",
              ease: "power4.out",
              scrub: 1,
              onEnter: function() { 
                  gsap.from(".cntt", { opacity: 0, x: -150, stagger: 0.15, }),
                  gsap.from(".contact-form", {opacity: 0, x: 150, duration: 2 }); 
                },
          }
      })


     
     
      /* ------ScrollTrigger voor de about animatiereeks------  */
      gsap.set(".square", { yPercent: 25, rotation:-90});
      gsap.set(".dotsWhite", { yPercent: 10});
      gsap.set(".about-img", { yPercent: -20});
      gsap.set(".about", { yPercent: 5});

      gsap.to(".square", {
        yPercent: -5,
        rotation: 40,
        ease: "none",
        scrollTrigger: {
          trigger: ".about",
          scrub: 1
        }, 
      });

      gsap.to(".dotsWhite", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ".about",
          scrub: 1
        }, 
      });


      gsap.to(".about", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".about",
          scrub: 1
        }, 
      });


      gsap.to(".about-img, .abtp", {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: ".about",
          end: "bottom center",
          scrub: 1
        }, 
      });

/////