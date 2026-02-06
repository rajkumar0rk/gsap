import gsap from 'gsap';

const button = document.querySelectorAll("button");

button.forEach((b,i)=>{
  b.addEventListener("click",()=>{
      gsap.fromTo(b,{
        scale:1,
      },{
        scale:2,
        duration:2,
        onComplete:()=>{
          gsap.to(b,{
            scale:2.5,
            yoyo:true,
            repeat:-1,
            ease:"expo"
          })
        }
      })
  })
})