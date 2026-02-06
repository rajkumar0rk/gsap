import gsap from 'gsap';

const bars=document.querySelectorAll(".bar");

bars.forEach((bar,i)=>{
  gsap.fromTo(bar,{
    scaleY:0.4
  },{
    scaleY:1.6,
    repeat:-1,
    yoyo:true,
    duration:0.9,
    delay:i*0.1
  })
})