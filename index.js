// window.onresize = () => {
//   var win = window,
//     doc = document,
//     docElem = doc.documentElement,
//     body = doc.getElementsByTagName("body")[0],
//     x = win.innerWidth || docElem.clientWidth || body.clientWidth,
//     y = win.innerHeight || docElem.clientHeight || body.clientHeight;
//   //   alert(x + " × " + y);
//   if (x <= 768) {
//     const menuIcon = document.querySelector(".menuIcon");

//     menuIcon.addEventListener("click", () => {
//       console.log("Test");
//     });
//   }
// };

const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeIcon");
const mobileMenu = document.querySelector(".mobileMenu");
const container = document.querySelector(".container");

// let menuShown = false;

function showMenu() {
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("flex", "flex-col");
  container.classList.remove("relative");
  container.classList.add("fixed");
}

function hideMenu() {
  mobileMenu.classList.add("hidden");
  mobileMenu.classList.remove("flex", "flex-col");
  container.classList.add("relative");
  container.classList.remove("fixed");
}

menuIcon.addEventListener("click", () => {
  // menuShown = true;
  showMenu();
});

closeIcon.addEventListener("click", () => {
    hideMenu();
    
});
