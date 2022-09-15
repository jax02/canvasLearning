console.log('mirror start');
const lessons=[
  {
      title:"lesson 1",
      description: 'draw a rectangle',
      code2Learn:`\nvar canvas = document.getElementById('fractal');
      \nvar ctx = canvas.getContext('2d');
      \nctx.clearRect(0,0,canvas.width,canvas.height);
      \nctx.fillRect(10, 10, 50, 50);
      `,
      instruction:`//  top left corner (10,10) width 50 
      `,
      signature:{imageDiff: 0, totalPixels:4708},

      
  },
  {
      title:"lesson 2",
      description: 'draw a circle',
      code2Learn:`\nvar canvas = document.getElementById('fractal');
      \n var ctx = canvas.getContext('2d');
      \n ctx.clearRect(0,0,canvas.width,canvas.height);
      \n ctx.beginPath();
      \n ctx.arc(100, 75, 50, 0, 2 * Math.PI);
      \n ctx.strokeStyle="rgb(255,0,0)";
      \n ctx.lineWidth=4
      \n ctx.stroke();
      `,
      instruction:`//   CENTER AT (100,75) with radius 50
      `,
      signature:{imageDiff: 823, totalPixels:3164},
  
  },
  
  {
      title:"lesson 3",
      description: 'fill a circle',
      code2Learn:`\nvar canvas = document.getElementById('fractal');
      \n var ctx = canvas.getContext('2d');
      \n ctx.clearRect(0,0,canvas.width,canvas.height);
      \n ctx.beginPath();
      \n ctx.arc(250, 200, 50, 0, 2 * Math.PI)
      \n ctx.fillStyle='green'
      \n ctx.fill();
      `,
      instruction:`// circle  at  (250,200) with radius 50
                      `,
      signature:{imageDiff: 519, totalPixels:16000},
      
  },{
      title:"lesson 4",
      description: 'draw a line',
      code2Learn:`\nvar canvas = document.getElementById('fractal');
      \n var ctx = canvas.getContext('2d');
      \n ctx.clearRect(0,0,canvas.width,canvas.height);
      \n ctx.beginPath();
      \n ctx.moveTo(100,100);
      \n ctx.lineTo(300,300);
      \n ctx.lineWidth=10;
      \n ctx.stroke();
      `,
      instruction:`// draw a line : move to (100,100) and line to (300,300)
                      // using ctx as graphics context `,
      signature:{imageDiff: 410, totalPixels:3008},
      
  }
];


