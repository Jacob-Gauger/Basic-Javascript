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

}

function loadCar(index){
    
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
