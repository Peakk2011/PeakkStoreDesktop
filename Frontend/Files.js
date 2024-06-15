const Search = document.getElementById("Search")

function CloseSidebar() {
    document.getElementById("SideBar").style.left = "-300px";
    document.getElementById("HighLightClickHome").style.borderBottom = "0px solid currentColor";
}

function ReturnSidebar() {
    document.getElementById("SideBar").style.left = "0";
    document.getElementById("HighLightClickHome").style.borderBottom = "1px solid currentColor";
}

function ToggleSearch() {
    document.getElementById("Search").style.transform = 'translateY(0px)';
    document.getElementById("CloseSearch").style.display = "block";
    document.getElementById("OpenSearch").style.display = "none";
}

function CloseSearch() {
    document.getElementById("Search").style.transform = 'translateY(-60px)';
    document.getElementById("CloseSearch").style.display = "none";
    document.getElementById("OpenSearch").style.display = "block";
}