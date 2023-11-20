const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})
cerrar.addEventListener("click" , () => {
    nav.classList.remove("visible");
})

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_uz7qrk7';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
/*Swiper*/
var swiper = new Swiper(".mySwiper", {
  pagination: {
  el: ".swiper-pagination",
  type: "progressbar",
  },
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
});

// Esta función se llama automáticamente cuando se carga la API de YouTube
function onYouTubeIframeAPIReady() {
  // Crea el reproductor
  new YT.Player('player', {
    height: '360', // Alto del reproductor
    width: '640', // Ancho del reproductor
    videoId: 'Yj7cXgKm5tw', // ID del video de YouTube que deseas reproducir
    playerVars: {
      'autoplay': 1, // Reproducción automática
    },
  });
}
