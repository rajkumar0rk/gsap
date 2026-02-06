import gsap from 'gsap';

gsap.set(".gsap-box",{
  y:-500,
  x:500,
  opacity:0,
  scale:0.5
})
gsap.to(".gsap-box",{
  y:0,
  x:0,
duration:3,
delay:0.2,
opacity:1,
scale:1,
ease:"expo.out"
})