document.querySelectorAll('.creationApp').forEach((el) => {
  el.style.display = 'none';
});

function init() {

  var width = getComputedStyle(document.querySelector('.creation')).width;

  document.querySelectorAll('article').forEach((el) => {
    el.style.height = width;
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
}

init();

window.addEventListener('resize', init, false);