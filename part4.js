window.onload = init;

var src, target, msg;
var sourceId;

function init() {
    src = document.getElementById("src");
    target = document.getElementById("target");
 

     // Add event handlers for the source
    src.ondragstart = dragStartHandler;
    src.ondragend = dragEndHandler;
 

    // Add event handlers for the target
    target.ondragenter = dragEnterHandler;
    target.ondragover = dragOverHandler;
    target.ondrop = dropHandler;
}

function dragStartHandler(e) {
    sourceId = e.target.id;
    e.target.style.opacity = "1";
  
    
}

function dragEndHandler(e) {
    e.target.style.opacity = "0";
   
}



function dragEnterHandler(e) {
    e.preventDefault();
}

function dragOverHandler(e) {
    e.preventDefault();
}

function dropHandler(e) {
    var sourceElement = document.getElementById(sourceId);
    var newElement = sourceElement.cloneNode(false);
    target.innerHTML = "";
    target.appendChild(newElement);
    e.preventDefault();
}
