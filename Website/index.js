// kickOut desktop user to Peakk store desktop

window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 500px)").matches) {
    window.open("https://peakk2011.github.io/PeakkStoreDesktop/Frontend/","_parent");
    // window.open("../Frontend/index.html","_parent");
  } else {
    window.open("https://peakk2011.github.io/PeakkStoreDesktop/Frontend/","_parent");
  }
})

document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

const ButtonToggle = document.getElementById("myBtn");
const GetNAVOUTNOW = document.getElementById("TurnNavOFF");

ButtonToggle.addEventListener("click", GetToggleON)
GetNAVOUTNOW.addEventListener("click", GetToggleOUST)

function GetToggleON() {
  document.getElementById("GetNavOnNow").style.display = ('block')
  document.getElementById("NavbarVeryMainNo").style.top = ('-100px')
  document.getElementById('MainBottomNavbar').style.bottom = ('-70px')
  document.getElementById("MainNavSideOFF").style.transform = "translateX(-0px)"
  ButtonToggle.style.display = ("none")
  document.getElementById('MainNavSideOFF').style.display = ('block')
  document.getElementById("Backgro").style.opacity = "1"
  document.getElementById("Backgro").style.visibility = "visible"
  document.getElementById("Backgro").style.width = "100%"
  // Search close when proces
  document.getElementById("SearchBox").style.opacity = "0"
  document.getElementById("SearchBox").style.top = "-140px"
}

function ThisToggleOnSlideOUT() {
  document.getElementById("GetNavOnNow").style.display = ('none')
  document.getElementById("MainNavSideOFF").style.transform = "translateX(-310px)"
  ButtonToggle.style.display = ("block")
  document.getElementById("Backgro").style.opacity = "1"
  document.getElementById("Backgro").style.visibility = "hidden"
  document.getElementById("Backgro").style.width = "0px"
}

function GetToggleOUST() {
  document.getElementById("GetNavOnNow").style.display = ('none')
  document.getElementById("MainNavSideOFF").style.transform = "translateX(-310px)"
  ButtonToggle.style.display = ("block")
  document.getElementById("NavbarVeryMainNo").style.top = ('0px')
  document.getElementById('MainBottomNavbar').style.bottom = ('0px')
  document.getElementById("Backgro").style.opacity = "1"
  document.getElementById("Backgro").style.visibility = "hidden"
  document.getElementById("Backgro").style.width = "0px"
}

// const myTimeout = setTimeout(myGreeting, 500);

// function myGreeting() {
//     document.getElementById("NavbarVeryMainNo").style.top = ('0px')
// }

// alert click to site

let myWindow;

function OpenWindow() {
  myWindow = window.open("https://peakk2011.github.io/PeakkStoreDesktop/Website/", "_blank", "toolbar=no,scrollbars=no,resizable=no,top=50%,left=50%,width=360,height=810");
}


function GetSearchOn() {
  document.getElementById("SearchBox").style.top = "0px"
  document.getElementById("SearchBox").style.opacity = "1"
  if (this.scrollY > 350) {
    document.getElementById("SearchBox").style.top = "58px"
  }
  // document.body.style.backdropFilter = "blur(20px)"
  document.getElementById("LanguageToggle").style.opacity = "0"
  // close theme when Search work
  const ThemeSetUP = document.getElementById("ThemeDevelopSETUP");
  ThemeSetUP.style.opacity = "0"
  ThemeSetUP.style.bottom = "-240px"
  document.getElementById("Backgro").style.opacity = "1"
  document.getElementById("Backgro").style.visibility = "hidden"
  document.getElementById("Backgro").style.width = "0px"
  MenuLinksCloseCheck()
  document.body.style.overflow = "hidden"
}

function CloseSearch() {
  document.getElementById("SearchBox").style.opacity = "0"
  document.getElementById("SearchBox").style.top = "-140px"
  // document.body.style.backdropFilter = "blur(0px)"
  const ThemeSetUP = document.getElementById("ThemeDevelopSETUP");
  ThemeSetUP.style.opacity = "0"
  ThemeSetUP.style.bottom = "-240px"
  document.getElementById("Backgro").style.opacity = "1"
  document.getElementById("Backgro").style.visibility = "hidden"
  document.getElementById("Backgro").style.width = "0px"
  document.getElementById("SearchBox").style.zIndex = "2"
  document.body.style.overflow = "scroll"
}

