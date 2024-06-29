document.addEventListener("contextmenu", function (e){
    e.preventDefault();
  }, false);
  
  window.onresize = function () {
      if (window.outerWidth < 3840 || window.outerHeight < 2160) {
          window.resizeTo(360, 810);
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