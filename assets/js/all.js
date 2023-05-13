"use strict";

var users = [];
var finishedData;
var unFinishedData;
var rate; // const lessons = [
//   {
//     title: "lesson 1",
//     description: "線段",
//     code2Learn: `\nvar canvas = document.getElementById('fractal');
//       \nvar ctx = canvas.getContext('2d');
//       \nctx.fillStyle = '#333';
//       \nctx.fillRect(0, 0, canvas.width, canvas.height);
//       // \nctx.clearRect(0,0,canvas.width,canvas.height);
//       //\nctx.moveTo(10,10);
//       //\nctx.lineTo(150,50);
//       //\nctx.stroke();
//       `,
//     instruction: `// 畫線段，從(10,10)到(150,50)
//       `,
//     signature: { imageDiff: 100, totalPixels: 4708 },
//     rate:2,
//   },
//   {
//     title: "lesson 2",
//     description: "矩形",
//     code2Learn: `\nvar canvas = document.getElementById('fractal');
//       \nvar ctx = canvas.getContext('2d');
//       \nctx.clearRect(0,0,canvas.width,canvas.height);
//       \nctx.fillRect(10, 10, 50, 50);
//       `,
//     instruction: `//  畫矩形，原點 (10,10) 長、寬 50 
//       `,
//     signature: { imageDiff: 0, totalPixels: 4708 },
//     rate:3,
//   },
//   {
//     title: "lesson 3",
//     description: "三角形",
//     code2Learn: `\nvar canvas = document.getElementById('fractal');
//       \nvar ctx = canvas.getContext('2d');
//       \nctx.clearRect(0,0,canvas.width,canvas.height);
//       \nctx.beginPath();
//       \nctx.moveTo(100,50);
//       \nctx.lineTo(60,90);
//       \nctx.lineTo(140,90);
//       \nctx.closePath();
//       \nctx.stroke();
//       `,
//     instruction: `//  畫三角形，三點分別為(100,50)、(60,90)、(140,90)
//       `,
//     signature: { imageDiff: 0, totalPixels: 4708 },
//     rate:4,
//   },
//   {
//     title: "lesson 4",
//     description: "圓形",
//     code2Learn: `\nvar canvas = document.getElementById('fractal');
//       \n var ctx = canvas.getContext('2d');
//       \n ctx.clearRect(0,0,canvas.width,canvas.height);
//       \n ctx.beginPath();
//       \n ctx.arc(100, 75, 50, 0, 2 * Math.PI);
//       \n ctx.stroke();
//       `,
//     instruction: `//   劃一個無填滿圓，中心點(100,75)半徑50
//       `,
//     signature: { imageDiff: 823, totalPixels: 3164 },
//     rate:3,
//   },
//   {
//     title: "lesson 5",
//     description: "弧形",
//     code2Learn: `\nvar canvas = document.getElementById('fractal');
//       \n var ctx = canvas.getContext('2d');
//       \n ctx.clearRect(0,0,canvas.width,canvas.height);
//       \n ctx.beginPath();
//       \n ctx.arc(100, 60, 50, Math.PI/2*3, Math.PI/2);
//       \n ctx.stroke();
//       `,
//     instruction: `//   畫起始角270度、結束角90度弧型，中心點(100,60)半徑50
//       `,
//     signature: { imageDiff: 823, totalPixels: 3164 },
//     rate:3,
//   },
//   {
//     title: "lesson 6",
//     description: "用函數畫圖",
//     code2Learn: `\nvar canvas = document.getElementById('fractal');
//       \n var ctx = canvas.getContext('2d');
//       \n ctx.clearRect(0,0,canvas.width,canvas.height);
//       \n function drawCircle(x,y,r){
//       \n ctx.beginPath();
//       \n ctx.arc(x,y,r,0,2*Math.PI);
//       \n ctx.stroke();
//       \n}
//       \n drawCircle(100,100,50);
//       `,
//     instruction: `//   新增畫圓函數並執行，中心點(100,100)半徑50
//       `,
//     signature: { imageDiff: 823, totalPixels: 3164 },
//     rate:4,
//   },
//   {
//     title: "lesson 7",
//     description: "使用函數重複執行",
//     code2Learn: `\nvar canvas = document.getElementById('fractal');
//       \n var ctx = canvas.getContext('2d');
//       \n ctx.clearRect(0,0,canvas.width,canvas.height);
//       \n function drawCircle(x,y,r){
//       \n ctx.beginPath();
//       \n ctx.arc(x,y,r,0,2*Math.PI);
//       \n ctx.stroke();
//       \n}
//       \n drawCircle(100,100,50);
//       \n drawCircle(50,100,50);
//       \n drawCircle(150,100,50);
//       `,
//     instruction: `//   新增畫圓函數並執行
// //中心點分別為(100,100)、(50,100)、(150,100)半徑50
//       `,
//     signature: { imageDiff: 823, totalPixels: 3164 },
//     rate:4,
//   },
//   {
//     title: "lesson 8",
//     description: "多次執行",
//     code2Learn: `\nvar canvas = document.getElementById('fractal');
//       \n var ctx = canvas.getContext('2d');
//       \n ctx.clearRect(0,0,canvas.width,canvas.height);
//       \n function drawCircle(x,y,r){
//       \n ctx.beginPath();
//       \n ctx.arc(x,y,r,0,2*Math.PI);
//       \n ctx.stroke();
//       if (r > 2) { // condition for drawing similarity
//         drawCircle(x + r, y, r / 2);
//         drawCircle(x - r, y, r / 2);
//         }
//       \n}
//       \n drawCircle(100,100,50);
//       `,
//     instruction: `//加入條件式讓函數執行多次，對稱圖方式如下:
//     // if (r > 2) { 
// //drawCircle(x + r, y, r / 2);
// //drawCircle(x - r, y, r / 2);
// //}`,
//     signature: { imageDiff: 823, totalPixels: 3164 },
//     rate:5,
//   },
//   {
//     title: "lesson 9",
//     description: "遞迴樹",
//     code2Learn: `\nvar canvas = document.getElementById('fractal');
//       \n var ctx = canvas.getContext('2d');
//       \n canvas.width = window.innerWidth; // 畫布寬 = 視窗內的寬
//       \n canvas.height = window.innerHeight; // 畫布高 = 視窗內的高
//       \n ctx.fillStyle = '#fff5a5';
//       \n ctx.fillRect(0, 0, canvas.width, canvas.height);
//       \n ctx.clearRect(0,0,canvas.width,canvas.height);
//       \n function draw(startX, startY, len, angle) {
//       \n  ctx.beginPath();
//       \n  ctx.save();
//         //中間樹幹
//       \n  ctx.translate(startX, startY);
//       \n  ctx.rotate(angle * Math.PI/180);
//       \n  ctx.moveTo(0, 0);
//       \n  ctx.lineTo(0, -len);
//       \n  ctx.stroke();
//       \n  if(len < 10) {
//         \n      ctx.restore();
//         \n   return;
//         \n  }
//         \n  draw(0, -len, len*0.8, -15);//左邊分之
//         \ndraw(0, -len, len*0.8, +15);//右邊分支
//         \nctx.restore();//恢復預設值，分支才會從中間樹幹頂點開始生長
//         \n}
//         \ndraw(300, 250, 50, 0)   
//       `,
//     instruction: `//繪製遞迴樹初始點(300,250)、初始樹枝長度50
// //角度0度開始生長，遞迴條件限制於長度小於10停止
// `,
//     signature: { imageDiff: 823, totalPixels: 3164 },
//     rate:5,
//   },
// ];