//編輯器樣式
let editor = CodeMirror.fromTextArea(document.getElementById('editor'),{
  mode:'javascript',
  theme: 'dracula',
  lineNumbers: 'true'
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

// editor.setValue(`var canvas = document.getElementById('fractal');
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
let canvasPrepare = `var canvas = document.getElementById('fractal');
\n canvas.setAttribute('width',innerWidth);
\n canvas.setAttribute('height',innerHeight);
\n var ctx =  canvas.getContext('2d');`
  

//執行按鈕點擊觸發
run.addEventListener("click",() => {
  resizeCanvas();
  let htmlCode = `<canvas id='fractal'></canvas>`;
  let jsCode = "<scri" + "pt>" + canvasPrepare +editor.getValue() + "</scri" + "pt>";
    let doc = document.querySelector("#iview").contentWindow.document;
    doc.open();
    doc.write(htmlCode + jsCode);
    // previewWindow.close();
})


//改變canvas大小,撐滿空間
function resizeCanvas(){
  var width = document.querySelector('.view').clientWidth;
  var height = document.querySelector('.view').clientHeight;
  document.querySelector("#iview").setAttribute('height',`${height}`);
  document.querySelector("#iview").setAttribute('width',`${width}`);
}

var images;  // images for comparison
var doc;  // user source code 
let width; // width of editor
let height; // height of editor
var canvasCode; // declaring canvas
var current_lesson=0;
var instruction;
var code2Learn;  // the code lesson
var destinationCode;  // used to compare user source code
var sourceCode;    // user source code
// var code; 
var preview;  // flag for preview
const verification =`\n 
    image2 = ctx.getImageData(0,0,canvas.width,canvas.height)
    totalPixels = 0;
    imageDiff = 0
    for (let i=0; i<image1.data.length;i++){
        if(image1.data[i]!=0) totalPixels++; 
        if(image1.data[i]!=image2.data[i]) imageDiff ++;
    }
    console.log("totalPixels", totalPixels);
    console.log("imageDiff", imageDiff);
    localStorage.setItem("totalPixels", totalPixels);                                         
    localStorage.setItem("imageDiff", imageDiff)
`;
const clearScreen = `ctx.clearRect(0,0,canvas.width,canvas.height);`
const showSample = `ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.putImageData(image1,0,0);`

init();
  function init(){
    images =`
    \n var image1 = ctx.getImageData(0, 0, canvas.width,canvas.height);
    \n var image2;  
    \n var image3 = ctx.createImageData(canvas.width,canvas.height);
    var totalPixels = 0;
    var imageDiff = 0
    `;

    doc = document.getElementById('iview').contentWindow.document;
    width= document.getElementById('iview').clientWidth;
    height=document.getElementById('iview').clientHeight
    canvasCode = `<canvas id="fractal"></canvas> \n`
 
    getSignatures();


    /* start to learn */
    current_lesson=0;
    code2Learn = lessons[current_lesson].code2Learn;
    instruction =lessons[current_lesson].instruction;
    destinationCode = canvasCode +"<scri" + "pt>" +code2Learn + images+ "\n</scri" + "pt>";  
    editor.setValue(instruction)

    
 

    // write original code  (code to learn )to produce image 1
    doc.open();
    doc.write(destinationCode);   // open until user done editing


    // preview=true;   // flag to quick response user coding
    // correct = 0;    // the number of correct coding
}
function getSignatures(){
           
  for (let i=0; i<lessons.length;i++){
      code2Learn = lessons[i].code2Learn;
      destinationCode = canvasCode +"<scri" + "pt>" +code2Learn + images+ clearScreen + code2Learn+ verification+"\n</scri" + "pt>";   
      doc.open();
      doc.write(destinationCode);  
      doc.close()
      lessons[i].signature.imageDiff= parseInt(localStorage.getItem("imageDiff"));
      lessons[i].signature.totalPixels= parseInt(localStorage.getItem("totalPixels"))  
      console.log(destinationCode);
  }   
}
function check(){
  doc.write("<scri" + "pt>" + clearScreen + editor.getValue() + verification +"\n</scri" + "pt>");
  let imageDiff= parseInt(localStorage.getItem('imageDiff'));
  let totalPixels= parseInt(localStorage.getItem('totalPixels'));
  let distanceSquare = (imageDiff -  lessons[current_lesson].signature.imageDiff)*(imageDiff -  lessons[current_lesson].signature.imageDiff)+
                        (totalPixels - lessons[current_lesson].signature.totalPixels)*(totalPixels - lessons[current_lesson].signature.totalPixels)
  alert(`imageDiff:${lessons[current_lesson].signature.imageDiff}`);
  alert(`totalPixels:${lessons[current_lesson].signature.totalPixels}`)
  if( distanceSquare < 20) {
      alert('great success !!!');
      //  correct++;
      //  document.getElementById('progress').style.width=`${correct/lessons.length*100}%`;
      //  document.getElementById('progress').innerHTML=` <h6>${correct}/${lessons.length}</h6>`
  } else {
      alert('try again !!!');
  }
}

var delay;
editor.on("change", function () {
  clearTimeout(delay);
  if(preview)
     delay = setTimeout(updatePreview, 300);
});



function updatePreview() {
  code = editor.getValue().replace(/^\s*/, "")
  sourceCode = "<scri" + "pt>" + showSample+code + "\n</scri" + "pt>";
  doc.write( sourceCode );
}
//          delay = setTimeout(updatePreview, 1000);




 function reset(){
      current_lesson=0;
      code2Learn = lessons[current_lesson].code2Learn;
  
      destinationCode = canvasCode +"<scri" + "pt>" +code2Learn + images+ "\n</scri" + "pt>";  
      instruction=lessons[current_lesson].instruction;
      editor.setValue(instruction) 
      doc.close();   // close last action
      doc.open();
         doc.write(destinationCode);     
   }

 function next(){
  getSignatures();
     current_lesson = (current_lesson + 1) % lessons.length;
     code2Learn = lessons[ current_lesson].code2Learn; 
     destinationCode = canvasCode +"<scri" + "pt>" +code2Learn + images+ "\n</scri" + "pt>";  
     instruction=lessons[current_lesson].instruction;
     editor.setValue(instruction) 
     doc.close();   // close last action
     doc.open();
     doc.write(destinationCode);
 }

 function prev(){
    current_lesson = (current_lesson - 1+lessons.length) % lessons.length;
    code2Learn = lessons[ current_lesson].code2Learn;
    destinationCode = canvasCode +"<scri" + "pt>" +code2Learn + images+ "\n</scri" + "pt>";  
    instruction=lessons[current_lesson].instruction;
    editor.setValue(instruction) 
    doc.close();   // close last action
    doc.open();
    doc.write(destinationCode); 
 }

console.log('mirror end');