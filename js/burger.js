const burger = document.getElementById('burger');

function handleScroll() {
    if (burger.checked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
}

function handleCheckbox() {
    const screenWidth = window.innerWidth;
    const disableWidth = 780;
  
    if (screenWidth > disableWidth) {
      burger.checked = false;
      burger.disabled = true;
    } else {
      burger.disabled = false;
    }
}

window.addEventListener('resize', () => {
    handleCheckbox();
    handleScroll(); 
});

burger.addEventListener('click', () => {
    if (!burger.disabled) {
      handleScroll();
    }
});

handleCheckbox();
handleScroll();