if (localStorage.getItem("players", JSON.stringify(players))) {
  ;
} else {
  var _players = {
    "王小明": {
      "rate": 14
    }
  };
  localStorage.setItem("players", JSON.stringify(_players));
} //leaderboard
//localhost的pathname=/course.html
//github Pages的pathname=/canvasLearning/course.html


if (location.pathname == "/canvasLearning/course.html" || location.pathname == "/course.html") {
  var leaderboard = [];

  var _players2 = JSON.parse(localStorage.getItem("players"));

  var sortedPlayers = Object.keys(_players2).sort(function (a, b) {
    return _players2[b].rate - _players2[a].rate;
  });

  for (var i = 0; i < sortedPlayers.length; i++) {
    var playerName = sortedPlayers[i];
    var playerScore = _players2[playerName].rate;
    leaderboard.push({
      "name": playerName,
      "rate": playerScore,
      "rank": i + 1
    });
  }

  for (var _i = 0; _i < leaderboard.length; _i++) {
    document.querySelector("#rank".concat(_i + 1)).innerHTML = "<h5 class=\"fs-3\" id=\"rank".concat(_i + 1, "\">").concat(leaderboard[_i].name, "</h5>");
    document.querySelector("#rank".concat(_i + 1, "Rate")).innerHTML = "<h5 class=\"fs-3\" id=\"rank".concat(_i + 1, "\">(").concat(leaderboard[_i].rate, ")</h5>");
  } //swiper


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
}

