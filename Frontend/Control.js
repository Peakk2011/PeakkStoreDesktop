const Nav = document.getElementById('Navbar');
const NavTools = document.getElementById('NavTools');
const Theme = document.getElementById("Text");
const TextColor = document.getElementById('TextColor');
const SideBarTog = document.getElementById("hamToside");
const ThemeSelc = document.getElementById("ThemeSelc");
const ExitToNa = document.getElementById("ExitTonavbar");
const TextNavbar = document.getElementById("TextNavbar");
const LinksTools = document.getElementById("FlexLinksTools");
const PatternBG = document.getElementById('pattern');
const BGBlur = document.getElementById("bgblur");
const DragAbleThemeSelc = document.getElementById("DragAbleThemeSelc");
const DragAbleFlowAreaBack = document.getElementById("DragAbleFlowAreaBack");
const LeaveDivs = document.getElementById("LeaveDivs");


Nav.addEventListener('click', NavMoving)
BGBlur.addEventListener("click", NavMovingOut)

function NavMoving() {
    NavTools.style.opacity = "1";
    NavTools.style.transform = "translateY(0px)"
    document.removeEventListener('mouseenter', NavMoving);
    BGBlur.style.opacity = "1";
}

function NavMovingOut() {
    // setTimeout(function () {
    NavTools.style.opacity = "0";
    BGBlur.style.opacity = "0";
    NavTools.style.transform = "translateY(-370px)"
    // }, 500);
}

NavTools.addEventListener('mouseover', () => {
    NavTools.style.opacity = "1";
    NavTools.style.transform = "translateY(0px)";
    document.removeEventListener('mouseenter', NavMoving);
    console.log('Hover activate');
})

Theme.addEventListener("click", ThemeToggle);
ExitToNa.addEventListener("click", ExitThemeSelc);

function ThemeToggle() {
    Theme.style.transform = "translateX(20px)";
    TextColor.style.transform = "translateX(20px)";
    SideBarTog.style.transform = "translateX(20px)";
    Theme.style.opacity = "0";
    TextColor.style.opacity = "0";
    SideBarTog.style.opacity = "0";
    setTimeout(function () {
        Theme.style.display = "none";
        TextColor.style.display = "none";
        SideBarTog.style.display = "none";
    }, 400);
    setTimeout(function () {
        ExitToNa.style.display = "block";
        setTimeout(function () {
            ExitToNa.style.transform = "translateY(0px)";
            ExitToNa.style.opacity = "1";
        }, 20);
        ThemeSelc.style.transform = "translate(-50%, -50%)"
    }, 500);
    Nav.removeEventListener('click', NavMoving)
    TextNavbar.textContent = "Themes";
}

function ExitThemeSelc() {
    setTimeout(function () {
        Theme.style.transform = "translateX(-0px)";
        TextColor.style.transform = "translateX(-0px)";
        SideBarTog.style.transform = "translateX(-0px)";
        Theme.style.opacity = "1";
        TextColor.style.opacity = "1";
        SideBarTog.style.opacity = "1";
        Nav.addEventListener('click', NavMoving)
    }, 500);
    setTimeout(function () {
        Theme.style.display = "block";
        TextColor.style.display = "block";
        SideBarTog.style.display = "block";
    }, 300);
    setTimeout(function () {
        ExitToNa.style.transform = "translateY(-60px)";
        ExitToNa.style.opacity = "0";
        ThemeSelc.style.transform = "translate(-50%, -170%)"
        setTimeout(function () {
            ExitToNa.style.display = "none";
            TextNavbar.textContent = "Peakk Store";
        }, 80);
    }, 30);
    if (ThemeSelc.style.transform != "translate(-50%, -170%)") {
        ThemeSelc.style.transform = "translate(-50%, -170%)";
    }
    document.removeEventListener('mousemove', MoveProcesMSEFualt);
}

ThemeSelc.addEventListener("click", () => {

})

// Right click func

document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
    document.getElementById("contextMenu").style.display = "none"
}

