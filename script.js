// constants and variables
const buttons = document.getElementById("buttons");
var currDisplay = "";
var currOp = "";
var values = [];
var ind = 0;
var equalsHappend = false;

// Adding event listners to all buttons
for( var i = 0 ; i < buttons.children.length; i++){
    buttons.children[i].addEventListener("click", findAction);
}


//functions used
function add(val1 , val2){return String(val1 + val2);} 
function sub(val1 , val2){return String(val1 - val2);} 
function mult(val1 , val2){return String(val1 * val2);}
function div(val1, val2){
    if (val2 == 0) {return "80085";}
    result = Number((val1 / val2).toFixed(3));
    return String(result);
}
function remainder(val1, val2){
    if (val2 == 0) {return "Its INFINITE"}
    return String(val1 % val2);
}

function findAction(e){
    if(equalsHappend){
        clear();
        equalsHappend = false;
    }
    var currClass = e.target.className; 
    if(currClass === "num"){
        dispNum(e);
    }
    else if(currClass === "op"){
        dispOp(e);
    }
    else{
        dispRest(e);
    }
}

function dispNum(e){
    if(e.target.value === "0" && checkZeroPos()){
        currDisplay += e.target.value;
    }
    else if(e.target.value !== "0"){
    currDisplay += e.target.value;
    }
}

function dispOp(e){
    
    if (currDisplay !== ""){
        values[ind] = currDisplay;
        ind++;
        if(values.length === 2){
            operate();
        }
        currDisplay = "";
        currOp = e.target.value;
        console.log(currOp, values, values.length, currDisplay);
    }
    else{
        currOp = e.target.value;
        console.log(currOp, values, values.length, currDisplay);
    }
}

function dispRest(e){
    if (e.target.className === "clear"){
        clear();
    }
    else if( e.target.className === "dot"){
        dot();
    }
    else if( e.target.className === "equals"){
            equals();
            equalsHappend = true;
    }
    else if(e.target.className === "changeSign"){
        changeSign();
    }
    console.log(currOp, values, values.length, currDisplay);
}

function clear(){
    currDisplay = "";
    currOp = "";
    values = [];
    ind = 0;
}

function dot(){
    if (currDisplay === ""){
        currDisplay = "0.";
    }
    else if(!currDisplay.includes(".")){
        currDisplay += ".";
    }
}

function equals(){
    if(values.length === 1 && currDisplay !== ""){
        values[ind] = currDisplay;
        ind++;
        operate();
        currDisplay = values[0];
        values = [];
        ind = 0;
    }    
}
function operate(){
    var res = "";
    console.log(Number(values[0]), Number(values[1]));
    switch (currOp){
        case "+":
            res = add(Number(values[0]), Number(values[1]));
            break;
        case "-":
            res = sub(Number(values[0]), Number(values[1]));
            break;
        case "/":
            res = div(Number(values[0]), Number(values[1]));
            break;
        case "%":
            res = remainder(Number(values[0]), Number(values[1]));
            break;
        case "*":
            res = mult(Number(values[0]), Number(values[1]));
            break;
        default:
            console.log('wtf');
    }
    values = [];
    ind = 0;
    values[ind] = res;
    ind++;
    currDisplay = "";
}

function checkZeroPos(){
    if(currDisplay === ""){
        return false;
    }
    return true;
}

function changeSign(){
    if (currDisplay !== ""){
        currDisplay = String(-(Number(currDisplay)));
    }
}

