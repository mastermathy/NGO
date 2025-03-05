function toggleMenu() {
  const nav = document.querySelector("nav");
  const header = document.getElementById("header");
  nav.classList.toggle("active");
  header.classList.toggle("expanded");
}

function donateNow() {
  alert("Thank you for your support!");
}


