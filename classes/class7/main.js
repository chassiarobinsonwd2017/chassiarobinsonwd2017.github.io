$(function(){
    var invisible = true;
    var myRight ="20px";

    $("#clickme").on("click",function(){
        $("#menu").animate(
           {right: myRight},
            {queue: false,duration:500,easing:"linear"}

            );

        if(invisible){
            myRight="-100px";
            invisible=false;
        }else{
            myRight="28px";
            invisible=true;
        }
    });

    $("#myform").submit(function(e){
        e.preventDefault();
    });

    $("colour_red").prop("checked",true);
    $("input[name='myage']").val("18");
       //alert("the value is"+$(this).val();
    $(this).next().css("colour"$(this).val();)
    var s ="50";
    var l ="50";
    $("mycircle").css("background","hsl("+h+","+s+","+l+","+a+"%))
});