if (location.pathname == "/canvasLearning/index.html" || location.pathname == "/index.html" || location.pathname == "/" || location.pathname == "/canvasLearning/") {
  var loader = function loader() {
    setTimeout(function () {
      load.style.display = 'none';
    }, 3000);
  };

  var getName = function getName(value) {
    var str = "";
    var userName = nickName.value;
    str = userName;
    var user = {
      name: str,
      rate: 0,
      finished: [false, false, false, false, false, false, false, false, false],
      percentage: 0
    };
    users.push(user);
    localStorage.setItem("userInfo", JSON.stringify(users));
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    swal("Good job!", "\u6210\u529F\u5EFA\u7ACB\u4F7F\u7528\u8005 \uFF1A ".concat(str), "success", {
      button: "確認"
    });
    localStorage.removeItem('correct');
    var userfinishedData = userInfo[0].finished.filter(function (value) {
      return value == true;
    });
    ;

    if (userfinishedData.length == 0) {
      finishedData = userfinishedData.length + 1;
    } else {
      finishedData = userfinishedData.length;
    }

    unFinishedData = 9 - finishedData;
  };

  //loader
  var load = document.querySelector('.loader');
  loader();
  var nickName = document.querySelector("#nickName");
  var addUser = document.querySelector("#addUser");
  addUser.addEventListener("click", getName);
}

