// constants and variables
const buttons = document.getElementById("buttons");
console.log(buttons);

for( var i = 0 ; i < buttons.children.length; i++){
    buttons.children[i].addEventListener("click", findAction);
}




// add, mult, sub, div, remainder, +/- functions
function add(val1 , val2){return val1 + val2;} 
function mult(val1 , val2){return val1 * val2;}
function div(val1, val2){
    if (val2 == 0) {return "80085";}
    result = Number((val1 / val2).toFixed(3));
    return result;
}
function remainder(val1, val2){
    if (val2 == 0) {return "Its INFINITE"}
    return val1 % val2;
}
function changeSign(val){
    return -val;
}

function findAction(e){
    var currClass = e.target.className; 
    if(currClass === "num"){
        console.log("this is a number");
        dispNum();
    }
    else if(currClass === "op"){
        console.log("this is a operator");
        dispOp();
    }
    else{
        console.log("this is the rest");
        dispRest();
    }
}