

function changeFont(){

    if (currentFont == "inherit"){
        document.body.style.fontFamily = "cursive";
        currentFont = "cursive";
    } else {
        document.body.style.fontFamily = "fantasy";
        currentFont = "fantasy";
    }
    return currentFont;

}

document.getElementById("myButton").onclick = changeFont;
var currentFont = "inherit";
