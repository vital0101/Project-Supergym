document.querySelector('.page-footer__nav-wrapper').classList.add('accordion');
document.querySelector('.page-footer__nav-header').classList.add('accordion__header');
document.querySelector('.page-footer__contacts-wrapper').classList.add('accordion');
document.querySelector('.page-footer__contacts-header').classList.add('accordion__header');
document.querySelector('.page-footer__nav-col-wrapper').classList.add('accordion__content');
document.querySelector('.page-footer__contacts').classList.add('accordion__content');

const accordions = document.querySelectorAll('.accordion');

const openAcc = () => {
  accordions.forEach(function (section) {
    section.addEventListener('click', function (e) {
      let acc = e.target.closest('.accordion');
      if (acc.classList.contains('active')) {
        acc.classList.remove('active');
      } else {
        accordions.forEach(function (el) {
          el.classList.remove('active');
        });
        acc.classList.add('active');
      }
    });
  });
};

export {openAcc};
