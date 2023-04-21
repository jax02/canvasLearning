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