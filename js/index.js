const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x: 700, y: -20 }, { x: 600, y: -200 },
        { x: 500, y: -150 }, { x: 700, y: -50 },
        { x: window.innerWidth, y: 0 }

    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.paperPlane', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
        triggerElement: '.animation',
        duration: 2000,
        triggerHook: 0,
    })
    .setTween(tween)
    .setPin('.animation')
    .addTo(controller);

var scene2 = new ScrollMagic.Scene({
        triggerElement: 'footer',
        duration: 1000,
        triggerHook: 0.25,
    })
    .setClassToggle("#end", "fade-in").addTo(controller);

const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');

window.onload = function() {
    const tl = new TimelineMax();
    tl
        .fromTo(hero, 1.2, { height: '0%' }, { height: '80%', ease: Power2.easeInOut })
        .fromTo(hero, 1.2, { width: '100%' }, { width: '80%', ease: Power2.easeInOut })
        .fromTo(slider, 1.2, { x: '-100%' }, { x: '0%', ease: Power2.easeInOut }, "-=1.2")
        .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=0.5')
        .fromTo(hamburger, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-= 0.3')
        .fromTo(headline, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=0.5');


    const tl2 = new TimelineMax();
    const endLine = document.querySelector('#end');
    tl2.fromTo(endLine, 1, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut });

    const scene3 = new ScrollMagic.Scene({
        triggerElement: 'footer',
        duration: 500,
    }).setTween(tl2).addTo(controller);
}