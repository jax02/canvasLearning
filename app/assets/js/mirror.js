console.log("mirror start");

if (location.pathname == "/courseDetail.html") {
  current_lesson = 0;
} else if (location.pathname == "/courseDetail-mid.html") {
  current_lesson = 6;
} else {
  current_lesson = 9;
}
const lessons = [
  {
    title: "lesson 1",
    description: "線段",
    code2Learn: `\nvar canvas = document.getElementById('fractal');
      \nvar ctx = canvas.getContext('2d');
      \nctx.fillStyle = '#333';
      \nctx.fillRect(0, 0, canvas.width, canvas.height);
      // \nctx.clearRect(0,0,canvas.width,canvas.height);
      //\nctx.moveTo(10,10);
      //\nctx.lineTo(150,50);
      //\nctx.stroke();
      `,
    instruction: `// 畫線段，從原點到(50,50)
      `,
    signature: { imageDiff: 100, totalPixels: 4708 },
  },
  {
    title: "lesson 2",
    description: "矩形",
    code2Learn: `\nvar canvas = document.getElementById('fractal');
      \nvar ctx = canvas.getContext('2d');
      \nctx.clearRect(0,0,canvas.width,canvas.height);
      \nctx.fillRect(10, 10, 50, 50);
      `,
    instruction: `//  畫矩形，原點 (10,10) 長、寬 50 
      `,
    signature: { imageDiff: 0, totalPixels: 4708 },
  },
  {
    title: "lesson 3",
    description: "三角形",
    code2Learn: `\nvar canvas = document.getElementById('fractal');
      \nvar ctx = canvas.getContext('2d');
      \nctx.clearRect(0,0,canvas.width,canvas.height);
      \nctx.beginPath();
      \nctx.moveTo(100,50);
      \nctx.lineTo(60,90);
      \nctx.lineTo(140,90);
      \nctx.closePath();
      \nctx.stroke();
      `,
    instruction: `//  畫三角形，三點分別為(100,50)、(60,90)、(140,90)
      `,
    signature: { imageDiff: 0, totalPixels: 4708 },
  },
  {
    title: "lesson 4",
    description: "圓形",
    code2Learn: `\nvar canvas = document.getElementById('fractal');
      \n var ctx = canvas.getContext('2d');
      \n ctx.clearRect(0,0,canvas.width,canvas.height);
      \n ctx.beginPath();
      \n ctx.arc(100, 75, 50, 0, 2 * Math.PI);
      \n ctx.stroke();
      `,
    instruction: `//   劃一個無填滿圓，中心點(100,75)半徑50
      `,
    signature: { imageDiff: 823, totalPixels: 3164 },
  },
  {
    title: "lesson 5",
    description: "弧形",
    code2Learn: `\nvar canvas = document.getElementById('fractal');
      \n var ctx = canvas.getContext('2d');
      \n ctx.clearRect(0,0,canvas.width,canvas.height);
      \n ctx.beginPath();
      \n ctx.arc(100, 60, 50, Math.PI/2*3, Math.PI/2);
      \n ctx.stroke();
      `,
    instruction: `//   畫起始角270度、結束角90度弧型，中心點(100,60)半徑50
      `,
    signature: { imageDiff: 823, totalPixels: 3164 },
  },
  {
    title: "lesson 6",
    description: "用函數畫圖",
    code2Learn: `\nvar canvas = document.getElementById('fractal');
      \n var ctx = canvas.getContext('2d');
      \n ctx.clearRect(0,0,canvas.width,canvas.height);
      \n function drawCircle(x,y,r){
      \n ctx.beginPath();
      \n ctx.arc(x,y,r,0,2*Math.PI);
      \n ctx.stroke();
      \n}
      \n drawCircle(100,100,50);
      `,
    instruction: `//   新增畫圓函數並執行，中心點(100,100)半徑50
      `,
    signature: { imageDiff: 823, totalPixels: 3164 },
  },
  {
    title: "lesson 7",
    description: "使用函數重複執行",
    code2Learn: `\nvar canvas = document.getElementById('fractal');
      \n var ctx = canvas.getContext('2d');
      \n ctx.clearRect(0,0,canvas.width,canvas.height);
      \n function drawCircle(x,y,r){
      \n ctx.beginPath();
      \n ctx.arc(x,y,r,0,2*Math.PI);
      \n ctx.stroke();
      \n}
      \n drawCircle(100,100,50);
      \n drawCircle(50,100,50);
      \n drawCircle(150,100,50);
      `,
    instruction: `//   新增畫圓函數並執行
//中心點分別為(100,100)、(50,100)、(150,100)半徑50
      `,
    signature: { imageDiff: 823, totalPixels: 3164 },
  },
  {
    title: "lesson 8",
    description: "多次執行",
    code2Learn: `\nvar canvas = document.getElementById('fractal');
      \n var ctx = canvas.getContext('2d');
      \n ctx.clearRect(0,0,canvas.width,canvas.height);
      \n function drawCircle(x,y,r){
      \n ctx.beginPath();
      \n ctx.arc(x,y,r,0,2*Math.PI);
      \n ctx.stroke();
      if (r > 2) { // condition for drawing similarity
        drawCircle(x + r, y, r / 2);
        drawCircle(x - r, y, r / 2);
        }
      \n}
      \n drawCircle(100,100,50);
      `,
    instruction: `//加入條件式讓函數執行多次，對稱圖方式如下:
    // if (r > 2) { 
//drawCircle(x + r, y, r / 2);
//drawCircle(x - r, y, r / 2);
//}`,
    signature: { imageDiff: 823, totalPixels: 3164 },
  },
  {
    title: "lesson 9",
    description: "遞迴樹",
    code2Learn: `\nvar canvas = document.getElementById('fractal');
      \n var ctx = canvas.getContext('2d');
      \n canvas.width = window.innerWidth; // 畫布寬 = 視窗內的寬
      \n canvas.height = window.innerHeight; // 畫布高 = 視窗內的高
      \n ctx.fillStyle = '#fff5a5';
      \n ctx.fillRect(0, 0, canvas.width, canvas.height);
      \n ctx.clearRect(0,0,canvas.width,canvas.height);
      \n function draw(startX, startY, len, angle) {
      \n  ctx.beginPath();
      \n  ctx.save();
        
        //中間樹幹
      \n  ctx.translate(startX, startY);
      \n  ctx.rotate(angle * Math.PI/180);
      \n  ctx.moveTo(0, 0);
      \n  ctx.lineTo(0, -len);
      \n  ctx.stroke();

      \n  if(len < 10) {
        \n      ctx.restore();
        \n   return;
        \n  }
        \n  draw(0, -len, len*0.8, -15);//左邊分之
        \ndraw(0, -len, len*0.8, +15);//右邊分支
        \nctx.restore();//恢復預設值，分支才會從中間樹幹頂點開始生長
        \n}
        \ndraw(300, 250, 50, 0)   
      `,
    instruction: `//繪製遞迴樹初始點(300,250)、初始樹枝長度50
//角度0度開始生長，遞迴條件限制於長度小於10停止
`,
    signature: { imageDiff: 823, totalPixels: 3164 },
  },
];

