function GETmainpageToggleOn() {
    setTimeout(function () {
        window.open("done.html", "_parent", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=800");
    }, 100);
    // document.getElementById('PeakkStoreintro').className = 'classname';
    document.getElementById('PeakkStoreintro').classList.add('Animation');
    document.getElementById('ThisNavbar').classList.add('ThisClassCloseNav')
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function CloseWindow() {
    window.close()
}