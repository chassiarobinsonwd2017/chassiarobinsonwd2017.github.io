$(function(){


    var invisible = true;
    var right = "730px";


     $("#about").on("click", function(){
        $("#dropdown").animate(
            {right: right},
            {queue: false, duration: 500, easing: "linear"}


       );


        if (invisible){
            right = "-500px";
            invisible = false;
        }else{
            right = "730px";
    invisible = true;

        }
     });

});
