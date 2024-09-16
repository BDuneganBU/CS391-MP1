// functionality of the clear button
function rem() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML=String("");
}

// functionality of the addition button
function addition() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = Number(first) + Number(second);
    if (result < 0) {
        document.getElementById("output").style.color = "Red";
    } else {
        document.getElementById("output").style.color = "Black";
    }
    document.getElementById("output").innerHTML=String(result);
}

// functionality of the subtraction button
function subtraction() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = Number(first) - Number(second);
    if (result < 0) {
        document.getElementById("output").style.color = "Red";
    } else {
        document.getElementById("output").style.color = "Black";
    }
    document.getElementById("output").innerHTML=String(result);
}

// functionality of the multiplication button
function multiplication() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = Number(first) * Number(second);
    if (result < 0) {
        document.getElementById("output").style.color = "Red";
    } else {
        document.getElementById("output").style.color = "Black";
    }
    document.getElementById("output").innerHTML=String(result);
}

// functionality of the division button
function division() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = Number(first) / Number(second);
    if (result < 0) {
        document.getElementById("output").style.color = "Red";
    } else {
        document.getElementById("output").style.color = "Black";
    }
    document.getElementById("output").innerHTML=String(result);
}

// functionality of the power button (uses FOR loop)
function power() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = 1;
    for(let i=0; i<second; i++) {
        result = first*result;
    }
    if (result < 0) {
        document.getElementById("output").style.color = "Red";
    } else {
        document.getElementById("output").style.color = "Black";
    }
    document.getElementById("output").innerHTML=String(result);
}