if (location.pathname == "/canvasLearning/record.html" || location.pathname == "/record.html") {
  var percentage = 0;
  var userInfo = JSON.parse(localStorage.getItem("userInfo"));
  var userfinishedData = userInfo[0].finished.filter(function (value) {
    return value == true;
  });

  if (userfinishedData.length == 0) {
    finishedData = 0;
    percentage = 0;
  } else {
    finishedData = userfinishedData.length;
    percentage = (finishedData / 9 * 100).toFixed(2);
  }

  unFinishedData = 9 - finishedData;
  document.querySelector("#percentage").innerHTML = "<span class=\"text-primary\" >".concat(percentage, "%</span>");
  document.querySelector("#userName").innerHTML = " <div class=\"fs-3 mb-2 text-center\" >".concat(userInfo[0].name, "</div>");
  document.querySelector("#rate").innerHTML = " <span class=\"text-primary\" >".concat(userInfo[0].rate, "</span>");
  userInfo[0].finished.forEach(function (e, index) {
    if (e == true) {
      var str = "".concat(index + 1);
      document.querySelector("#item".concat(str)).setAttribute("class", "list-group-item ");
    } else {
      ;
    }
  });
  var chart = c3.generate({
    bindto: "#chart",
    data: {
      columns: [['已完成', "".concat(finishedData)], ['未完成', "".concat(unFinishedData)]],
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
      title: "\u7A4D\u5206\u6578\uFF1A".concat(userInfo[0].rate, "/33")
    }
  });
  setTimeout(function () {
    chart.load({
      columns: [["已完成", "".concat(finishedData)], ["未完成", "".concat(unFinishedData)]]
    });
  }, 2500);
  var chart2 = c3.generate({
    bindto: "#chart2",
    data: {
      columns: [['已完成', "".concat(finishedData)], ['剩餘關卡', "".concat(unFinishedData)]],
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
      title: "\u5B8C\u6210\u6BD4\u4F8B : ".concat(percentage, "%")
    }
  });
  setTimeout(function () {
    chart2.load({
      columns: [["已完成", "".concat(finishedData)], ["剩餘關卡", "".concat(unFinishedData)]]
    });
  }, 3500); // var chart3 = c3.generate({
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
// var chart = c3.generate({
//     bindto: "#chart",
//     data: {
//         columns: [
//             ['已完成', 11],
//             ['未完成', 9],
//         ],
//         colors: {
//           已完成: '#DD4C57',
//           未完成: '#EB9C37',
//         },
//         type : 'donut',
//         onclick: function (d, i) { console.log("onclick", d, i); },
//         onmouseover: function (d, i) { console.log("onmouseover", d, i); },
//         onmouseout: function (d, i) { console.log("onmouseout", d, i); }
//     },
//     donut: {
//         title: "積分數：11/20"
//     }
//   });
//   setTimeout(function () {
//     chart.load({
//         columns: [
//             ["已完成", 11],
//             ["未完成", 9],
//         ]
//     });
//   }, 2500);
//   var chart2 = c3.generate({
//     bindto: "#chart2",
//     data: {
//         columns: [
//             ['已完成', 91],
//             ['剩餘關卡', 9],
//         ],
//         colors: {
//           已完成: "#03A9F4",
//           剩餘關卡: "#76FF03",
//         },
//         type : 'donut',
//         onclick: function (d, i) { console.log("onclick", d, i); },
//         onmouseover: function (d, i) { console.log("onmouseover", d, i); },
//         onmouseout: function (d, i) { console.log("onmouseout", d, i); }
//     },
//     donut: {
//         title: "完成比例：91%"
//     }
//   });
//   setTimeout(function () {
//     chart2.load({
//         columns: [
//             ["已完成", 91],
//             ["剩餘關卡", 9],
//         ]
//     });
//   }, 1500);
//   var chart3 = c3.generate({
//     bindto: "#chart3",
//     data: {
//       x: 'x',
//       columns: [
//           ['x', '2022-09-01', '2022-09-02', '2022-09-03', '2022-09-04', '2022-09-05', '2022-09-06', '2022-09-07'],
//           ['已完成', 3, 5, 6, 7, 9, 11 ],
//           ['剩餘關卡', 30, 27, 24, 22, 19, 19]
//       ]
//   },
//   axis: {
//       x: {
//           type: 'timeseries',
//           tick: {
//               format: '%Y-%m-%d'
//           }
//       }
//   }
//   });
//   setTimeout(function () {
//     chart3.load({
//         columns: [
//             ["獲得積分數", 12,13,15,17,19,21],
//         ]
//     });
//   }, 1500);
"use strict";
// const load = document.querySelector('.loader');
// function loader (){
//   setTimeout(() => { 
//     load.style.display = 'none';}
//     , 3000);
// }
// loader ();
"use strict";
"use strict";

if (location.pathname == "/canvasLearning/courseDetail.html" || location.pathname == "/courseDetail.html") {
  current_lesson = 0;
} else if (location.pathname == "/canvasLearning/courseDetail-mid.html" || location.pathname == "/courseDetail-mid.html") {
  current_lesson = 6;
} else {
  current_lesson = 9;
}

var lessons = [{
  title: "lesson 1",
  description: "線段",
  code2Learn: "\nvar canvas = document.getElementById('fractal');\n      \nvar ctx = canvas.getContext('2d');\n      \nctx.clearRect(0,0,canvas.width,canvas.height);\n      \nctx.moveTo(10,10);\n      \nctx.lineTo(150,50);\n      \nctx.stroke();\n      ",
  instruction: "// \u756B\u7DDA\u6BB5\uFF0C\u5F9E(10,10)\u5230(150,50)\n      ",
  signature: {
    imageDiff: 100,
    totalPixels: 4708
  },
  rate: 2,
  init: "ctx.moveTo(10,10);\n    ctx.lineTo(150,50);\n    ctx.stroke();"
}, {
  title: "lesson 2",
  description: "矩形",
  code2Learn: "\nvar canvas = document.getElementById('fractal');\n      \nvar ctx = canvas.getContext('2d');\n      \nctx.clearRect(0,0,canvas.width,canvas.height);\n      \nctx.fillRect(10, 10, 50, 50);\n      ",
  instruction: "//  \u756B\u77E9\u5F62\uFF0C\u539F\u9EDE (10,10) \u9577\u3001\u5BEC 50 \n      ",
  signature: {
    imageDiff: 0,
    totalPixels: 4708
  },
  rate: 3,
  init: "ctx.fillRect(10, 10, 50, 50);"
}, {
  title: "lesson 3",
  description: "三角形",
  code2Learn: "\nvar canvas = document.getElementById('fractal');\n      \nvar ctx = canvas.getContext('2d');\n      \nctx.clearRect(0,0,canvas.width,canvas.height);\n      \nctx.beginPath();\n      \nctx.moveTo(100,50);\n      \nctx.lineTo(60,90);\n      \nctx.lineTo(140,90);\n      \nctx.closePath();\n      \nctx.stroke();\n      ",
  instruction: "//  \u756B\u4E09\u89D2\u5F62\uFF0C\u4E09\u9EDE\u5206\u5225\u70BA(100,50)\u3001(60,90)\u3001(140,90)\n      ",
  signature: {
    imageDiff: 238,
    totalPixels: 398
  },
  rate: 4,
  init: "ctx.beginPath();\n    ctx.moveTo(100,50);\n    ctx.lineTo(60,90);\n    ctx.lineTo(140,90);\n    ctx.closePath();\n    ctx.stroke();"
}, {
  title: "lesson 4",
  description: "圓形",
  code2Learn: "\nvar canvas = document.getElementById('fractal');\n      \n var ctx = canvas.getContext('2d');\n      \n ctx.clearRect(0,0,canvas.width,canvas.height);\n      \n ctx.beginPath();\n      \n ctx.arc(100, 75, 50, 0, 2 * Math.PI);\n      \n ctx.stroke();\n      ",
  instruction: "//   \u5283\u4E00\u500B\u7121\u586B\u6EFF\u5713\uFF0C\u4E2D\u5FC3\u9EDE(100,75)\u534A\u5F9150\n      ",
  signature: {
    imageDiff: 823,
    totalPixels: 3164
  },
  rate: 3,
  init: "ctx.beginPath();\n    ctx.arc(100, 75, 50, 0, 2 * Math.PI);\n    ctx.stroke();"
}, {
  title: "lesson 5",
  description: "弧形",
  code2Learn: "\nvar canvas = document.getElementById('fractal');\n      \n var ctx = canvas.getContext('2d');\n      \n ctx.clearRect(0,0,canvas.width,canvas.height);\n      \n ctx.beginPath();\n      \n ctx.arc(100, 60, 50, Math.PI/2*3, Math.PI/2);\n      \n ctx.stroke();\n      ",
  instruction: "//   \u756B\u8D77\u59CB\u89D2270\u5EA6\u3001\u7D50\u675F\u89D290\u5EA6\u5F27\u578B\uFF0C\u4E2D\u5FC3\u9EDE(100,60)\u534A\u5F9150\n      ",
  signature: {
    imageDiff: 823,
    totalPixels: 3164
  },
  rate: 3,
  init: " ctx.beginPath();\n    ctx.arc(100, 60, 50, Math.PI/2*3, Math.PI/2);\n    ctx.stroke();"
}, {
  title: "lesson 6",
  description: "用函數畫圖",
  code2Learn: "\nvar canvas = document.getElementById('fractal');\n      \n var ctx = canvas.getContext('2d');\n      \n ctx.clearRect(0,0,canvas.width,canvas.height);\n      \n function drawCircle(x,y,r){\n      \n ctx.beginPath();\n      \n ctx.arc(x,y,r,0,2*Math.PI);\n      \n ctx.stroke();\n      \n}\n      \n drawCircle(100,100,50);\n      ",
  instruction: "//   \u65B0\u589E\u756B\u5713\u51FD\u6578\u4E26\u57F7\u884C\uFF0C\u4E2D\u5FC3\u9EDE(100,100)\u534A\u5F9150\n      ",
  signature: {
    imageDiff: 823,
    totalPixels: 3164
  },
  rate: 4,
  init: "function drawCircle(x,y,r){\n      ctx.beginPath();\n      ctx.arc(x,y,r,0,2*Math.PI);\n      ctx.stroke();\n      }\n      drawCircle(100,100,50);"
}, {
  title: "lesson 7",
  description: "使用函數重複執行",
  code2Learn: "\nvar canvas = document.getElementById('fractal');\n      \n var ctx = canvas.getContext('2d');\n      \n ctx.clearRect(0,0,canvas.width,canvas.height);\n      \n function drawCircle(x,y,r){\n      \n ctx.beginPath();\n      \n ctx.arc(x,y,r,0,2*Math.PI);\n      \n ctx.stroke();\n      \n}\n      \n drawCircle(100,100,50);\n      \n drawCircle(50,100,50);\n      \n drawCircle(150,100,50);\n      ",
  instruction: "//   \u65B0\u589E\u756B\u5713\u51FD\u6578\u4E26\u57F7\u884C\n//\u4E2D\u5FC3\u9EDE\u5206\u5225\u70BA(100,100)\u3001(50,100)\u3001(150,100)\u534A\u5F9150\n      ",
  signature: {
    imageDiff: 823,
    totalPixels: 3164
  },
  rate: 4,
  init: "function drawCircle(x,y,r){\n      ctx.beginPath();\n      ctx.arc(x,y,r,0,2*Math.PI);\n      ctx.stroke();\n      }\n      drawCircle(100,100,50);\n      drawCircle(50,100,50);\n      drawCircle(150,100,50);"
}, {
  title: "lesson 8",
  description: "多次執行",
  code2Learn: "\nvar canvas = document.getElementById('fractal');\n      \n var ctx = canvas.getContext('2d');\n      \n ctx.clearRect(0,0,canvas.width,canvas.height);\n      \n function drawCircle(x,y,r){\n      \n ctx.beginPath();\n      \n ctx.arc(x,y,r,0,2*Math.PI);\n      \n ctx.stroke();\n      if (r > 2) { // condition for drawing similarity\n        drawCircle(x + r, y, r / 2);\n        drawCircle(x - r, y, r / 2);\n        }\n      \n}\n      \n drawCircle(100,100,50);\n      ",
  instruction: "//\u52A0\u5165\u689D\u4EF6\u5F0F\u8B93\u51FD\u6578\u57F7\u884C\u591A\u6B21\uFF0C\u5C0D\u7A31\u5716\u65B9\u5F0F\u5982\u4E0B:\n    // if (r > 2) { \n//drawCircle(x + r, y, r / 2);\n//drawCircle(x - r, y, r / 2);\n//}",
  signature: {
    imageDiff: 823,
    totalPixels: 3164
  },
  rate: 5,
  init: "function drawCircle(x,y,r){\n      ctx.beginPath();\n      ctx.arc(x,y,r,0,2*Math.PI);\n      ctx.stroke();\n      if (r > 2) { // condition for drawing similarity\n        drawCircle(x + r, y, r / 2);\n        drawCircle(x - r, y, r / 2);\n        }\n      }\n      drawCircle(100,100,50);"
}, {
  title: "lesson 9",
  description: "遞迴樹",
  code2Learn: "\nvar canvas = document.getElementById('fractal');\n      \n var ctx = canvas.getContext('2d');\n      \n canvas.width = window.innerWidth; // \u756B\u5E03\u5BEC = \u8996\u7A97\u5167\u7684\u5BEC\n      \n canvas.height = window.innerHeight; // \u756B\u5E03\u9AD8 = \u8996\u7A97\u5167\u7684\u9AD8\n      \n ctx.fillStyle = '#fff5a5';\n      \n ctx.fillRect(0, 0, canvas.width, canvas.height);\n      \n ctx.clearRect(0,0,canvas.width,canvas.height);\n      \n function draw(startX, startY, len, angle) {\n      \n  ctx.beginPath();\n      \n  ctx.save();\n        \n        //\u4E2D\u9593\u6A39\u5E79\n      \n  ctx.translate(startX, startY);\n      \n  ctx.rotate(angle * Math.PI/180);\n      \n  ctx.moveTo(0, 0);\n      \n  ctx.lineTo(0, -len);\n      \n  ctx.stroke();\n\n      \n  if(len < 10) {\n        \n      ctx.restore();\n        \n   return;\n        \n  }\n        \n  draw(0, -len, len*0.8, -15);//\u5DE6\u908A\u5206\u4E4B\n        \ndraw(0, -len, len*0.8, +15);//\u53F3\u908A\u5206\u652F\n        \nctx.restore();//\u6062\u5FA9\u9810\u8A2D\u503C\uFF0C\u5206\u652F\u624D\u6703\u5F9E\u4E2D\u9593\u6A39\u5E79\u9802\u9EDE\u958B\u59CB\u751F\u9577\n        \n}\n        \ndraw(300, 250, 50, 0)   \n      ",
  instruction: "//\u7E6A\u88FD\u905E\u8FF4\u6A39\u521D\u59CB\u9EDE(300,250)\u3001\u521D\u59CB\u6A39\u679D\u9577\u5EA650\n//\u89D2\u5EA60\u5EA6\u958B\u59CB\u751F\u9577\uFF0C\u905E\u8FF4\u689D\u4EF6\u9650\u5236\u65BC\u9577\u5EA6\u5C0F\u65BC10\u505C\u6B62\n",
  signature: {
    imageDiff: 823,
    totalPixels: 3164
  },
  rate: 5,
  init: "function draw(startX, startY, len, angle) {\n        ctx.beginPath();\n        ctx.save();\n        \n        //\u4E2D\u9593\u6A39\u5E79\n        ctx.translate(startX, startY);\n        ctx.rotate(angle * Math.PI/180);\n        ctx.moveTo(0, 0);\n        ctx.lineTo(0, -len);\n        ctx.stroke();\n\n        if(len < 10) {\n              ctx.restore();\n           return;\n          }\n          draw(0, -len, len*0.8, -15);//\u5DE6\u908A\u5206\u4E4B\n        draw(0, -len, len*0.8, +15);//\u53F3\u908A\u5206\u652F\n        ctx.restore();//\u6062\u5FA9\u9810\u8A2D\u503C\uFF0C\u5206\u652F\u624D\u6703\u5F9E\u4E2D\u9593\u6A39\u5E79\u9802\u9EDE\u958B\u59CB\u751F\u9577\n        }\n        draw(300, 250, 50, 0) "
}]; //編輯器樣式

var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "javascript",
  theme: "dracula",
  lineNumbers: "true",
  lineWrapping: "true" //   // styleActiveLine: true,
  //   // matchBrackets: true,
  //   // autoCloseBrackets: true,
  //   // autoCloseTags: true,
  //   // theme:'dracula',
  //   // mode: "htmlmixed",

}); //卡片按鈕回應

