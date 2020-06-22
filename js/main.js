let menu_button = document.getElementsByClassName("menu-button");
let mobile_menu = document.getElementsByClassName("mobile-menu");

let clicked_button = function () {
  mobile_menu[0].classList.toggle("active");
};

menu_button[0].addEventListener("click", clicked_button);
