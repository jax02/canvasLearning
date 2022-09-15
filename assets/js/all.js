"use strict";

console.log('all start'); //loader

var load = document.querySelector('.loader');

function loader() {
  setTimeout(function () {
    load.style.display = 'none';
  }, 3000);
}

loader(); //swiper

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
var chart = c3.generate({
  bindto: "#chart",
  data: {
    columns: [['已完成', 11], ['未完成', 9]],
    colors: {
      已完成: '#DD4C57',
      未完成: '#EB9C37'
    },
    type: 'donut',
    onclick: function onclick(d, i) {
      console.log("onclick", d, i);
    },
    onmouseover: function onmouseover(d, i) {
      console.log("onmouseover", d, i);
    },
    onmouseout: function onmouseout(d, i) {
      console.log("onmouseout", d, i);
    }
  },
  donut: {
    title: "積分數：11/20"
  }
});
setTimeout(function () {
  chart.load({
    columns: [["已完成", 11], ["未完成", 9]]
  });
}, 2500);
var chart2 = c3.generate({
  bindto: "#chart2",
  data: {
    columns: [['已完成', 91], ['剩餘關卡', 9]],
    colors: {
      已完成: "#03A9F4",
      剩餘關卡: "#76FF03"
    },
    type: 'donut',
    onclick: function onclick(d, i) {
      console.log("onclick", d, i);
    },
    onmouseover: function onmouseover(d, i) {
      console.log("onmouseover", d, i);
    },
    onmouseout: function onmouseout(d, i) {
      console.log("onmouseout", d, i);
    }
  },
  donut: {
    title: "完成比例：91%"
  }
});
setTimeout(function () {
  chart2.load({
    columns: [["已完成", 91], ["剩餘關卡", 9]]
  });
}, 1500);
var chart3 = c3.generate({
  bindto: "#chart3",
  data: {
    x: 'x',
    columns: [['x', '2022-09-01', '2022-09-02', '2022-09-03', '2022-09-04', '2022-09-05', '2022-09-06', '2022-09-07'], ['已完成', 3, 5, 6, 7, 9, 11], ['剩餘關卡', 30, 27, 24, 22, 19, 19]]
  },
  axis: {
    x: {
      type: 'timeseries',
      tick: {
        format: '%Y-%m-%d'
      }
    }
  }
});
setTimeout(function () {
  chart3.load({
    columns: [["獲得積分數", 12, 13, 15, 17, 19, 21]]
  });
}, 1500);
console.log('all end');
"use strict";

var chart = c3.generate({
  bindto: "#chart",
  data: {
    columns: [['已完成', 11], ['未完成', 9]],
    colors: {
      已完成: '#DD4C57',
      未完成: '#EB9C37'
    },
    type: 'donut',
    onclick: function onclick(d, i) {
      console.log("onclick", d, i);
    },
    onmouseover: function onmouseover(d, i) {
      console.log("onmouseover", d, i);
    },
    onmouseout: function onmouseout(d, i) {
      console.log("onmouseout", d, i);
    }
  },
  donut: {
    title: "積分數：11/20"
  }
});
setTimeout(function () {
  chart.load({
    columns: [["已完成", 11], ["未完成", 9]]
  });
}, 2500);
var chart2 = c3.generate({
  bindto: "#chart2",
  data: {
    columns: [['已完成', 91], ['剩餘關卡', 9]],
    colors: {
      已完成: "#03A9F4",
      剩餘關卡: "#76FF03"
    },
    type: 'donut',
    onclick: function onclick(d, i) {
      console.log("onclick", d, i);
    },
    onmouseover: function onmouseover(d, i) {
      console.log("onmouseover", d, i);
    },
    onmouseout: function onmouseout(d, i) {
      console.log("onmouseout", d, i);
    }
  },
  donut: {
    title: "完成比例：91%"
  }
});
setTimeout(function () {
  chart2.load({
    columns: [["已完成", 91], ["剩餘關卡", 9]]
  });
}, 1500);
var chart3 = c3.generate({
  bindto: "#chart3",
  data: {
    x: 'x',
    columns: [['x', '2022-09-01', '2022-09-02', '2022-09-03', '2022-09-04', '2022-09-05', '2022-09-06', '2022-09-07'], ['已完成', 3, 5, 6, 7, 9, 11], ['剩餘關卡', 30, 27, 24, 22, 19, 19]]
  },
  axis: {
    x: {
      type: 'timeseries',
      tick: {
        format: '%Y-%m-%d'
      }
    }
  }
});
setTimeout(function () {
  chart3.load({
    columns: [["獲得積分數", 12, 13, 15, 17, 19, 21]]
  });
}, 1500);
"use strict";

