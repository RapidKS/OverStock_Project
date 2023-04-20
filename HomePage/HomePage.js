
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slider = document.querySelector(".slider-wrapper");
const innerslider = document.querySelector("slider-inner");

let drag = false;
let startx;
let x;
slider.addEventListener("mouseenter" , () =>{
  slider.style.cursor = "grab";
})

slider.addEventListener("mousemove" , (e) =>{
  if(!drag) return;
  e.preventDefault();

  x = e.offsetX;

  innerslider.style.left ='${x=startx}px';
  check();
})

slider.addEventListener("mouseup" , (e) =>{
  slider.style.cursor="grab";
  drag=false;
})

slider.addEventListener("mousedown", (e) =>{
 drag=true;
 startx = e.offsetX-innerslider.offsetLeft;
 slider.style.cursor="grabbing";
})

slider.addEventListener("touchstart" , (e) =>{
  drag = true;
  startx=e.targetTouches[0].clientX - innerslider.offsetLeft;

  check();
},{
  passive:true
})

slider.addEventListener("touchmove" , (e) =>{
  if(!drag) return;
  x=e.targetTouches[0].clientX;
  innerslider.style.left = '${x = startx}px';
  check();
},
{
  passive: true
})

prev.addEventListener("click" , () =>{
  
  let innersliderleft = innerslider.style.left;
  innerslider.style.left = parseInt(innersliderleft.replace("px","")) -  265 +"px";
  check();
})
next.addEventListener("click" , () =>{
  
  let innersliderleft = innerslider.style.left;
  innerslider.style.left = parseInt(innersliderleft.replace("px","")) + 265 +"px";
  check();
})

const check = () => {
  let outer = slider.getBoundingClientRect();
  let inner = slider.getBoundingClientRect();

  if(parent(innerslider.style.left)>0) innerslider.style.left = "-10px";

  if(inner.right < outer.right) innerslider.style.left = '${inner.width = outer.width-10}px'


}