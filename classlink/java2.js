// function solve(x,y) {
//     let ans = x + y;
//     console.log(ans);
// }

// function startClass() {
//     let a = 20;
//     let b = 2;
//     solve(20, 2);
// }

// var routine = new Array(5);
// for (let i = 0; i < routine.length; i++){
//     routine[i] = new Array(4);
// }

// let h = 0;
// for (let i = 0; i < 5; i++){
//     for (let j = 0; j < 4; j++){
//         routine[i][j] = "www.google.com";
//     }
// }

// for (let i = 0; i < 5; i++){
//     for (let j = 0; j < 4; j++){
//         document.write(routine[i][j] + " ");
//     }
//     document.write("<br>");
// }

// var routine = new Array(2);
// for (let i = 0; i < routine.length; i++){
//     routine[i] = new Array(2);
// }

// routine[0][0] = "https://www.google.com/";
// routine[0][1] = "https://www.youtube.com/";
// routine[1][0] = "https://getbootstrap.com/docs/5.0/getting-started/introduction/";
// routine[1][1] = "https://fast.com/";

// let time = 2000;
// const i = 0;
// let j = -1;
// function startClass() {
//     setTimeout(() => {
//         j++;
//         window.open(routine[i][j]);
//         time += 4000;
//         startClass();
//     }, time);
// }

//array of background pics
var pics = ["p0.jpeg","p1.jpg", "p2.jpeg", "p3.jpeg", "p4.jpeg", "p5.jpeg", "p6.jpeg", "p7.jpeg", "p8.jpeg"];

var num = Math.floor(Math.random() * 9);
// changing the background img
document.body.style.backgroundImage = `url(${pics[num]})`;








