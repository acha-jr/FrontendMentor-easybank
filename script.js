const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close");

closeMenu.classList = "inactive";
menu.addEventListener("click", () => {
  menu.classList = "inactive";
  closeMenu.classList = "";
});
closeMenu.addEventListener("click", () => {
  closeMenu.classList = "inactive";
  menu.classList = "";
});

const nav = document.querySelector("nav");
let x = window.matchMedia("(min-width: 375px) and (max-width: 990px)");
if (x.matches) {
  menu.addEventListener("click", () => {
    nav.style.height = "270px";
    nav.style.padding = "30px";
    nav.style.boxShadow = "0px 80px 100px 50px hsla(233, 26%, 24%, 0.6)";
  });

  closeMenu.addEventListener("click", () => {
    nav.style.height = "0";
    nav.style.padding = "0";
    nav.style.boxShadow = "none";
  });
}

document.addEventListener("mouseup", (e) => {
  if (x.matches) {
    if (e.target != nav) {
      nav.style.height = "0";
      nav.style.padding = "0";
      nav.style.boxShadow = "none";
      closeMenu.classList = "inactive";
      menu.classList = "";
    }
  }
});
