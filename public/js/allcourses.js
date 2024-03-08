

var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 5000);

//Accordion

const accordion = document.getElementsByClassName('contentBx');
for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}
var SwiperSlide = new Swiper(".mySwiper", {
  spaceBetween: 10,
  centeredSlides: true,
    
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
    type: "progressbar",
    
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
});