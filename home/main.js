
document.querySelectorAll('.creationApp').forEach((el)=>{
       el.style.display = 'none';
     });

function init() {

var width = getComputedStyle(document.querySelector('.creation')).width;

document.querySelectorAll('article').forEach((el)=>{
  el.style.height = width;
})

document.querySelectorAll('.opts div').forEach((el,k,p)=>{
  el.onclick = function(){
   el.classList.toggle('open');
   (k==0)? el.nextElementSibling.classList.toggle('open'):el.previousElementSibling.classList.toggle('open');
   if (k==1) {
     document.querySelectorAll('.creation').forEach((el)=>{
       el.style.display = 'none';
     })
     document.querySelectorAll('.creationApp').forEach((el)=>{
       el.style.display = 'block';
     })
   }else{
     document.querySelectorAll('.creation').forEach((el)=>{
       el.style.display = 'block';
     });
     document.querySelectorAll('.creationApp').forEach((el)=>{
       el.style.display = 'none';
     })
   }
  }
});

//document.documentElement.style.setProperty('--transHeight','-'+width);
}

init();

window.addEventListener('resize',init,false);