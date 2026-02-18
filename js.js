let num = 0;
let index;

function tickUp(){
    num+= 1;
    document.getElementById("counter").innerHTML = num;
}

function tickDown(){
    num-= 1;
    document.getElementById("counter").innerHTML = num;
}

function runForLoop(){
    for(let i = 0; i < (num +1); i++){
        document.getElementById("forLoopResult").innerHTML += i + " ";
    }
}

function showOddNumbers(){
    for(let i = 1; i < (num +1); i+=2){
        document.getElementById("oddNumberResult").innerHTML += i + " ";
    }
}

function addMultiplesToArray(){
    let multiples = [];
    for(let i = 1; i < (num + 1); i++){
        if (i % 5 == 0){
            multiples.push(i);
        }
    }
    multiples.reverse();
    console.log(multiples);
}

function printCarObject(){
    var a = document.getElementById("carType").type;
    var b = document.getElementById("carMPG").type;
    var c = document.getElementById("carColor").type;
    let newCar = {
        carType: a,
        carMPG: b,
        carYear: c
    }
    console.log(newCar);
}

function loadCar(index){
    if (index == 1){
        console.log(carObject1);
    }
    if (index == 2){
        console.log(carObject2);
    }
    if (index == 3){
        console.log(carObject3);
    }
}

function changeColor(index){
    if (index == 1){
        document.getElementById("styleParagraph").style.color = "red";
    }
    if (index == 2){
        document.getElementById("styleParagraph").style.color = "green";
    }
    if (index == 3){
        document.getElementById("styleParagraph").style.color = "blue";
    }
}
