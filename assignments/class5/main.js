$(function(){


    var invisible = true;
    var myRight = "100px";


     $(".hamburger").on("click", function(){
        $("nav").animate(
            {right: myRight},
            {queue: false, duration: 500, easing: "linear"}


       );


        if (invisible){
            myRight = "-100px";
            invisible = false;
        }else{
            myRight = "100px";
    invisible = true;
        }
     });