function clickAlert() {
  Swal.fire('閱讀後可至下方進行實作挑戰！');
} //儲存鈕回應


function saveData() {
  Swal.fire({
    title: '將資料儲存進個人頁面?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: '儲存',
    denyButtonText: "\u5148\u4E0D\u8981"
  }).then(function (result) {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('儲存成功!', '', 'success');
    } else if (result.isDenied) {
      Swal.fire('資料未儲存，僅保留系統儲存資料', '', 'info');
    }
  });
} //執行按鈕


var run = document.querySelector("#run");
var code = editor.getValue();
var canvasPrepare = "var canvas = document.getElementById('fractal');\n\n canvas.setAttribute('width',innerWidth);\n\n canvas.setAttribute('height',innerHeight);\n\n var ctx =  canvas.getContext('2d');"; //執行按鈕點擊觸發

run.addEventListener("onload", function () {
  // resizeCanvas();
  var htmlCode = "<canvas id='fractal'></canvas>";
  var jsCode = "<scri" + "pt>" + canvasPrepare + editor.getValue() + "</scri" + "pt>";
  var doc = document.querySelector("#iview").contentWindow.document;
  doc.open();
  doc.write(htmlCode + jsCode);
  previewWindow.close();
}); //改變canvas大小,撐滿空間

