 $(function(){
2     var $theForm = $("#contact_form");
3     $theForm.submit(function(e){
4         e.preventDefault();
5         var form_data = $theForm.serialize();
6

7         $.ajax(
8             {type: 'POST', url: $theForm.attr("action"), data: form_data}
9         ).done(function(response){
10             $theForm.html("<h2>"+response+"</h2>");
11         }).fail(function(response){
12             $theForm.append("<h2>"+response+"</h2>");
13         });
14     });
15

16

17 });
