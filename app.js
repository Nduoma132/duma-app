// const hamburger = document.querySelector(".hamburger");
// const navigation = document.querySelector(".mobile-navigation");

// hamburger.addEventListener("click", () => {
//   if (navigation.style.display === "block") {
//     navigation.style.display = "none";
//     hamburger.style.display = "block";
//   } else {
//     navigation.style.display = "block";
//     hamburger.style.display = "none";
//   }
// });

// function toggleMenu() {
//   var hamburger = document.querySelector(".hamburger");
//   var navigation = document.querySelector(".mobile-navigation");

//   // Toggle the "change" class on the menu icon
//   hamburger.classList.toggle("close");

//   // Toggle the active state for the nav menu (optional)
//   navigation.classList.toggle("active");
// }

const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.mobile-navigation');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('close');
  navigation.classList.toggle('active');
});
