const SlideOFFSect = document.getElementById("LoginForm");

function GETAnim() {
    setTimeout(function () {
        SlideOFFSect.style.opacity = "1"
        SlideOFFSect.style.transform = "translateX(0px)"
        document.body.style.overflowX = "hidden"
    }, 800);
}

GETAnim()

function GETBack() {
    SlideOFFSect.style.transform = "translateX(70px)"
    SlideOFFSect.style.opacity = "0"
    if (SlideOFFSect.style.opacity = "0") {
        setTimeout(function () {
            window.open('../Register/Regis.html', '_parent')
        }, 200);
    } else {
        alert("Register Failed")
    }
}

function OPENPeakkStore() {
    SlideOFFSect.style.transform = "translateX(70px)"
    SlideOFFSect.style.opacity = "0"
    if (SlideOFFSect.style.opacity = "0") {
        setTimeout(function () {
            window.open('../Main.html', '_parent')
        }, 200);
    } else {
        alert("Register Failed")
    }
}