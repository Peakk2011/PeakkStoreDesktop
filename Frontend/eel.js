window.onresize = function () {
    if (window.outerWidth < 1500 || window.outerHeight < 800) {
        window.resizeTo(1600, 900);
    } else if (window.outerWidth < 1380 || window.outerHeight < 600) {
        window.resizeTo(1600, 900);
    }
}

// window.addEventListener("resize", function() {
//     if (window.matchMedia("(min-width: 450px)").matches) {
//       window.open("../Website/index.html","_parent");
//     } else {
//       console.log("Open Peakk store desktop")
//     }
// })