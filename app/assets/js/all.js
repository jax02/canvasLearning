// console.log('Hello!');

// $(document).ready(() => {
//   console.log('HexSchool Hello!');
// });
const load = document.querySelector('.loader');
function loader (){
  setTimeout(() => { 
    load.style.display = 'none';}
    , 3000);
}
loader ();
let swiper = new Swiper(".courseSwiper", {
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
    prevEl: ".swiper-button-prev",
  },
});