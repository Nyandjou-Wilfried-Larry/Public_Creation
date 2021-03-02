

function init() {

var width = getComputedStyle(document.querySelector('.creation')).width;

document.querySelectorAll('.creation').forEach((el)=>{
  el.style.height = width;
})

//document.documentElement.style.setProperty('--transHeight','-'+width);
}

init();

window.addEventListener('resize',init,false);