function LanguageSetup() {
  document.getElementById("LanguageToggle").style.bottom = "56px"
  document.getElementById("LanguageToggle").style.opacity = "1"
  document.getElementById("SearchBox").style.opacity = "0"
  // close theme when language proces
  const ThemeSetUP = document.getElementById("ThemeDevelopSETUP");
  ThemeSetUP.style.opacity = "0"
  ThemeSetUP.style.bottom = "-240px"
  document.getElementById("Backgro").style.opacity = "1"
  document.getElementById("Backgro").style.visibility = "hidden"
  document.getElementById("Backgro").style.width = "0px"
  document.getElementById("MainBottomNavbar").style.bottom = "0"
  MenuLinksCloseCheck()
  document.body.style.overflow = "hidden"
}

function CloseLanguageSetup() {
  document.getElementById("LanguageToggle").style.bottom = "-160px"
  document.getElementById("LanguageToggle").style.opacity = "0"
  document.body.style.overflow = "scroll"
}

function changeCss() {
  var navElement = document.querySelector("nav"); //after >
  this.scrollY > 300 ? navElement.style.top = "0px" : navElement.style.top = "-70px";

  var navElementMenuTabs = document.getElementById("MenuTabs"); //after >
  this.scrollY > 300 ? navElementMenuTabs.style.top = "57px" : navElementMenuTabs.style.top = "-70px";

  var navElement = document.getElementById("SearchBox"); //after >
  this.scrollY > 300 ? navElement.style.top = "58px" : navElement.style.opacity = "0"

  var HeaderPall = document.querySelector("header"); //after >
  this.scrollY > 200 ? HeaderPall.style.opacity = 0 : HeaderPall.style.opacity = 1;

  var SliderPall = document.querySelector(".cropcolorSlider"); //after >
  this.scrollY > 600 ? SliderPall.style.opacity = 0 : SliderPall.style.opacity = 1;

  var SigninSection = document.querySelector(".SignIn"); //after >
  this.scrollY > 1000 ? SigninSection.style.opacity = 0 : SigninSection.style.opacity = 1;

  var TextSuggess = document.getElementById("TextNub2Suggess"); //after >
  this.scrollY > 1100 ? TextSuggess.style.opacity = 0 : TextSuggess.style.opacity = 1;

  var TextAlertSec = document.querySelector(".callout"); //after >
  this.scrollY > 1000 ? TextAlertSec.style.opacity = 0 : TextAlertSec.style.opacity = 1;

}

window.addEventListener("scroll", changeCss, false);

// function CssScrollX () {
//   var SidebarScrollX = document.getElementById("MainNavSideOFF");
//   this.scrollX > 2 ? GetToggleON() : GetToggleOUST();
// }

// window.addEventListener("scroll", CssScrollX , false);

function ThemeSetupCheck() {
  const ThemeSetUP = document.getElementById("ThemeDevelopSETUP");
  ThemeSetUP.style.opacity = "1"
  ThemeSetUP.style.bottom = "58px"
  ThemeSetUP.style.zIndex = "3";
  document.getElementById('MainBottomNavbar').style.zIndex = "24";
  document.getElementById("SearchBox").style.zIndex = "3"
  document.getElementById("Backgro").style.opacity = "1"
  document.getElementById("Backgro").style.visibility = "visible"
  document.getElementById("Backgro").style.width = "100%"
  // document.body.style.overflow = "hidden"
  // language hide when click
  document.getElementById("LanguageToggle").style.bottom = "-160px"
  document.getElementById("LanguageToggle").style.opacity = "0"
  MenuLinksCloseCheck()
  document.getElementById("MainBottomNavbar").style.bottom = "0"
  document.body.style.overflow = "hidden"
}

function ThemeCloseCheck() {
  const ThemeSetUP = document.getElementById("ThemeDevelopSETUP");
  ThemeSetUP.style.opacity = "0"
  ThemeSetUP.style.bottom = "-240px"
  document.getElementById("Backgro").style.opacity = "1"
  document.getElementById("Backgro").style.visibility = "hidden"
  document.getElementById("Backgro").style.width = "0px"
  document.body.style.overflow = "scroll"
  // language hide when click
  document.getElementById("LanguageToggle").style.bottom = "-160px"
  document.getElementById("LanguageToggle").style.opacity = "0"
  // IF close theme search will close too
  document.getElementById("SearchBox").style.opacity = "0"
  document.getElementById("SearchBox").style.top = "-140px"
  document.getElementById("SearchBox").style.zIndex = "1"
  document.body.style.overflow = "scroll"
}