//編輯器樣式
let editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "javascript",
  theme: "dracula",
  lineNumbers: "true",
  //   // lineWrapping: true,
  //   // styleActiveLine: true,
  //   // matchBrackets: true,
  //   // autoCloseBrackets: true,
  //   // autoCloseTags: true,
  //   // theme:'dracula',
  //   // mode: "htmlmixed",
});

//執行按鈕
const run = document.querySelector("#run");
let code = editor.getValue();

let canvasPrepare = `var canvas = document.getElementById('fractal');
\n canvas.setAttribute('width',innerWidth);
\n canvas.setAttribute('height',innerHeight);
\n var ctx =  canvas.getContext('2d');`;

//執行按鈕點擊觸發
run.addEventListener("onload", () => {
  // resizeCanvas();
  let htmlCode = `<canvas id='fractal'></canvas>`;
  let jsCode =
    "<scri" + "pt>" + canvasPrepare + editor.getValue() + "</scri" + "pt>";
  let doc = document.querySelector("#iview").contentWindow.document;
  doc.open();
  doc.write(htmlCode + jsCode);
  previewWindow.close();
});

//改變canvas大小,撐滿空間
function resizeCanvas() {
  var width = document.querySelector(".view").clientWidth;
  var height = document.querySelector(".view").clientHeight;
  document.querySelector("#iview").setAttribute("height", `${height}`);
  document.querySelector("#iview").setAttribute("width", `${width}`);
  // document.querySelector("#iview").setAttribute("overflow", "hidden");
}

var images; // images for comparison
var doc; // user source code
let width; // width of editor
let height; // height of editor
var canvasCode; // declaring canvas
var current_lesson;
var instruction;
var code2Learn; // the code lesson
var destinationCode; // used to compare user source code
var sourceCode; // user source code
// var code;
var preview; // flag for preview
const verification = `\n 
    image2 = ctx.getImageData(0,0,canvas.width,canvas.height);
    totalPixels = 0;
    imageDiff = 0;
    for (let i=0; i<image1.data.length;i++){
        if(image1.data[i]!=0) totalPixels++; 
        if(image1.data[i]!=image2.data[i]) imageDiff ++;
    }
    console.log("totalPixels", totalPixels);
    console.log("imageDiff", imageDiff);
    localStorage.setItem("totalPixels", totalPixels);                                         
    localStorage.setItem("imageDiff", imageDiff);
`;
const clearScreen = `ctx.clearRect(0,0,canvas.width,canvas.height);`;
const showSample = `ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.putImageData(image1,0,0);`;

