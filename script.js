hamburgermenu=document.getElementById("hamburger-menu")
on=false
hamburgermenu.addEventListener("click",()=>{
navlinks=document.querySelector(".nav-links")

if (!on){
  navlinks.style.display="block"
  navlinks.style.left="20%"
  
  on=true
}
else{
   navlinks.style.display="none"
  navlinks.style.left="100%"
  on=false;
}
})
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    navlinks.style.display = "flex";
    navlinks.style.left = "0";
    on = true; 
  } else {
    if (!on) {
      navlinks.style.display = "none";
      navlinks.style.left = "100%";
    }
  }
});