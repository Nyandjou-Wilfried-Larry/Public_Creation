var SOLID, MARQUE, REGULAR;

GET('./lib/solide.json').then((val) => {
  SOLID = val;
  GET('./lib/regular.json').then((val) => {
    REGULAR = val;
    GET('./lib/marque.json').then((val) => {
      MARQUE = val;
      Main(MARQUE, REGULAR, SOLID)
    })
  })
})


function Main(Marque, Regular, Solid) {
  var Elt = {
    regular: $('.regular'),
    solid: $('.solid'),
    marque: $('.marque')
  }
  // alert('solid '+Solid.length+('\nregular '+Regular.length)+('\nmarque '+Marque.length))
  Regular.forEach((icon, i) => {
    setTimeout(() => { Icon(icon[0], 'far ' + icon[1], icon[2], Elt.regular); }, 50 * i);
  })

  Marque.forEach((icon, i) => {
    setTimeout(() => { Icon(icon[0], 'fab ' + icon[1], icon[2], Elt.marque); }, 50 * i);
  })

  Solid.forEach((icon, i) => {
    if (i <= 100) setTimeout(() => { Icon(icon[0], 'fa ' + icon[1], icon[2], Elt.solid); }, 50 * i);
  })

  $('.btn').onclick = function() {
    var type = $('#i1').value;
    var search = $('#i2').value;
    var icon = {
      regular: Regular,
      solid: Solid,
      marque: Marque
    }

    if (search && /[a-z0-9]|\-/gi.test(search)) {
      var regex = new RegExp('^' + search, 'gi'),
        result = [];
      icon[type].forEach((item) => {
        if (regex.test(item[0])) {
          result.push(item);

        }
      })
      if (!$('.result')) {
        $('.content').insertAdjacentHTML('afterbegin', `<details class="result"><summary><h1>result</h1></summary></details>`);
      }
      $('.result').innerHTML = '<summary><h1>' + type + ' result</h1></summary>';
      result.forEach((icon, i) => {
        if (i <= 100) setTimeout(() => { Icon(icon[0], ((type == 'solid') ? 'fa ' : ((type == 'regular') ? 'far ' : 'fab ')) + icon[1], icon[2], $('.result')); }, 50 * i);
      })
    }
  }
}

function Icon(name, $class, code, parent) {
  var div = create('div', { id: name, 'class': 'item' }),
    //title = create('p'),
    prev = create('div', { 'class': 'prev' });

  //title.innerText = name;
  prev.innerHTML = `<i class='${$class} fa-2x'></i>`;
  div.info = {
    name: name,
    $class: $class,
    code: code
  };
  div.addEventListener('click', (e) => {
    createCard(div.info);
  })
  div.appendChild(prev);
  parent.appendChild(div);
}

function createCard(opt) {
  var card = create('div', { id: 'card' });
  card.innerHTML = `<div>
<p class='prev'><i class='${opt.$class} fa-3x'></i></p><label for="">name:<input type="text" value="${opt.name}" disabled></label><label for="">class:<input type="text" value="${opt.$class}" disabled></label><label for="">css code:<input type="text" value="${opt.code}" disabled></label><div class="cpy"><p class="link"></p><span class="btncpy far fa-copy"></span></div><button>close</button></div>`;
  if ($('#card')) {
    $('#card').remove();
  }
  document.body.appendChild(card);
  card.ondblclick= function(){
    card.remove()
  }
  $('#card>div>button').onclick= function(){
    card.remove();
  }
}
/*
window.addEventListener('click',(e)=>{
  alert(e.target.outerHTML)
})*/