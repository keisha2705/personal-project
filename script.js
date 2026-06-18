emailjs.init({
  publicKey: "4crrmrwa01WRw7Cz1", 
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const serviceID = 'service_6sap9d7';
  const templateID = 'template_42fqnbu'; 


    
    emailjs.sendForm(serviceID, templateID, this)
        .then(function() {
            alert('Sent successfully!');
            form.reset(); 
        })
        .catch(function(error) {
            alert('Failed to send... ' + JSON.stringify(error));
        });
});

// SWIPERJS

let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false, 
  }, 
  pagination: { 
    el: ".swiper-pagination", 
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next", 
    prevEl: ".swiper-button-prev",
  },
});

