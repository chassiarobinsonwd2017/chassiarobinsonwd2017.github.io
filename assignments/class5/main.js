$(function(){


    var invisible = true;
    var right = "100px";


     $(" .hamburger").on("click", function(){
        $("nav").animate(
            {right: rightight},
            {queue: false, duration: 500, easing: "linear"}


       );


        if (invisible){
            right = "-100px";
            invisible = false;
        }else{
            right = "100px";
    invisible = true;

        }
     });