function resizeCanvas() {
  var width = document.querySelector(".view").clientWidth;
  var height = document.querySelector(".view").clientHeight;
  document.querySelector("#iview").setAttribute("height", "".concat(height));
  document.querySelector("#iview").setAttribute("width", "".concat(width)); // document.querySelector("#iview").setAttribute("overflow", "hidden");
}

var images; // images for comparison

var doc; // user source code

var width; // width of editor

var height; // height of editor

var canvasCode; // declaring canvas

var current_lesson;
var instruction;
var code2Learn; // the code lesson

var destinationCode; // used to compare user source code

var sourceCode; // user source code
// var code;

var preview; // flag for preview

var verification = "\n \n    image2 = ctx.getImageData(0,0,canvas.width,canvas.height);\n    totalPixels = 0;\n    imageDiff = 0;\n    for (let i=0; i<image1.data.length;i++){\n        if(image1.data[i]!=0) totalPixels++; \n        if(image1.data[i]!=image2.data[i]) imageDiff ++;\n    }\n    localStorage.setItem(\"totalPixels\", totalPixels);                                         \n    localStorage.setItem(\"imageDiff\", imageDiff);\n";
var clearScreen = "ctx.clearRect(0,0,canvas.width,canvas.height);";
var showSample = "ctx.clearRect(0,0,canvas.width,canvas.height);\n  ctx.putImageData(image1,0,0);";
init();

