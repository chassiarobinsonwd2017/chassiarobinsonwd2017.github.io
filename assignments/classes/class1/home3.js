function changeFont(){

    if (currentFont == "monospace"){
        document.body.style.fontFamily = "cursive";
        currentFont = "cursive";
    } else {
        document.body.style.fontFamily = "monospace";
        currentFont = "monospace";
    }
    return currentFont;

}

document.getElementById("myButton").onclick = changeFont;
var currentFont = "monospace";
