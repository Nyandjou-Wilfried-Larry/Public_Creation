
document.querySelectorAll('.creation').forEach((el)=>{
  el.style.height = getComputedStyle(el).width;
})