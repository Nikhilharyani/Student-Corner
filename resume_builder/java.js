function addWorkExperience() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addAQ() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

//generate CV
function generateCV() {

    //contact info
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = nameField;
    document.getElementById("nameT2").innerHTML = nameField;

    let contactField = document.getElementById("contactField").value;
    document.getElementById("contactT1").innerHTML = contactField;

    let addressField = document.getElementById("addressField").value;
    document.getElementById("addressT1").innerHTML = addressField;

    //important links
    let fbField = document.getElementById("fbField").value;
    document.getElementById("fb").innerHTML = fbField;

    let instaField = document.getElementById("instaField").value;
    document.getElementById("insta").innerHTML = instaField;
    
    let linkedField = document.getElementById("linkedField").value;
    document.getElementById("linkedin").innerHTML = linkedField;

    //objective
    let ObjectiveField = document.getElementById("objectiveField").value;
    document.getElementById("ObjectiveT").innerHTML = ObjectiveField;

    //work experience
    let wes = document.getElementsByClassName("weField");
    let str = "";
    
    for (let e of wes) {
        str = str + `<li> ${e.value}</li>`;
    }

    document.getElementById("weT").innerHTML = str;

    //academic qualification
    let aqs = document.getElementsByClassName("eqField");
    let str1 = "";
    
    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value}</li>`;
    }

    document.getElementById("aqT").innerHTML = str1;

    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
    document.getElementById('navbar').style.display = 'none';
}

//printCV function
function printCV(){
    window.print();
}

//change function
function change() {
    document.getElementById('cv-form').style.display = 'block';
    document.getElementById('cv-template').style.display = 'none';
    document.getElementById('navbar').style.display = 'block';
}

// //downloadCV function
// function downloadCV() {
//     const cvtemp = document.getElementById("cv-template");
//     html2pdf().from(cvtemp).save();
// } 