function init() {
  images = "\n    \n var image1 = ctx.getImageData(0, 0, canvas.width,canvas.height);\n    \n var image2;  \n    \n var image3 = ctx.createImageData(canvas.width,canvas.height);\n    \n var totalPixels = 0;\n    \n var imageDiff = 0;";
  doc = document.getElementById("iview").contentWindow.document;
  width = document.getElementById("iview").clientWidth;
  height = document.getElementById("iview").clientHeight;
  canvasCode = "<canvas id=\"fractal\"></canvas> \n";
  getSignatures();
  /* start to learn */

  current_lesson;
  code2Learn = lessons[current_lesson].code2Learn;
  instruction = lessons[current_lesson].instruction;
  destinationCode = canvasCode + "<scri" + "pt>" + code2Learn + images + "\n</scri" + "pt>";
  editor.setValue(instruction); // write original code  (code to learn )to produce image 1

  doc.open();
  doc.write(destinationCode); // open until user done editing
  // preview=true;   // flag to quick response user coding
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
  }
}

var userInfo = JSON.parse(localStorage.getItem("userInfo"));
var userfinishedData = userInfo[0].finished.filter(function (value) {
  return value == true;
});
var correct = parseInt(userfinishedData.length); // the number of correct coding

var players;

if (JSON.parse(localStorage.getItem("players"))) {
  players = JSON.parse(localStorage.getItem("players"));
} else {
  players = {};
} //改變progress


