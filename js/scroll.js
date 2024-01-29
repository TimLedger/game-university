document.addEventListener("DOMContentLoaded", function() {
  const carouselWrapper = document.getElementById('carouselWrapper');
  const prevBtn = document.querySelector('.btn__review-left');
  const nextBtn = document.querySelector('.btn__review-right');
  const itemWidth = carouselWrapper.querySelector('.review__card').offsetWidth;
  let currentPosition = 0;

  carouselWrapper.style.scrollSnapType = "x mandatory";

  carouselWrapper.addEventListener('scroll', function() {
      updateButtons();
  });

  prevBtn.addEventListener('click', function() {
      if (currentPosition > 0) {
          currentPosition -= itemWidth;
          carouselWrapper.scrollTo({ left: currentPosition, behavior: 'smooth' });
      }
      updateButtons();
  });

  nextBtn.addEventListener('click', function() {
      if (currentPosition < (carouselWrapper.scrollWidth - carouselWrapper.offsetWidth)) {
          currentPosition += itemWidth;
          carouselWrapper.scrollTo({ left: currentPosition, behavior: 'smooth' });
      }
      updateButtons();
  });

  function updateButtons() {
      if (carouselWrapper.scrollLeft <= 0) {
          prevBtn.classList.add('btn__disabled-left'); 
      } else {
          prevBtn.classList.remove('btn__disabled-left'); 
      }
    
      if (carouselWrapper.scrollLeft >= (carouselWrapper.scrollWidth - carouselWrapper.offsetWidth)) {
          nextBtn.classList.add('btn__disabled-right'); 
      } else {
          nextBtn.classList.remove('btn__disabled-right'); 
      } 
  }

});