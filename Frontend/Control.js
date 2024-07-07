const Nav = document.getElementById('Navbar');
const NavTools = document.getElementById('NavTools');

NavTools.addEventListener('mouseenter', NavMoving)
NavTools.addEventListener('mousemove', NavMoving)
Nav.addEventListener('mouseenter', NavMoving)
Nav.addEventListener('click', NavMoving)
Nav.addEventListener('mouseout', NavMovingOut)
NavTools.addEventListener('mouseout', NavMovingOut)

function NavMoving() {
    NavTools.style.opacity = "1";
    NavTools.style.transform = "translateY(0px)"
    document.removeEventListener('mouseenter', NavMoving);
}

function NavMovingOut() {
    NavTools.style.opacity = "0";
    NavTools.style.transform = "translateY(-370px)"
}