const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.mobile-navigation');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('close');
  navigation.classList.toggle('active');
});