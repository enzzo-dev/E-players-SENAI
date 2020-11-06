function setUp() {
    document.getElementById('menu').onclick = setMenu();
}

function setMenu() {
    var menuBox = document.getElementById('menu-box');
    menuBox.className = "menuBox";   
}

function toggleMenu() {
    var menuBox = document.getElementById('menu-box');    
    if(menuBox.style.display == "block") { // if is menuBox displayed, hide it
      menuBox.style.display = "none";
    }
    else { // if is menuBox hidden, display it
      menuBox.style.display = "block";
    }
  }
  setUp();
  toggleMenu();
  setMenu();  