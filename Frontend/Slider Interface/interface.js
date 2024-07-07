let sidebar = document.querySelector(".sidebar");
// let content = document.querySelector(".content");
let dragholder = document.querySelector(".dragholder");
let BgSide = document.querySelector(".BgSidebar");
let Sidebar = document.getElementById("Sidebar");

function onMouseMove(e){
  sidebar.style.cssText = `width: ${ e.pageX }px`;
  BgSide.style.opacity = "1";
  BgSide.style.display = 'block';
}

function onMouseDown(e){
  document.addEventListener('mousemove',onMouseMove);
}

function onMouseUp(e){
  document.removeEventListener('mousemove',onMouseMove);
  if(sidebar.style.width < 200) {
    BgSide.style.opacity = "0";
    BgSide.style.display = 'none';
  }
}

function onMouseUpBG(e) {
  BgSide.style.opacity = "1";
  BgSide.style.display = 'block';
}

dragholder.addEventListener('mousedown', onMouseDown);
dragholder.addEventListener('mouseup', onMouseUp);
// BgSide.addEventListener('mouseleave', onMouseUpBG); for hover and blur
BgSide.addEventListener("click", CloseNav)
document.addEventListener('mouseup', onMouseUp);

function SidebarToggle() {
  sidebar.style.cssText = `width: ${ 300 }px`;
  BgSide.style.display = 'block';
  BgSide.style.opacity = "1";
}

function CloseNav() {
  sidebar.style.cssText = `width: ${ 0 }px`
  BgSide.style.opacity = "0";
  BgSide.style.display = 'none';
}