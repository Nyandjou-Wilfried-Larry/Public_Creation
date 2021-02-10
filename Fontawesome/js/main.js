var SOLID, MARQUE, REGULAR;

GET('./lib/solide.json').then((val) => {
  SOLID = val;
  GET('./lib/regular.json').then((val) => {
    REGULAR = val;
    GET('./lib/marque.json').then((val) => {
      MARQUE = val;
      Main(MARQUE, REGULAR, SOLID);
    })
  })
})

function Main(Marque, Regular, Solid) {
  var Elt = {
    Regular: $('.regular'),
    Solid: $('.solid'),
    Marque: $('.marque')
  }
  // alert('solid '+Solid.length+('\nregular '+Regular.length)+('\nmarque '+Marque.length))
  Regular.forEach((icon, i) => {
    setTimeout(() => { Icon(icon[0], 'far ' + icon[1], icon[2], Elt.Regular); }, 50 * i);
  })

  Marque.forEach((icon, i) => {
    setTimeout(() => { Icon(icon[0], 'fab ' + icon[1], icon[2], Elt.Marque); }, 50 * i);
  })

  Solid.forEach((icon, i) => {
    setTimeout(() => { Icon(icon[0], 'fa ' + icon[1], icon[2], Elt.Solid); }, 50 * i);
  })
}

function Icon(name, $class, code, parent) {
  var div = create('div',{id:name,'class':'item'}),
    //title = create('p'),
    prev = create('div',{'class':'prev'});

  //title.innerText = name;
  prev.innerHTML = `<i class='${$class} fa-2x'></i>`;
  /*  div.info = {
      name:name,
      $class:$class,
      code:code
    };*/
  div.appendChild(prev);
  parent.appendChild(div);
}