let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('style');

if (style == null) {
  setTheme('light');
} else {
  setTheme(style);
}

for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    setTheme(theme);
  });
}

function setTheme(theme) {
  if (theme == 'light') {
    document.getElementById('switcher-id').href = './themes/light.css';
  } else if (theme == 'sky') {
    document.getElementById('switcher-id').href = './themes/sky.css';
  } else if (theme == 'purple') {
    document.getElementById('switcher-id').href = './themes/purple.css';
  } else if (theme == 'dark') {
    document.getElementById('switcher-id').href = './themes/dark.css';
    // Spacebank
  } else if (theme == 'Natural') { //start here
    document.getElementById('switcher-id').href = './themes/Natural1.css';
  } else if (theme == 'RedCream') {
    document.getElementById('switcher-id').href = './themes/LightRed1.css';
  } else if (theme == 'onset') {
    document.getElementById('switcher-id').href = './themes/Onset1.css';
  } else if (theme == 'solid') {
    document.getElementById('switcher-id').href = './themes/Solid1.css';
  }
  localStorage.setItem('style', theme);
}