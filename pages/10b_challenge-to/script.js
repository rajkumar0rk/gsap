import gsap from 'gsap';


const toast=document.querySelectorAll(".toast")

toast.forEach((t,i)=>{
gsap.to(t,{
  opacity:1,
  y:-120,
  scale:1,
  duration:0.8,
  delay:i*2,
  onComplete:()=>{
    gsap.to(t,{
      delay:2,
      opacity:0,
      y:0,
      direction:0.5
    })
  }
})

})
