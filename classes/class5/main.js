$(funtion(){

  var $myNavItem = $("nav >ul>li");
  var $myDropDown=$myNavItem.find("div");


  $myNavItem.on("mouseover",function(){

      $(this).find("div").slideToggle();

  }).on("mouseleave",function(){
      $(this).find("div").slideToggle();
  });





  });
