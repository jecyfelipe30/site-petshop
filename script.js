const images = document.querySelectorAll('.carousel img');
let current = 0;

function nextImage() {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}

setInterval(nextImage, 4000); // troca a cada 4 segundos