console.log('data start');
var lessons = [{
  title: "lesson 1",
  description: 'draw a rectangle',
  code2Learn: "\nvar canvas = document.getElementById('pane');\n        \nvar ctx = canvas.getContext('2d');\n        \nctx.clearRect(0,0,canvas.width,canvas.height);\n        \nctx.fillRect(10, 10, 50, 50);\n        ",
  instruction: "//  top left corner (10,10) width 50 \n        ",
  signature: {
    imageDiff: 0,
    totalPixels: 2500
  }
}, {
  title: "lesson 2",
  description: 'draw a circle',
  code2Learn: "\nvar canvas = document.getElementById('pane');\n        \n var ctx = canvas.getContext('2d');\n        \n ctx.clearRect(0,0,canvas.width,canvas.height);\n        \n ctx.beginPath();\n        \n ctx.arc(100, 75, 50, 0, 2 * Math.PI);\n        \n ctx.strokeStyle=\"rgb(255,0,0)\";\n        \n ctx.lineWidth=4\n        \n ctx.stroke();\n        ",
  instruction: "//   CENTER AT (100,75) with radius 50\n        ",
  signature: {
    imageDiff: 823,
    totalPixels: 3164
  }
}, {
  title: "lesson 3",
  description: 'fill a circle',
  code2Learn: "\nvar canvas = document.getElementById('pane');\n        \n var ctx = canvas.getContext('2d');\n        \n ctx.clearRect(0,0,canvas.width,canvas.height);\n        \n ctx.beginPath();\n        \n ctx.arc(250, 200, 50, 0, 2 * Math.PI)\n        \n ctx.fillStyle='green'\n        \n ctx.fill();\n        ",
  instruction: "// circle  at  (250,200) with radius 50\n                        ",
  signature: {
    imageDiff: 519,
    totalPixels: 16000
  }
}, {
  title: "lesson 4",
  description: 'draw a line',
  code2Learn: "\nvar canvas = document.getElementById('pane');\n        \n var ctx = canvas.getContext('2d');\n        \n ctx.clearRect(0,0,canvas.width,canvas.height);\n        \n ctx.beginPath();\n        \n ctx.moveTo(100,100);\n        \n ctx.lineTo(300,300);\n        \n ctx.lineWidth=10;\n        \n ctx.stroke();\n        ",
  instruction: "// draw a line : move to (100,100) and line to (300,300)\n                        // using ctx as graphics context ",
  signature: {
    imageDiff: 410,
    totalPixels: 3008
  }
}];
console.log(lessons);
console.log('data end');
"use strict";

var load = document.querySelector('.loader');

function loader() {
  setTimeout(function () {
    load.style.display = 'none';
  }, 3000);
}

loader();
"use strict";

console.log('mirror start');
var lessons = [{
  title: "lesson 1",
  description: 'draw a rectangle',
  code2Learn: "\nvar canvas = document.getElementById('fractal');\n      \nvar ctx = canvas.getContext('2d');\n      \nctx.clearRect(0,0,canvas.width,canvas.height);\n      \nctx.fillRect(10, 10, 50, 50);\n      ",
  instruction: "//  top left corner (10,10) width 50 \n      ",
  signature: {
    imageDiff: 0,
    totalPixels: 4708
  }
}, {
  title: "lesson 2",
  description: 'draw a circle',
  code2Learn: "\nvar canvas = document.getElementById('fractal');\n      \n var ctx = canvas.getContext('2d');\n      \n ctx.clearRect(0,0,canvas.width,canvas.height);\n      \n ctx.beginPath();\n      \n ctx.arc(100, 75, 50, 0, 2 * Math.PI);\n      \n ctx.strokeStyle=\"rgb(255,0,0)\";\n      \n ctx.lineWidth=4\n      \n ctx.stroke();\n      ",
  instruction: "//   CENTER AT (100,75) with radius 50\n      ",
  signature: {
    imageDiff: 823,
    totalPixels: 3164
  }
}, {
  title: "lesson 3",
  description: 'fill a circle',
  code2Learn: "\nvar canvas = document.getElementById('fractal');\n      \n var ctx = canvas.getContext('2d');\n      \n ctx.clearRect(0,0,canvas.width,canvas.height);\n      \n ctx.beginPath();\n      \n ctx.arc(250, 200, 50, 0, 2 * Math.PI)\n      \n ctx.fillStyle='green'\n      \n ctx.fill();\n      ",
  instruction: "// circle  at  (250,200) with radius 50\n                      ",
  signature: {
    imageDiff: 519,
    totalPixels: 16000
  }
}, {
  title: "lesson 4",
  description: 'draw a line',
  code2Learn: "\nvar canvas = document.getElementById('fractal');\n      \n var ctx = canvas.getContext('2d');\n      \n ctx.clearRect(0,0,canvas.width,canvas.height);\n      \n ctx.beginPath();\n      \n ctx.moveTo(100,100);\n      \n ctx.lineTo(300,300);\n      \n ctx.lineWidth=10;\n      \n ctx.stroke();\n      ",
  instruction: "// draw a line : move to (100,100) and line to (300,300)\n                      // using ctx as graphics context ",
  signature: {
    imageDiff: 410,
    totalPixels: 3008
  }
}]; //編輯器樣式