// Menu toggle

function MenuLinksSetup() {
  document.getElementById("ToogleLinks").style.bottom = "70px"
  document.getElementById("MenuBlurToggleDirefent").style.bottom = "0"
  document.getElementById('MainBottomNavbar').style.zIndex = "12";
  ThemeCloseCheck()
  document.getElementById("MainBottomNavbar").style.bottom = "0"
  CloseLanguageSetup()
  document.body.style.overflow = "scroll"
}

function MenuLinksCloseCheck() {
  document.getElementById("ToogleLinks").style.bottom = "-370px"
  document.getElementById("MenuBlurToggleDirefent").style.bottom = "-120%"
  document.getElementById('MainBottomNavbar').style.zIndex = "4";
}

changeCss()


function BeginNavHid() {
  document.getElementById('MainNavSideOFF').style.display = ('none')
}

BeginNavHid()

setTimeout(function () {
  document.getElementById('Preloader').style.width = "0px"
  document.getElementById('InsidePreLoa').style.opacity = "0"
  document.getElementById('InsidePreLoa').style.visibility = "hidden"
  document.body.style.overflow = "scroll"
}, 1500);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const pressedButtonSelector = '[data-theme][aria-pressed="true"]';
const defaultTheme = 'green';

const applyTheme = (theme) => {
  const target = document.querySelector(`[data-theme="${theme}"]`);
  document.documentElement.setAttribute("data-selected-theme", theme);
  document.querySelector(pressedButtonSelector).setAttribute('aria-pressed', 'false');
  target.setAttribute('aria-pressed', 'true');
};

const handleThemeSelection = (event) => {
  const target = event.target;
  const isPressed = target.getAttribute('aria-pressed');
  const theme = target.getAttribute('data-theme');

  if (isPressed !== "true") {
    applyTheme(theme);
    localStorage.setItem('selected-theme', theme);
  }
}

const setInitialTheme = () => {
  const savedTheme = localStorage.getItem('selected-theme');
  if (savedTheme && savedTheme !== defaultTheme) {
    applyTheme(savedTheme);
  }
};

setInitialTheme();

const themeSwitcher = document.querySelector('.theme-switcher');
const buttons = themeSwitcher.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', handleThemeSelection);
});

// Settings

function setting() {
  setTimeout(function () {
    document.getElementById("MAINBODYSTYLEOUT").style.display = "none"
    document.getElementById("MAINBODYSTYLEOUT").style.zIndex = "101"
    // document.getElementById("CropSetting").style.marginTop = "0rem"
  }, 900);
  setTimeout(function () {
    document.getElementById("CropSetting").style.marginTop = "0rem"
  }, 160);
  document.getElementById("MAINBODYSTYLEOUT").className = 'SlideAnimationBODY';

  setTimeout(function () {
    document.getElementById("Navbi").style.bottom = "-30px";
  }, 40);
}

function ClOSESettingsCheck() {
  document.getElementById("CropSetting").style.marginTop = "70rem"
  setTimeout(function () {
    document.getElementById("MAINBODYSTYLEOUT").style.display = "block"
    document.getElementById("MAINBODYSTYLEOUT").style.zIndex = "0"
    document.getElementById("MAINBODYSTYLEOUT").className = 'SlideAnimationBODYremove';
    // document.getElementById("CropSetting").style.marginTop = "0rem"
  }, 100);
  setTimeout(function () {
    document.getElementById("Navbi").style.bottom = "0px";
  }, 0);
  MenuSettingsConn.style.bottom = "-100rem"
  ThemeCloseCheck()
}

// Theme selecter on settings

function OpenThemeSecOnSettings() {
  // close settings first when toggle settings
  document.getElementById("CropSetting").style.marginTop = "70rem"
  setTimeout(function () {
    document.getElementById("MAINBODYSTYLEOUT").style.display = "block"
    document.getElementById("MAINBODYSTYLEOUT").style.zIndex = "0"
    document.getElementById("MAINBODYSTYLEOUT").className = 'SlideAnimationBODYremove';
    // document.getElementById("CropSetting").style.marginTop = "0rem"
  }, 100);
  setTimeout(function () {
    // Theme toggle
    const ThemeSetUP = document.getElementById("ThemeDevelopSETUP");
    ThemeSetUP.style.opacity = "1"
    ThemeSetUP.style.bottom = "58px"
    ThemeSetUP.style.zIndex = "3";
    document.getElementById('MainBottomNavbar').style.zIndex = "4";
    document.getElementById("SearchBox").style.zIndex = "3"
    document.getElementById("Backgro").style.opacity = "1"
    document.getElementById("Backgro").style.visibility = "visible"
    document.getElementById("Backgro").style.width = "100%"
    // document.body.style.overflow = "hidden"
    // language hide when click
    document.getElementById("LanguageToggle").style.bottom = "-160px"
    document.getElementById("LanguageToggle").style.opacity = "0"
  }, 200);
}

