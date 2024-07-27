document.addEventListener("contextmenu", function (e){
  e.preventDefault();
}, false);

window.onresize = function () {
    if (window.outerWidth < 3840 || window.outerHeight < 2160) {
        window.resizeTo(355, 800);
    }
}

var size = [window.width, window.height];  //public variable

let dims = [];
function getDims ()
{
  return [
    window.visualViewport?.width ||
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth,
    window.visualViewport?.height ||
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
  ];
}

function fixViewport (e)
{
  const newdims = getDims();
  if (newdims[0] != dims[0])
  {
    dims = newdims;
    main.height = dims[1];
    main.style.height = dims[1] + "px";
  }
}
            
window.addEventListener("resize", fixViewport);
            
fixViewport();