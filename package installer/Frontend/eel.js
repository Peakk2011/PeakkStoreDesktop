window.onresize = function () {
    if (window.outerWidth < 1200 || window.outerHeight < 800) {
        window.resizeTo(1200, 800);
    }
}

window.addEventListener("resize", function () {
    window.resizeTo({ xValue }, { yValue });
});

var size = [window.width, window.height];  //public variable

document.getElementById("my_element").addEventListener("wheel", (event) => {
    if (event.ctrlKey)
        event.preventDefault();
});

Tools()

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