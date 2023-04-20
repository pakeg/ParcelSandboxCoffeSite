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

navbar.onmouseenter = () => {
  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.height = "2px";
  div.style.backgroundColor = "#d3ad7f";
  navbar.append(div);

  navbar.onmousemove = (e) => {
    if (e.target === e.currentTarget) {
      return;
    }
    div.style.width = e.target.offsetWidth + "px";
    div.style.left = e.target.offsetLeft + "px";
  };

  navbar.onmouseleave = (e) => {
    div.remove();
  };
};
