var tl = gsap.timeline();

tl.from(".naviteam",{
    // stagger: .3,
    duration: 2,
    delay:0.5,
    y: -20,
    ease: 'Expo.easeInOut',
    opacity: 0
});
tl.from(".centeriteam",{
    stagger: .3,
    duration: 2,
    y: 20,
    ease: 'Expo.easeInOut',
    opacity: 0
}, '-=2')
tl.from(".leftiteam",{
    stagger:.3,
    duration:2,
    x:-20,
    ease:'Expo.easeInOut',
    opacity:0
},'-=2');
