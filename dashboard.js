const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.mobile-navigation');

hamburger.addEventListener('click', () => {
  // Toggle the "close" class to switch between hamburger and "X" button
  hamburger.classList.toggle('close');
  
  // Toggle the visibility of the mobile navigation menu
  navigation.classList.toggle('active');
});