
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

scroll.on('scroll', (instance) => {
    if(instance.scroll.y > 0) {
      document.querySelector('#nav').classList.add('sticky');
    } else {
      document.querySelector('#nav').classList.remove('sticky');
    }
  });

var tl = gsap.timeline()

tl.to('#wrapper',{
    y:'100vh',
    scale:0.6,
    duration:0,
})
tl.to("#wrapper",{
    y:"30vh",
    duration:1,
    delay:1,
})
tl.to("#wrapper",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.8,
})


