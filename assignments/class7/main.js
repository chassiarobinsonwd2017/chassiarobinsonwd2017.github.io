$(function(){

    var invisible = true;
    var myRight = "20px";

    $("#clickme").on("click", function(){
        $("#menu").animate(
            {right: myRight},
            {queue: false, duration: 500, easing: "linear"}

        );

        if (invisible){
            myRight = "-100px";
            invisible = false;
        }else{
            myRight = "20px";
            invisible = true;
        }
    });
