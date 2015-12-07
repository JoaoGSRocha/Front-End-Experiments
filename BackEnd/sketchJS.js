var mysketch;

function getUserInput() {
  var e = document.createElement("input");
  e.type = "text";
  e.setAttribute("class","invisible_input");
  e.onkeyup = (function(p5){
    return function(e) {
      var event = e || window.event;
      mysketch.userTypedLetterJS(String.fromCharCode(event.keyCode));
      document.body.removeChild(e);
    };
  }(sketch));
  document.body.appendChild(e);
  e.focus();
}

function bindSketch() {
  var pjs = Processing.getInstanceById('sketch');
  if(pjs && pjs.bindJavascript) {
    mysketch = pjs;
    mysketch.bindJavascript(this);
  } else {
    setTimeout(bindSketch, 250);
  }
}

document.addEventListener("DOMContentLoaded",function(){bindSketch();},false);