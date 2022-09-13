const smoothLinks = document.querySelectorAll('a[href^="#"]');

const isSmoothScroll = () => {
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
};

export {isSmoothScroll};