function rightClick(e) {
    e.preventDefault();

    if (document.getElementById(
        "contextMenu").style.display == "block")
        hideMenu();
    else {
        let menu = document
            .getElementById("contextMenu")

        menu.style.display = 'block';
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
    }
}

// Dragable Theme selecter

DragAbleThemeSelc.addEventListener("mousedown", MouseSlide);
DragAbleThemeSelc.addEventListener("mouseup", MouseSlideUP);
DragAbleFlowAreaBack.addEventListener("mousedown", MouseSlideBackToDefault);
DragAbleFlowAreaBack.addEventListener("mouseup", MouseSlideUPBackToDefault);
DragAbleFlowAreaBack.addEventListener("mouseup", MoveProcesMSEFualt);
// DragAbleFlowAreaBack.addEventListener("mousedown",MoveProcesMSEFualt);

// PROBLEM is if user click exit button theme selecter is not go up SOLUTION make another button and Call function

document.addEventListener('mouseup', MouseSlideUP);

function MouseSlide(e) {
    document.addEventListener('mousemove', MoveProcesMouseThemeSelecter);
}

// For user drag into area !
function MouseSlideBackToDefault(e) {
    document.addEventListener('mousemove', MoveProcesMSEFualt);
}

function MouseSlideUP(e) {
    document.removeEventListener('mousemove', MoveProcesMouseThemeSelecter);
}

// For user drag into area !
function MouseSlideUPBackToDefault(e) {
    document.removeEventListener('mousemove', MoveProcesMSEFualt);
}

// For user drag another area

function MoveProcesMSEFualt(e) {
    ThemeSelc.style.transform = "translate(-50%,-50%)";
}

// mouse proces drag theme 

function MoveProcesMouseThemeSelecter(e) {
    // console.log("DragThemeAllowed"); Success to drag not log
    ThemeSelc.style.cssText = `transform: translate(-50%,${e.clientY}%)`;
    // ThemeSelc.style.cssText = `transform: translate(-50%,50%)`;
    Nav.removeEventListener('click', NavMoving)
    // 1 Get navbar tray out
    Theme.style.transform = "translateX(20px)";
    TextColor.style.transform = "translateX(20px)";
    SideBarTog.style.transform = "translateX(20px)";
    Theme.style.opacity = "0";
    TextColor.style.opacity = "0";
    SideBarTog.style.opacity = "0";
    setTimeout(function () {
        Theme.style.display = "none";
        TextColor.style.display = "none";
        SideBarTog.style.display = "none";
    }, 400);
    // 2 Get Exit button
    setTimeout(function () {
        LeaveDivs.style.display = "block";
        LeaveDivs.style.opacity = "1";
        setTimeout(function () {
            LeaveDivs.style.transform = "translateY(0px)";
        }, 50);
    }, 500);
    Nav.removeEventListener('click', NavMoving)
    TextNavbar.textContent = "Themes";
}

LeaveDivs.addEventListener("click", () => {
    LeaveDivs.style.transform = "translateY(-170px)";
    document.removeEventListener('mousemove', MoveProcesMSEFualt);
    // EXIT TO DEFAULT
    setTimeout(function () {
        LeaveDivs.style.display = "none";
        LeaveDivs.style.opacity = "0";
    }, 400);
    ExitThemeSelc()
})

function ExitThemeForDrag() {
    LeaveDivs.style.transform = "translateY(-170px)";
    document.removeEventListener('mousemove', MoveProcesMSEFualt);
    // EXIT TO DEFAULT
    setTimeout(function () {
        LeaveDivs.style.display = "none";
        LeaveDivs.style.opacity = "0";
    }, 400);
    ExitThemeSelc()
}

// Settings 

const wrapper = document.querySelector(".wrapper"),
    header = wrapper.querySelector(".HeadSettings");

function OpenSettings() {
    wrapper.style.display = "block";
    CloseNav()
}

function CloseSettings() {
    wrapper.style.display = "none";
}

dragElement(document.getElementById("Drag"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Settings tabs