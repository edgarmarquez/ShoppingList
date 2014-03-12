
$(document).ready(function(){
 //entering items to list and clearing text field
$("button").on('click', function(){
var txtval = $('#input').val();
if(txtval == 0){
	alert('Please Enter items');
}else{
var list = $(".list");
var html = $('<p class = "items" style="display:block">' + txtval + '<button class ="delete"></button></p>');
list.prepend(html.fadeIn(2000));
 $('#input').val('');
}
 });

//entering items to list using "Enter"
$("#input").keypress(function(event){
   if(event.keyCode == 13){
 var txtval = $('#input').val();
 var list = $(".list");
 var html = $('<p class = "items" style="display:block">' + txtval + '<button class ="delete"></button></p>');
}if(txtval == 0){
 alert('Please Enter items')
}else{
list.prepend(html.fadeIn(2000));
 $('#input').val('');
 
	}
});


//deleting items
$(document).on("click", ".delete", function(){
   $(this).closest(".items").fadeOut(1000);
});

});





 
 

