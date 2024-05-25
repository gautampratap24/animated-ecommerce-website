const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function videoconAnimation() {
    var videocon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play");

    videocon.addEventListener("mouseenter", function () {
        // playbtn.style.opacity = 1
        // playbtn.style.scale = 1

        gsap.to(playbtn, {
            scale: 1,
            opacity: 1,
        })

    })

    videocon.addEventListener("mouseleave", function () {
        // playbtn.style.opacity = 0
        // playbtn.style.scale = 0

        gsap.to(playbtn, {
            scale: 0,
            opacity: 0,
        })

    })

    videocon.addEventListener("mousemove", function (dets) {

        gsap.to(playbtn, {
            left: dets.x - 20,
            top: dets.y - 40,
        })

    })

}
videoconAnimation();

function loadingAnimation() {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stragger: 0.2
    })

    gsap.from("#video-container", {
        scale: 0.7,
        opacity: 0,
        delay: 1.3,
        duration: 0.5,

    })
}
loadingAnimation();

function cursorAnimation(){
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y
        })
    })
    
    document.querySelectorAll(".child").forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to("#cursor", {
                transform: 'translate(-50%,-50%) scale(1)'
            })
        })
    
        elem.addEventListener("mouseleave", function () {
            gsap.to("#cursor", {
                transform: 'translate(-50%,-50%) scale(0)'
            })
        })
    
    })
    
}
cursorAnimation();
