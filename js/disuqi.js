window.onload = function() {
    const firstName = document.querySelector('#firstName');
    const secondName = document.querySelector('#secondName');
    const pushingHand = document.querySelector('#pushingHand');
    const secondPushingHand = document.querySelector('#secondPushingHand');
    const firstContainer = document.querySelector('.firstContainer');
    const secondContainer = document.querySelector('.secondContainer');

    const tl = new TimelineMax();
    //firstName animations
    tl.fromTo(firstContainer, 1.5, { x: '100%' }, { x: '-5%', ease: Power2.easeInOut })
        .fromTo(pushingHand, 1, { x: '-20%' }, { x: '100vw', ease: Power2.easeInOut }, )
        .fromTo(firstContainer, 0.5, { x: '-5%' }, { x: '0%', ease: Power2.easeInOut }, '-=1')
        .to(firstName, 0.2, { opacity: 0.7, fontSize: 300, ease: Power2.easeInOut }, '-=0.5')
        //secondName animations
        .to(secondContainer, 1.5, { x: '5%', ease: Power2.easeInOut }, '-=2')
        .to(secondPushingHand, 1, { x: '-100vw', ease: Power2.easeInOut }, '-=0.5')
        .to(secondContainer, 0.5, { x: '0%', ease: Power2.easeInOut }, '-=1')
        .to(secondName, 0.2, { opacity: 0.5, fontSize: 300, ease: Power2.easeInOut }, '-=0.5');
}