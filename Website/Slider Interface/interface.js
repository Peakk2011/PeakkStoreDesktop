let sidebar = document.querySelector(".sidebar");
// let content = document.querySelector(".content");
let dragholder = document.querySelector(".dragholder");
let Sidebar = document.getElementById("Sidebar");

function onMouseMove(e){
  sidebar.style.cssText = `width: ${ e.pageX }px`;
}

function onMouseDown(e){
  document.addEventListener('mousemove',onMouseMove);
}

function onMouseUp(e){
  document.removeEventListener('mousemove',onMouseMove);
}

dragholder.addEventListener('mousedown', onMouseDown);
dragholder.addEventListener('mouseup', onMouseUp);
Sidebar.addEventListener('mousedown', onMouseDown);
Sidebar.addEventListener('mouseup', onMouseUp);
// content.addEventListener('mouseup', onMouseUp);
document.addEventListener('mouseup', onMouseUp);

// if(sidebar.style.width = "120px") {
  
// }