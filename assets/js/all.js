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
//# sourceMappingURL=all.js.map