init();
function init() {
  images = `
    \n var image1 = ctx.getImageData(0, 0, canvas.width,canvas.height);
    \n var image2;  
    \n var image3 = ctx.createImageData(canvas.width,canvas.height);
    \n var totalPixels = 0;
    \n var imageDiff = 0
    `;

  doc = document.getElementById("iview").contentWindow.document;
  width = document.getElementById("iview").clientWidth;
  height = document.getElementById("iview").clientHeight;
  canvasCode = `<canvas id="fractal"></canvas> \n`;

  getSignatures();

  /* start to learn */
  current_lesson;
  code2Learn = lessons[current_lesson].code2Learn;
  instruction = lessons[current_lesson].instruction;
  destinationCode =
    canvasCode + "<scri" + "pt>" + code2Learn + images + "\n</scri" + "pt>";
  editor.setValue(instruction);

  // write original code  (code to learn )to produce image 1
  doc.open();
  doc.write(destinationCode); // open until user done editing

  // preview=true;   // flag to quick response user coding
  // correct = 0;    // the number of correct coding
}
function getSignatures() {
  for (let i = 0; i < lessons.length; i++) {
    code2Learn = lessons[i].code2Learn;
    destinationCode =
      canvasCode +
      "<scri" +
      "pt>" +
      code2Learn +
      images +
      clearScreen +
      code2Learn +
      verification +
      "\n</scri" +
      "pt>";
    doc.open();
    doc.write(destinationCode);
    doc.close();
    lessons[i].signature.imageDiff = parseInt(
      localStorage.getItem("imageDiff")
    );
    lessons[i].signature.totalPixels = parseInt(
      localStorage.getItem("totalPixels")
    );
    console.log(destinationCode);
  }
}
function check() {
  doc.write(
    "<scri" +
      "pt>" +
      clearScreen +
      editor.getValue() +
      verification +
      "\n</scri" +
      "pt>"
  );
  let imageDiff = parseInt(localStorage.getItem("imageDiff"));
  let totalPixels = parseInt(localStorage.getItem("totalPixels"));
  let distanceSquare =
    (imageDiff - lessons[current_lesson].signature.imageDiff) *
      (imageDiff - lessons[current_lesson].signature.imageDiff) +
    (totalPixels - lessons[current_lesson].signature.totalPixels) *
      (totalPixels - lessons[current_lesson].signature.totalPixels);
  //alert(`imageDiff:${lessons[current_lesson].signature.imageDiff}`);
  //alert(`totalPixels:${lessons[current_lesson].signature.totalPixels}`);
  if (distanceSquare < 20) {
    alert("great success !!!");
    correct++;
    document.getElementById("progress").style.width = `${
      (correct / lessons.length) * 100
    }%`;
    document.getElementById(
      "progress"
    ).innerHTML = ` <h6>${correct}/${lessons.length}</h6>`;
  } else {
    alert("try again !!!");
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
}
//          delay = setTimeout(updatePreview, 1000);

function reset() {
  if (location.pathname == "/courseDetail.html") {
    current_lesson = 0;
  } else if (location.pathname == "/courseDetail-mid.html") {
    current_lesson = 6;
  } else {
    current_lesson = 9;
  }
  code2Learn = lessons[current_lesson].code2Learn;

  destinationCode =
    canvasCode + "<scri" + "pt>" + code2Learn + images + "\n</scri" + "pt>";
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
  destinationCode =
    canvasCode + "<scri" + "pt>" + code2Learn + images + "\n</scri" + "pt>";
  instruction = lessons[current_lesson].instruction;
  editor.setValue(instruction);
  doc.close(); // close last action
  doc.open();
  doc.write(destinationCode);
}

function prev() {
  current_lesson = (current_lesson - 1 + lessons.length) % lessons.length;
  code2Learn = lessons[current_lesson].code2Learn;
  destinationCode =
    canvasCode + "<scri" + "pt>" + code2Learn + images + "\n</scri" + "pt>";
  instruction = lessons[current_lesson].instruction;
  editor.setValue(instruction);
  doc.close(); // close last action
  doc.open();
  doc.write(destinationCode);
}

console.log("mirror end");
