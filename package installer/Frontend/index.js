const Sbar = document.getElementById("Sidebar");
const WindowPeakkStore = window.open("https://www.example.com", "_blank");
const ClsidebarICON = document.getElementById("OpSidbar");
const ClsMainSidbarICON = document.getElementById("MainOpsidbar");
const BGfocusBLUR = document.getElementById("bgFOCUSSbar");

function ToggleSidebar() {
    Sbar.style.left = "0";
    Sbar.style.opacity = "1";
    ClsidebarICON.style.display = "flex";
    ClsMainSidbarICON.style.display = "none";
    BGfocusBLUR.style.visibility = "visible";
    BGfocusBLUR.style.opacity = "1";
    document.getElementById("Sidebar").addEventListener("click", function() {
        Sbar.style.left = "0";
        Sbar.style.opacity = "1";
        BGfocusBLUR.style.visibility = "visible";
        BGfocusBLUR.style.opacity = "1";
        ClsidebarICON.style.display = "flex";
        ClsMainSidbarICON.style.display = "none";
        setTimeout(function () {
        ClsidebarICON.style.display = "none";
        ClsMainSidbarICON.style.display = "flex";
        }, 2000);
    });
}

function CloseSidebar() {
    Sbar.style.left = "-27px";
    Sbar.style.opacity = "0";
    ClsidebarICON.style.display = "none";
    ClsMainSidbarICON.style.display = "flex";
    BGfocusBLUR.style.visibility = "hidden";
    BGfocusBLUR.style.opacity = "0";
}

ClsidebarICON.style.display = "none";

document.getElementById("Sidebar").addEventListener("click", function() {
    Sbar.style.left = "0";
    Sbar.style.opacity = "1";
    BGfocusBLUR.style.visibility = "hidden";
    BGfocusBLUR.style.opacity = "0";
    setTimeout(function () {
        Sbar.style.left = "-27px";
        Sbar.style.opacity = "0";
        BGfocusBLUR.style.visibility = "hidden";
        BGfocusBLUR.style.opacity = "0";
        // ClsidebarICON.style.display = "none";
        // ClsMainSidbarICON.style.display = "flex";
        
      }, 2000);
});
