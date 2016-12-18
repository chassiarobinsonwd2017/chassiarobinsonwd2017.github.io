$(function(){
7

8     var invisible = true;
9     var myRight = "20px";
10

11     $(".hamburger").on("click", function(){
12         $("main").animate(
13             {right: myRight},
14             {queue: false, duration: 500, easing: "linear"}
15

16         );
17

18         if (invisible){
19             myRight = "-100px";
20             invisible = false;
21         }else{
22             myRight = "20px";
23             invisible = true;
24         }
25     });
26

