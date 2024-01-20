document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector('.review__inner');
  const SCROLL_SPEED = 3;

  slider.innerHTML += slider.innerHTML;
  slider.scrollLeft = slider.scrollWidth / 4;

  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('review__active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', _ => {
    isDown = false;
    slider.classList.remove('review__active');
  });

  slider.addEventListener('mouseup', _ => {
    isDown = false;
    slider.classList.remove('review__active');
    checkBoundary();
  });

  slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * SCROLL_SPEED;
    slider.scrollLeft = scrollLeft - walk;
  });

  function checkBoundary() {
    const items = document.querySelectorAll('.review__inner li');
    const firstItem = items[0];
    const lastItem = items[items.length - 1];
    const itemWidth = firstItem.offsetWidth + parseFloat(getComputedStyle(firstItem).marginRight);

    if (slider.scrollLeft < itemWidth) {
      slider.scrollLeft += slider.scrollWidth / 2;
    } else if (slider.scrollLeft > slider.scrollWidth - slider.offsetWidth - itemWidth) {
      slider.scrollLeft -= slider.scrollWidth / 2;
    }
  }
});