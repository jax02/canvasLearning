let users = [];
let finishedData;
let unFinishedData;
let rate;
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
    instruction: `// 畫線段，從(10,10)到(150,50)
      `,
    signature: { imageDiff: 100, totalPixels: 4708 },
    rate:2,
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
    rate:3,
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
    rate:4,
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
    rate:3,
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
    rate:3,
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
    rate:4,
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
    rate:4,
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
    rate:5,
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
    rate:5,
  },
];
if(location.pathname == "/index.html"){
  //loader
  const load = document.querySelector('.loader');
  function loader (){
    setTimeout(() => { 
      load.style.display = 'none';}
      , 3000);
  }
loader ();
  let nickName = document.querySelector("#nickName");
  let  addUser = document.querySelector("#addUser");
  function getName(value) {
    let str = "";
    let userName = nickName.value;
    str = userName;
    let user={
      name:str,
      rate:0,
      finished:[false,false,false,false,false,false,false,false,false],
      percentage:0,
    };
    console.log(str);
    users.push(user);
    localStorage.setItem("userInfo",JSON.stringify(users));
    let userInfo = JSON.parse(localStorage.getItem("userInfo"))
    console.log(userInfo);
    swal("Good job!", `成功建立使用者 ： ${str}`, "success", {
      button: "確認",
    });
    localStorage.removeItem('correct');
    let userfinishedData = userInfo[0].finished.filter(function(value) {
      return value == true;
    });;
    if(userfinishedData.length==0){
      finishedData = userfinishedData.length +1;
    }else{
      finishedData = userfinishedData.length
    }
    unFinishedData = 9-finishedData;
  }
addUser.addEventListener("click", getName);

}



//swiper
if(location.pathname == "/course.html"){
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
}


if(location.pathname == "/record.html"){
let userInfo = JSON.parse(localStorage.getItem("userInfo"));
let userfinishedData = userInfo[0].finished.filter(function(value) {
  return value == true;
});;
if(userfinishedData.length==0){
  finishedData = userfinishedData.length +1;
}else{
  finishedData = userfinishedData.length
}
unFinishedData = 9-finishedData;
let percentage = ((finishedData/9)*100).toFixed(2);
document.querySelector("#percentage").innerHTML=`<span class="text-primary" >${percentage}%</span>`;
document.querySelector("#userName").innerHTML=` <div class="fs-3 mb-2 text-center" >${userInfo[0].name}</div>`;
document.querySelector("#rate").innerHTML=` <span class="text-primary" >${userInfo[0].rate}</span>`;
userInfo[0].finished.forEach((e,index)=>{
  if(e==true){
    let str=`${index+1}`
    document.querySelector(`#item${str}`).setAttribute("class","list-group-item ");
  }
  else{
    ;
  }
})

  var chart = c3.generate({
    bindto: "#chart",
    data: {
        columns: [
            ['已完成', `${finishedData}`],
            ['未完成', `${unFinishedData}`],
        ],
        colors: {
          已完成: '#DD4C57',
          未完成: '#EB9C37',
        },
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: `積分數：${userInfo[0].rate}/33`
    }
  });
  setTimeout(function () {
    chart.load({
        columns: [
            ["已完成", `${finishedData}`],
            ["未完成", `${unFinishedData}`],
        ]
    });
  }, 2500);
  
  var chart2 = c3.generate({
    bindto: "#chart2",
    data: {
        columns: [
            ['已完成', `${finishedData}`],
            ['剩餘關卡', `${unFinishedData}`],
        ],
        colors: {
          已完成: "#03A9F4",
          剩餘關卡: "#76FF03",
        },
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: `完成比例 : ${percentage}%`
    }
  });
  
  setTimeout(function () {
    chart2.load({
        columns: [
            ["已完成", `${finishedData}`],
            ["剩餘關卡", `${unFinishedData}`],
        ]
    });
  }, 3500);
  
  // var chart3 = c3.generate({
  //   bindto: "#chart3",
  //   data: {
  //     x: 'x',
  //     columns: [
  //         ['x', '2022-09-01', '2022-09-02', '2022-09-03', '2022-09-04', '2022-09-05', '2022-09-06', '2022-09-07'],
  //         ['已完成', 3, 5, 6, 7, 9, 11 ],
  //         ['剩餘關卡', 30, 27, 24, 22, 19, 19]
  //     ]
  // },
  // axis: {
  //     x: {
  //         type: 'timeseries',
  //         tick: {
  //             format: '%Y-%m-%d'
  //         }
  //     }
  // }
  // });
  // setTimeout(function () {
  //   chart3.load({
  //       columns: [
  //           ["獲得積分數", 12,13,15,17,19,21],
  //       ]
  //   });
  // }, 1500);
}


console.log('all end');