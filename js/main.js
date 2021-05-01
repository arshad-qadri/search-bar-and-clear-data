const searchIcon = document.getElementById("searchIcon");
const searchBar = document.getElementById("searchBar");
const clear = document.getElementById("close");
const inputVal = document.getElementById("inputVal");

searchIcon.addEventListener("click", () => {
  searchBar.classList.toggle("active");
});
clear.addEventListener("click", () => {
  inputVal.value = "";
});
