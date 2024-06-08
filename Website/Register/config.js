const SlideOFFSect = document.getElementById("LoginForm");

function SlideOFF() {
    SlideOFFSect.style.transform = "translateX(70px)"
    SlideOFFSect.style.opacity = "0"
    if (SlideOFFSect.style.opacity = "0") {
        setTimeout(function () {
            window.open("../Login/log.html", "_parent");
        }, 200);
    } else {
        alert("Register Failed")
    }
}

function GETAnim() {
    setTimeout(function () {
        SlideOFFSect.style.opacity = "1"
        SlideOFFSect.style.transform = "translateX(0px)"
        document.body.style.overflowX = "hidden"
    }, 800);
}

function MainPagein() {
    SlideOFFSect.style.transform = "translateX(-70px)"
    SlideOFFSect.style.opacity = "0"
    if (SlideOFFSect.style.opacity = "0") {
        setTimeout(function () {
            window.open("../index.html", "_parent");
        }, 200);
    } else {
        alert("Register Failed")
    }
}

GETAnim()