import gsap from 'gsap'

gsap.from(".card",{
  opacity:0,
  y:50,
  scale:0.9,
  stagger:0.2,
  yoyo:true,
  repeat:-1
})