var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
  mode: 'javascript',
  theme: 'dracula',
  lineNumbers: 'true' //   // lineWrapping: true,
  //   // styleActiveLine: true,
  //   // matchBrackets: true,
  //   // autoCloseBrackets: true,
  //   // autoCloseTags: true,
  //   // theme:'dracula',
  //   // mode: "htmlmixed",

}); //執行按鈕

var run = document.querySelector("#run");
var code = editor.getValue(); // editor.setValue(`var canvas = document.getElementById('fractal');
// canvas.setAttribute('width',innerWidth);
// canvas.setAttribute('height',innerHeight);
// var ctx =  canvas.getContext('2d');
// drawCircle( 160, 150, 135);
// ctx.strokeRect( 0, 0, 320, 300);
// function drawCircle( x, y, r){
//   ctx.beginPath();
//   ctx.arc( x, y, r, 0, 2*Math.PI);
//   ctx.stroke();
// }` );

var canvasPrepare = "var canvas = document.getElementById('fractal');\n\n canvas.setAttribute('width',innerWidth);\n\n canvas.setAttribute('height',innerHeight);\n\n var ctx =  canvas.getContext('2d');"; //執行按鈕點擊觸發

run.addEventListener("click", function () {
  resizeCanvas();
  var htmlCode = "<canvas id='fractal'></canvas>";
  var jsCode = "<scri" + "pt>" + canvasPrepare + editor.getValue() + "</scri" + "pt>";
  var doc = document.querySelector("#iview").contentWindow.document;
  doc.open();
  doc.write(htmlCode + jsCode); // previewWindow.close();
}); //改變canvas大小,撐滿空間

function resizeCanvas() {
  var width = document.querySelector('.view').clientWidth;
  var height = document.querySelector('.view').clientHeight;
  document.querySelector("#iview").setAttribute('height', "".concat(height));
  document.querySelector("#iview").setAttribute('width', "".concat(width));
}

var images; // images for comparison

var doc; // user source code 

var width; // width of editor

var height; // height of editor

var canvasCode; // declaring canvas

var current_lesson = 0;
var instruction;
var code2Learn; // the code lesson

var destinationCode; // used to compare user source code

var sourceCode; // user source code
// var code; 

var preview; // flag for preview

var verification = "\n \n    image2 = ctx.getImageData(0,0,canvas.width,canvas.height)\n    totalPixels = 0;\n    imageDiff = 0\n    for (let i=0; i<image1.data.length;i++){\n        if(image1.data[i]!=0) totalPixels++; \n        if(image1.data[i]!=image2.data[i]) imageDiff ++;\n    }\n    console.log(\"totalPixels\", totalPixels);\n    console.log(\"imageDiff\", imageDiff);\n    localStorage.setItem(\"totalPixels\", totalPixels);                                         \n    localStorage.setItem(\"imageDiff\", imageDiff)\n";
var clearScreen = "ctx.clearRect(0,0,canvas.width,canvas.height);";
var showSample = "ctx.clearRect(0,0,canvas.width,canvas.height);\n  ctx.putImageData(image1,0,0);";
init();