function OpenLANGUAGEsecOnSettings() {
  // close settings first when toggle settings
  document.getElementById("CropSetting").style.marginTop = "70rem"
  setTimeout(function () {
    document.getElementById("MAINBODYSTYLEOUT").style.display = "block"
    document.getElementById("MAINBODYSTYLEOUT").style.zIndex = "0"
    document.getElementById("MAINBODYSTYLEOUT").className = 'SlideAnimationBODYremove';
    // document.getElementById("CropSetting").style.marginTop = "0rem"
  }, 100);
  setTimeout(function () {
    // Language toggle
    document.getElementById("LanguageToggle").style.bottom = "58px"
    document.getElementById("LanguageToggle").style.opacity = "1"
    document.getElementById("SearchBox").style.opacity = "0"
    // close theme when language proces
    const ThemeSetUP = document.getElementById("ThemeDevelopSETUP");
    ThemeSetUP.style.opacity = "0"
    ThemeSetUP.style.bottom = "-240px"
    document.getElementById("Backgro").style.opacity = "1"
    document.getElementById("Backgro").style.visibility = "hidden"
    document.getElementById("Backgro").style.width = "0px"
  }, 200);
}

// ALERTCLICK()

function ALERTCLICK() {
  document.getElementById("OVERLAYSETUP").style.display = "block"
}

function OFFHOMESECURECheck() {
  document.getElementById("OVERLAYSETUP").style.display = "none"
}

// OPEN FUCTION LIKE <A>

function FontSfproOpen() {
  setTimeout(function () {
    window.open("FontPage/Sfpro.html", "_parent");
  }, 300);
}

function FontSegoeOpen() {
  setTimeout(function () {
    window.open("FontPage/SegoeUi.html", "_parent");
  }, 300);
}

function FontHelveticaOpen() {
  setTimeout(function () {
    window.open("FontPage/Helveica.html", "_parent");
  }, 300);
}

function FontRobotoOpen() {
  setTimeout(function () {
    window.open("FontPage/Roboto.html", "_parent");
  }, 300);
}

function CloseFontSelecterCheck() {
  document.getElementById("HTMLfontSelecter").style.visibility = "hidden";
  document.getElementById("HTMLfontSelecter").style.opacity = "0";
}

function TypefaceSetupCheck() {
  setTimeout(function () {
    document.getElementById("HTMLfontSelecter").style.visibility = "visible";
    document.getElementById("HTMLfontSelecter").style.opacity = "1";
  }, 250);
  document.getElementById("ToogleLinks").style.bottom = "-370px"
  document.getElementById("MenuBlurToggleDirefent").style.bottom = "-120%"
  document.getElementById('MainBottomNavbar').style.zIndex = "4";
}

