"use strict";

// console.log('Hello!');
// $(document).ready(() => {
//   console.log('HexSchool Hello!');
// });
var load = document.querySelector('.loader');

function loader() {
  setTimeout(function () {
    load.style.display = 'none';
  }, 3000);
}

loader();
var swiper = new Swiper(".courseSwiper", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  // slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
//# sourceMappingURL=all.js.map
