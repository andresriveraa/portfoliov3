const App = document.getElementById('app')
const imgHero = document.getElementById('imgHero')

const Load = document.getElementById('Load')

window.addEventListener("load", function(event) {
  // imgHero.src = 'http://www.andresrivera.com.co/assets/img/Andres-full.png'
  imgHero.src = '/assets/img/Andres-full.png'
  App.classList.remove('loadHide')
  Load.style.display = 'none'  
});