// Hide bottomNavbar when scroll

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("MainBottomNavbar").style.bottom = "0"
  } else {
    document.getElementById("MainBottomNavbar").style.bottom = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

function OpenBottomNavbarClickCheck() {
  setTimeout(function () {
    document.getElementById("MainBottomNavbar").style.bottom = "30px"
  }, 250);
  document.getElementById("MainBottomNavbar").style.bottom = "-60px";
}

// slider

let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.items');

const end = () => {
  isDown = false;
  slider.classList.remove('active');
}

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

const move = (e) => {
  if (!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
}

(() => {
  slider.addEventListener('mousedown', start);
  slider.addEventListener('touchstart', start);

  slider.addEventListener('mousemove', move);
  slider.addEventListener('touchmove', move);

  slider.addEventListener('mouseleave', end);
  slider.addEventListener('mouseup', end);
  slider.addEventListener('touchend', end);
})();

// Settings toggle menu
const TextIntroSe = document.getElementById("TEXTSettingsIntro");
const MenuSettingsConn = document.getElementById("SettingsMenuToggleList");
const Tabs = document.getElementById("MenuTabs");
const ExitBtn = document.getElementById("ExitFunctionSettings");

function OpenMenu() {
  MenuSettingsConn.style.bottom = "0";
  TextIntroSe.style.opacity = "0";
  MenuSettingsConn.style.bottom = "0px";
  MenuSettingsConn.style.opacity = "1";
  ExitBtn.style.opacity = "1";
}

function OpenTabs() {
  document.getElementById("CropSetting").style.marginTop = "70rem"
  setTimeout(function () {
    document.getElementById("MAINBODYSTYLEOUT").style.display = "block"
    document.getElementById("MAINBODYSTYLEOUT").style.zIndex = "0"
    document.getElementById("MAINBODYSTYLEOUT").className = 'SlideAnimationBODYremove';
    // document.getElementById("CropSetting").style.marginTop = "0rem"
  }, 100);
  setTimeout(function () {
    document.getElementById("Navbi").style.bottom = "0px";
  }, 0);
  MenuSettingsConn.style.bottom = "-100rem"
  ThemeCloseCheck()
  // Tabs toggle ON
  Tabs.style.left = "0";
  document.getElementById("TextMenuTabs").style.left = "0";
  document.getElementById("MenuTabsLinks").style.display = "none";
  document.getElementById("CloseMenuTabs").style.display = "block";
  document.getElementById("OpenTabsCheck").style.display = "none";
  document.getElementById("CloseMenuBtn").style.display = "block";
}

function OpenTabsWith() {
  document.getElementById("GetNavOnNow").style.display = ('none')
  document.getElementById("MainNavSideOFF").style.transform = "translateX(-310px)"
  ButtonToggle.style.display = ("block")
  document.getElementById("NavbarVeryMainNo").style.top = ('0px')
  document.getElementById('MainBottomNavbar').style.bottom = ('0px')
  document.getElementById("Backgro").style.opacity = "1"
  document.getElementById("Backgro").style.visibility = "hidden"
  document.getElementById("Backgro").style.width = "0px"
  // Tabs toggle ON
  Tabs.style.left = "0";
  document.getElementById("TextMenuTabs").style.left = "0";
  document.getElementById("MenuTabsLinks").style.display = "none";
  document.getElementById("CloseMenuTabs").style.display = "block";
  document.getElementById("OpenTabsCheck").style.display = "none";
  document.getElementById("CloseMenuBtn").style.display = "block";
}

function ExitThis() {
  Tabs.style.left = "-130rem";
  // exit sidebar
  document.getElementById("GetNavOnNow").style.display = ('none')
  document.getElementById("MainNavSideOFF").style.transform = "translateX(-310px)"
  ButtonToggle.style.display = ("block")
  document.getElementById("NavbarVeryMainNo").style.top = ('0px')
  document.getElementById('MainBottomNavbar').style.bottom = ('0px')
  document.getElementById("Backgro").style.opacity = "1"
  document.getElementById("Backgro").style.visibility = "hidden"
  document.getElementById("Backgro").style.width = "0px"
    document.getElementById("MenuTabsLinks").style.display = "block"
  document.getElementById("CloseMenuTabs").style.display = "none"
  document.getElementById("CloseMenuBtn").style.display = "none"
  document.getElementById("OpenTabsCheck").style.display = "block"
  ExitBtn.style.opacity = "0";
}

function CloseTabsWithSetting() {
  Tabs.style.left = "-130rem";
  document.getElementById("CropSetting").style.marginTop = "70rem"
  setTimeout(function () {
    document.getElementById("MAINBODYSTYLEOUT").style.display = "block"
    document.getElementById("MAINBODYSTYLEOUT").style.zIndex = "0"
    document.getElementById("MAINBODYSTYLEOUT").className = 'SlideAnimationBODYremove';
    // document.getElementById("CropSetting").style.marginTop = "0rem"
  }, 100);
  setTimeout(function () {
    document.getElementById("Navbi").style.bottom = "0px";
  }, 0);
  MenuSettingsConn.style.bottom = "-100rem"
  ThemeCloseCheck()
  ExitBtn.style.opacity = "0";
}

function CloseDivWhenClicksIT() {
  GetToggleOUST()
  MenuLinksCloseCheck()
  ThemeCloseCheck()
}

function ExtANYfucnctionSettings() {
  TextIntroSe.style.opacity = "1";
  MenuSettingsConn.style.bottom = "-50px";
  MenuSettingsConn.style.opacity = "0";
  ExitBtn.style.opacity = "0";
}