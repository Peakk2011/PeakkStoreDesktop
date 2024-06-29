window.onresize = function () {
    if (window.outerWidth < 1600 || window.outerHeight < 900) {
        window.resizeTo(1600, 900);
    }
}

window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 1280px)").matches) {
    window.open("https://peakk2011.github.io/PeakkStoreDesktop/Website/","_parent");
  } else {
    window.open("https://peakk2011.github.io/PeakkStoreDesktop/Website/","_parent");
  }
})

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