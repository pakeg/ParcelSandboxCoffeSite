import "./styles.css";

let navbar = document.getElementsByClassName("navbar")[0];
let cartItemsContainer = document.getElementsByClassName(
  "cart-items-container"
)[0];
let searchForm = document.getElementsByClassName("search-form")[0];

document.getElementById("menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  cartItemsContainer.classList.remove("active");
  searchForm.classList.remove("active");
};
document.getElementById("cart-btn").onclick = () => {
  cartItemsContainer.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};
document.getElementById("search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItemsContainer.classList.remove("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
  cartItemsContainer.classList.remove("active");
  searchForm.classList.remove("active");
};