function progressCheck() {
  var correctArray = userInfo[0].finished.filter(function (value) {
    return value == true;
  });
  var correctNum = parseInt(correctArray.length);
  document.getElementById("progress").style.width = "".concat(correctNum / lessons.length * 100, "%");
  document.querySelector("#progress").classList.add('progress', 'bg-primary');
  document.getElementById("progress").innerHTML = "<h6 class=\"text-center w-100\">".concat(correctNum, "/").concat(lessons.length, "</h6>");
} //積分累加


function rateCount() {
  var status = userInfo[0].finished[current_lesson];

  if (status) {
    ;
  } else {
    userInfo[0].rate += lessons[current_lesson].rate;
    players["".concat(userInfo[0].name)] = {
      "rate": "".concat(userInfo[0].rate)
    };
  }
}

function check() {
  doc.write("<scri" + "pt>" + clearScreen + editor.getValue() + verification + "\n</scri" + "pt>");
  var imageDiff = parseInt(localStorage.getItem("imageDiff"));
  var totalPixels = parseInt(localStorage.getItem("totalPixels"));
  var distanceSquare = (imageDiff - lessons[current_lesson].signature.imageDiff) * (imageDiff - lessons[current_lesson].signature.imageDiff) + (totalPixels - lessons[current_lesson].signature.totalPixels) * (totalPixels - lessons[current_lesson].signature.totalPixels);

  if (distanceSquare < 20) {
    rateCount();
    Swal.fire({
      title: '正確!',
      text: "\u5171\u7372\u5F97".concat(lessons[current_lesson].rate, "\u7A4D\u5206"),
      icon: 'success',
      html: "\u5171\u7372\u5F97".concat(lessons[current_lesson].rate, "\u7A4D\u5206")
    });
    localStorage.setItem("players", JSON.stringify(players));
    userInfo[0].finished.splice("".concat(current_lesson), 1, true);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    progressCheck();
    next();
  } else {
    Swal.fire({
      title: '需要幫忙嗎?',
      text: "觀看提示內容幫助過關!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '是的我需要!'
    }).then(function (result) {
      if (result.isConfirmed) {
        Swal.fire("".concat(lessons[current_lesson].init), '再試試看吧', 'success');
      }
    });
    destinationCode = canvasCode + "<scri" + "pt>" + code2Learn + editor.getValue() + "\n</scri" + "pt>";
    doc.close(); // close last action

    doc.open();
    doc.write(destinationCode);
  }
}

var delay;
editor.on("change", function () {
  clearTimeout(delay);
  if (preview) delay = setTimeout(updatePreview, 300);
});

function updatePreview() {
  code = editor.getValue().replace(/^\s*/, "");
  sourceCode = "<scri" + "pt>" + showSample + code + "\n</scri" + "pt>"; //sourceCode = "<scri" + "pt>" + code + "\n</scri" + "pt>";

  doc.write(sourceCode);
}

delay = setTimeout(updatePreview(), 1000);

function reset() {
  if (location.pathname == "/canvasLearning/courseDetail.html" || location.pathname == "/courseDetail.html") {
    current_lesson = 0;
  } else if (location.pathname == "/canvasLearning/courseDetail-mid.html" || location.pathname == "/courseDetail-mid.html") {
    current_lesson = 6;
  } else {
    current_lesson = 9;
  }

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

progressCheck();
// console.log('swiper start');
// let swiper = new Swiper(".courseSwiper", {
//     slidesPerView: 'auto',
//     spaceBetween: 20,
//     // slidesPerGroup: 3,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     // pagination: {
//     //   el: ".swiper-pagination",
//     //   clickable: true,
//     // },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
//   console.log('swiper end');
"use strict";
//# sourceMappingURL=all.js.map
