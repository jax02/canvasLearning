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