import gsap from "gsap";

const button = document.querySelector(".scroll-to-top");

let floating = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    button.classList.add("show");
    if (!floating) {
      gsap.to(button, {
        y:-10,
        yoyo:true,
        repeat:-1,
        duration:0.8,
        ease:"sine.out"
      });
      floating=true
    }
  }else{
      button.classList.remove("show")
    }
});

button.addEventListener("mouseenter",()=>{
  gsap.to(button,{
    scale:1.1,
    duration:0.2
  })
})
button.addEventListener("mouseleave",()=>{
  gsap.to(button,{
    scale:1,
    duration:0.2
  })
})

button.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
