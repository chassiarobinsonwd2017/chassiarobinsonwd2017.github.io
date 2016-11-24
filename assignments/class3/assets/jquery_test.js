$(function(){

    var myFooter = $("#footerDiv");
    var footer = $("footer");


 footer.on("mouseenter", function(){
     myFooter.fadeIn();
 }).on("mouseleave", function(){
     myFooter.fadeOut();

 });

});