function init() {
  images = "\n    \n var image1 = ctx.getImageData(0, 0, canvas.width,canvas.height);\n    \n var image2;  \n    \n var image3 = ctx.createImageData(canvas.width,canvas.height);\n    var totalPixels = 0;\n    var imageDiff = 0\n    ";
  doc = document.getElementById('iview').contentWindow.document;
  width = document.getElementById('iview').clientWidth;
  height = document.getElementById('iview').clientHeight;
  canvasCode = "<canvas id=\"fractal\"></canvas> \n";
  getSignatures();
  /* start to learn */

  current_lesson = 0;
  code2Learn = lessons[current_lesson].code2Learn;
  instruction = lessons[current_lesson].instruction;
  destinationCode = canvasCode + "<scri" + "pt>" + code2Learn + images + "\n</scri" + "pt>";
  editor.setValue(instruction); // write original code  (code to learn )to produce image 1

  doc.open();
  doc.write(destinationCode); // open until user done editing
  // preview=true;   // flag to quick response user coding
  // correct = 0;    // the number of correct coding
}

function getSignatures() {
  for (var i = 0; i < lessons.length; i++) {
    code2Learn = lessons[i].code2Learn;
    destinationCode = canvasCode + "<scri" + "pt>" + code2Learn + images + clearScreen + code2Learn + verification + "\n</scri" + "pt>";
    doc.open();
    doc.write(destinationCode);
    doc.close();
    lessons[i].signature.imageDiff = parseInt(localStorage.getItem("imageDiff"));
    lessons[i].signature.totalPixels = parseInt(localStorage.getItem("totalPixels"));
    console.log(destinationCode);
  }
}

function check() {
  doc.write("<scri" + "pt>" + clearScreen + editor.getValue() + verification + "\n</scri" + "pt>");
  var imageDiff = parseInt(localStorage.getItem('imageDiff'));
  var totalPixels = parseInt(localStorage.getItem('totalPixels'));
  var distanceSquare = (imageDiff - lessons[current_lesson].signature.imageDiff) * (imageDiff - lessons[current_lesson].signature.imageDiff) + (totalPixels - lessons[current_lesson].signature.totalPixels) * (totalPixels - lessons[current_lesson].signature.totalPixels);
  alert("imageDiff:".concat(lessons[current_lesson].signature.imageDiff));
  alert("totalPixels:".concat(lessons[current_lesson].signature.totalPixels));

  if (distanceSquare < 20) {
    alert('great success !!!'); //  correct++;
    //  document.getElementById('progress').style.width=`${correct/lessons.length*100}%`;
    //  document.getElementById('progress').innerHTML=` <h6>${correct}/${lessons.length}</h6>`
  } else {
    alert('try again !!!');
  }
}

var delay;
editor.on("change", function () {
  clearTimeout(delay);
  if (preview) delay = setTimeout(updatePreview, 300);
});

function updatePreview() {
  code = editor.getValue().replace(/^\s*/, "");
  sourceCode = "<scri" + "pt>" + showSample + code + "\n</scri" + "pt>";
  doc.write(sourceCode);
} //          delay = setTimeout(updatePreview, 1000);


function reset() {
  current_lesson = 0;
  code2Learn = lessons[current_lesson].code2Learn;
  destinationCode = canvasCode + "<scri" + "pt>" + code2Learn + images + "\n</scri" + "pt>";
  instruction = lessons[current_lesson].instruction;
  editor.setValue(instruction);
  doc.close(); // close last action

  doc.open();
  doc.write(destinationCode);
}

function next() {
  getSignatures();
  current_lesson = (current_lesson + 1) % lessons.length;
  code2Learn = lessons[current_lesson].code2Learn;
  destinationCode = canvasCode + "<scri" + "pt>" + code2Learn + images + "\n</scri" + "pt>";
  instruction = lessons[current_lesson].instruction;
  editor.setValue(instruction);
  doc.close(); // close last action

  doc.open();
  doc.write(destinationCode);
}

function prev() {
  current_lesson = (current_lesson - 1 + lessons.length) % lessons.length;
  code2Learn = lessons[current_lesson].code2Learn;
  destinationCode = canvasCode + "<scri" + "pt>" + code2Learn + images + "\n</scri" + "pt>";
  instruction = lessons[current_lesson].instruction;
  editor.setValue(instruction);
  doc.close(); // close last action

  doc.open();
  doc.write(destinationCode);
}

console.log('mirror end');
"use strict";

console.log('swiper start');
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
console.log('swiper end');
//# sourceMappingURL=all.js.map
