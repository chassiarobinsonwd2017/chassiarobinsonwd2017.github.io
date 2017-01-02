$(function(){


    var invisible = true;
    var right = "100px";


     $(".hamburger").on("click", function(){
        $("nav").animate(
            {right: right},
            {queue: false, duration: 500, easing: "linear"}


       );


        if (invisible){
            right = "-500px";
            invisible = false;
        }else{
            right = "100px";
    invisible = true;

        }
     });

});



