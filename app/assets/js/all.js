let users = [];
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
  }
addUser.addEventListener("click", getName);

}



//swiper
if(location.pathname == "/courseDetail.html"){
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
  var chart = c3.generate({
    bindto: "#chart",
    data: {
        columns: [
            ['已完成', 11],
            ['未完成', 9],
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
        title: "積分數：11/20"
    }
  });
  setTimeout(function () {
    chart.load({
        columns: [
            ["已完成", 11],
            ["未完成", 9],
        ]
    });
  }, 2500);
  
  var chart2 = c3.generate({
    bindto: "#chart2",
    data: {
        columns: [
            ['已完成', 91],
            ['剩餘關卡', 9],
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
        title: "完成比例：91%"
    }
  });
  
  setTimeout(function () {
    chart2.load({
        columns: [
            ["已完成", 91],
            ["剩餘關卡", 9],
        ]
    });
  }, 1500);
  
  var chart3 = c3.generate({
    bindto: "#chart3",
    data: {
      x: 'x',
      columns: [
          ['x', '2022-09-01', '2022-09-02', '2022-09-03', '2022-09-04', '2022-09-05', '2022-09-06', '2022-09-07'],
          ['已完成', 3, 5, 6, 7, 9, 11 ],
          ['剩餘關卡', 30, 27, 24, 22, 19, 19]
      ]
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
        columns: [
            ["獲得積分數", 12,13,15,17,19,21],
        ]
    });
  }, 1500);
}


console.log('all end');