document.querySelectorAll('.creationApp').forEach((el) => {
  el.style.display = 'none';
});

function init() {

  var width = getComputedStyle(document.querySelector('article')).width;
  document.querySelectorAll('article').forEach((el) => {
    el.style.height = width;
  })

  document.querySelectorAll('article img').forEach((el) => {
    el.onclick = function(e){
      var desc = el.nextElementSibling.nextElementSibling;//parentNode.querySelector('.description');
      desc.classList.toggle("opened");
      desc.onclick = function(e){
        desc.classList.toggle("opened");
      }
    }
  })

  document.querySelectorAll('.opts div').forEach((el, i, p) => {
    var Class = el.classList;
    var ClassN = p[(i == 0) ? 1 : 0].classList;
    var creationApp = document.querySelectorAll('.creationApp'),
      creation = document.querySelectorAll('.creation');

    el.onclick = function() {
      if (!/open/.test(Class)) {
        Class.toggle('open');
        ClassN.toggle('open');
      }
      if (/page/.test(Class)) {
        creation.forEach((el) => {
          el.style.display = 'block';
        })
        creationApp.forEach((el) => {
          el.style.display = 'none';
        })
      } else {
        creation.forEach((el) => {
          el.style.display = 'none';
        })
        creationApp.forEach((el) => {
          el.style.display = 'block';
        })
      }
    };
  });

  document.querySelectorAll('.creationApp').forEach((el,i) => {
    var a = document.querySelectorAll('.creationApp h2 a')[i];
    /\/(v.+)\//ig.exec(a.href);
    el.firstElementChild.innerText =RegExp.$1;
  });
  
  var show = false;
  document.querySelector('div.info').onclick = function(e) {
    var bio = document.querySelector('.bio-cover');
    if(show){
      bio.style.display = 'none';
      show = false;
    }else{
      bio.style.display = 'flex';
      show = true;
    }
  }
}

init();
//document.documentElement.addEventListener("resize",init,false);
window.addEventListener('resize', init, false);