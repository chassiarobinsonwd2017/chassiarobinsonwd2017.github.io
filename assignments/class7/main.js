$(function(){

        var s = "50";
        var l = "50";


     var saturation= ("#slider1");
     var lightness= ("#slider2");
     var circle=("#circle");

    $saturation.on("mouseover", function(){
       $(circle).next().css("color",$(circle).val());

           {
                 $("#circle").css("background", "hsl(0, "+s+"%, "+l+"%)");
            }

        );

    })
     $saturation.on("mouseover", function(){
       $(circle).next().css("color",$(circle).val());

           {
                  $("#circle").data("color","hsl(0, "+s+"%, "+l+"%)");
            }

        );

    })

    });



