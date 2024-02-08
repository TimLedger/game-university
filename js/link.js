function isMobile() {
    return /iPhone|iPod|Android/i.test(navigator.userAgent);
}

window.onload = function() {
  const redirectLinks = document.querySelectorAll(".redirect-link");
  for (let i = 0; i < redirectLinks.length; i++) {
      const link = redirectLinks[i];
    const mobileURL = link.getAttribute("data-mobile");
    const desktopURL = link.getAttribute("data-desktop");
    link.href = isMobile() ? mobileURL : desktopURL;
  }
};


  