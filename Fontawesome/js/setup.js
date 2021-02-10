const $ = (elt)=>{
  return document.querySelector(elt);
}

function GET(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();
  return new Promise((revolve) => {
    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
        revolve(JSON.parse(xhr.responseText))
      }
    }
  })
}

function create(Elt, attr) {
  var elt = document.createElement(Elt);
  if (attr) {
    if (attr['class']) {
      elt.className = attr['class'];
    }
    if (attr.id) {
      elt.id = attr.id;
    }
    if (attr.css) {
      elt.style = attr.css;
    }
  }
  return elt;
}