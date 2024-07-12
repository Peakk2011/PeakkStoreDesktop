const Nav = document.getElementById('Navbar');
const NavTools = document.getElementById('NavTools');
const Theme = document.getElementById("Text");
const TextColor = document.getElementById('TextColor');
const SideBarTog = document.getElementById("hamToside");
const ThemeSelc = document.getElementById("ThemeSelc");
const ExitToNa = document.getElementById("ExitTonavbar");
const TextNavbar = document.getElementById("TextNavbar");

// NavTools.addEventListener('mouseenter', NavMoving)
NavTools.addEventListener('mousemove', NavMoving)
// Nav.addEventListener('mouseenter', NavMoving)
Nav.addEventListener('click', NavMoving)
// Nav.addEventListener('mouseout', NavMovingOut)
NavTools.addEventListener('mouseout', NavMovingOut)

function NavMoving() {
    NavTools.style.opacity = "1";
    NavTools.style.transform = "translateY(0px)"
    document.removeEventListener('mouseenter', NavMoving);
}

function NavMovingOut() {
    setTimeout(function() {
        NavTools.style.opacity = "0";
        NavTools.style.transform = "translateY(-370px)"
    }, 1000);
}

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
        setTimeout(function() {
            ExitToNa.style.transform = "translateY(0px)";
            ExitToNa.style.opacity = "1";
        }, 20);
        ThemeSelc.style.transform = "translate(-50%, -50%)"
    }, 500);
    Nav.removeEventListener('click', NavMoving)
    TextNavbar.textContent = "Themes";
}

function ExitThemeSelc() {
    setTimeout(function() {
        Theme.style.transform = "translateX(-0px)";
        TextColor.style.transform = "translateX(-0px)";
        SideBarTog.style.transform = "translateX(-0px)";
        Theme.style.opacity = "1";
        TextColor.style.opacity = "1";
        SideBarTog.style.opacity = "1";
        Nav.addEventListener('click', NavMoving)
    }, 500);
    setTimeout(function() {
        Theme.style.display = "block";
        TextColor.style.display = "block";
        SideBarTog.style.display = "block";
    }, 300);
    setTimeout(function() {
        ExitToNa.style.transform = "translateY(-60px)";
        ExitToNa.style.opacity = "0";
        ThemeSelc.style.transform = "translate(-50%, -150%)"
        setTimeout(function() {
            ExitToNa.style.display = "none";
            TextNavbar.textContent = "Peakk Store";
        }, 80);
    }, 30);
}