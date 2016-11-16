document.getElementById("firstButton").onclick =changeColor;
var currentColour= "darkturquoise";
function changeColor(){
    document.body.style.color = "yellow";



if (currentColour == "darkturquoise") {
                                      document.body.style.color = "yellow";
                                      currentColour = "yellow";
                                    }
                                    else
                                    {
                                     document.body.style.color = "darkturquoise";
                                     currentColour = "darkturquoise";
                                     }
                                     return currentColour;
}
