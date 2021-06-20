//variables
var d = new Date();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();
var day = 1;
let count = 0;
let classNumber = 0;
var timereq = 0;


// creating the routine matrix
var routine = new Array(5);
for (let i = 0; i < routine.length; i++){
    routine[i] = new Array(4);
}


//database of the routine matrix
routine[0][0] = "https://meet.google.com/hhi-daiu-mro";
routine[0][1] = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ODM0NTY5MzItZWZkMC00ZGRkLWJiNzUtM2YxNDdhMDI1ZDk5%40thread.v2/0?context=%7b%22Tid%22%3a%22a6de9407-2d24-407d-81e6-941b053c301a%22%2c%22Oid%22%3a%2206b29f8f-a97b-40c8-abdf-32fc0507ff17%22%7d";
routine[0][2] = "https://meet.google.com/rmn-xeyx-rxc";
routine[0][3] = "https://classroom.google.com/u/0/c/MjQ5NTMyNjk1MTQx";
routine[1][0] = "https://meet.google.com/kvs-knmu-mnf";
routine[1][1] = "https://meet.google.com/hhi-daiu-mro";
routine[1][2] = "https://classroom.google.com/u/0/c/MjQ5NDkxMDAwMzA3";
routine[1][3] = "https://meet.google.com/rmn-xeyx-rxc";
routine[2][0] = "https://classroom.google.com/u/0/c/MjQ5NDExODE4MDc3";
routine[2][1] = "https://meet.google.com/kvs-knmu-mnf";
routine[2][2] = "https://meet.google.com/hhi-daiu-mro";
routine[2][3] = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ODM0NTY5MzItZWZkMC00ZGRkLWJiNzUtM2YxNDdhMDI1ZDk5%40thread.v2/0?context=%7b%22Tid%22%3a%22a6de9407-2d24-407d-81e6-941b053c301a%22%2c%22Oid%22%3a%2206b29f8f-a97b-40c8-abdf-32fc0507ff17%22%7d";
routine[3][0] = "https://classroom.google.com/u/0/c/MjQ5NTMyNjk1MTQx";
routine[3][1] = "https://classroom.google.com/u/0/c/MjQ5NDExODE4MDc3";
routine[3][2] = "https://meet.google.com/kvs-knmu-mnf";
routine[3][3] = "https://meet.google.com/sxx-myvq-xwf";
routine[4][0] = "https://meet.google.com/rmn-xeyx-rxc";
routine[4][1] = "https://classroom.google.com/u/0/c/MjQ5NTMyNjk1MTQx";
routine[4][2] = "https://classroom.google.com/u/0/c/MjQ5NDExODE4MDc3";
routine[4][3] = "https://meet.google.com/sxx-myvq-xwf";



//methods for nextclass
function nextClass(i,j) {
    if (classNumber < 3) {
        setTimeout(() => {
            j++;
            classNumber++;
            window.open(routine[i][j]);
            nextClass(i, j);
        }, 60000);
    }
    else {
        alert("This is your last class.The program ends now :)");
    }
}

function beginClass(intime,i,j) {
        setTimeout(() => {
            j++;
            classNumber++;
            window.open(routine[i][j]);
        }, intime);
        if (classNumber < 3) {
            nextClass(i, j);
        }
        else {
            alert("This is your last class.The program ends now :)");
        }
}


//calculating time when button is clicked
function startClass() {

    //clicking before classes start -- before 8:30
    if ((hours === 20 && minutes < 30) || (hours <= 20)) {
        if (hours === 20) {
            timereq += (29 - minutes) * 60000;
            timereq += (60 - seconds) * 1000;
        }
        else {
            timereq += (7 - hours) * 3600000;
            timereq += (59 - minutes) * 60000;
            timereq += (60 - seconds) * 1000;
            timereq += 30 * 60000;
        }
        count = 0;
        setTimeout(() => {
            window.open(routine[day][count]); //open the first class
            nextClass(day,count);
        }, timereq);
    }

    //8:30 - 9:30
    else if ((hours === 20 && minutes >= 30) || (hours === 21 && minutes < 30)) {
        if (hours === 20) {
            timereq += (89 - minutes) * 60000;
            timereq += (60 - seconds) * 1000;
        }
        else {
            timereq += (29 - minutes) * 60000;
            timereq += (60 - seconds) * 1000;
        }
        count = 0;
        window.open(routine[day][count]); //open the first class
        beginClass(timereq,day,count);
    }

    //9:30 - 10:30
    else if ((hours === 9 && minutes>=30) || (hours === 10 && minutes <30)) {
        if (hours === 8) {
            timereq += (89 - minutes) * 60000;
            timereq += (60 - seconds) * 1000;
        }
        else {
            timereq += (29 - minutes) * 60000;
            timereq += (60 - seconds) * 1000;
        }
        count = 1;
        classNumber += count;
        window.open(routine[day][count]); //opens the second class
        beginClass(timereq,day,count);
    }

    //10:30 - 11:30
    else if ((hours === 10 && minutes>=30) || (hours === 11 && minutes <30)) {
        if (hours === 8) {
            timereq += (89 - minutes) * 60000;
            timereq += (60 - seconds) * 1000;
        }
        else {
            timereq += (29 - minutes) * 60000;
            timereq += (60 - seconds) * 1000;
        }
        count = 2;
        classNumber += count;
        window.open(routine[day][count]); //opens the third class
        beginClass(timereq,day,count);
    }

    //11:30-12:30
    else if ((hours === 11 && minutes>=30) || (hours === 12 && minutes <30)) {
        if (hours === 8) {
            timereq += (89 - minutes) * 60000;
            timereq += (60 - seconds) * 1000;
        }
        else {
            timereq += (29 - minutes) * 60000;
            timereq += (60 - seconds) * 1000;
        }
        count = 3;
        classNumber += count;
        window.open(routine[day][count]); //opens the fourth class
        alert("This is your last class.The program ends now :)");
    }

    //after 12:30
    else {
        alert("Morning classes are over!!..You can go back to sleep :)");
    }
}
