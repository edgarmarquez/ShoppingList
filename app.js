
$(document).ready(function(){
 //entering items to list and clearing text field
$("button").on('click', function(){
var txtval = $('#input').val();
if(txtval == 0){
	alert('Please Enter items first');
}else{
var list = $(".list");
list.append('<p class = "items" style="display:block">' + txtval + '<button class ="delete"></button></p>');//FadeIn doesn't work.
 $('#input').val('');
}
 });

//entering items to list using "Enter"
$("#input").keypress(function(event){
   if(event.keyCode == 13){
 var txtval = $('#input').val();
 var list = $(".list");
list.append('<p class = "items" style="display:block">' + txtval + '<button class ="delete"></button></p>');//FadeIn doesn't work.
 $('#input').val('');
 
	}
});


//deleting items
$(document).on("click", ".delete", function(){
   $(this).closest(".items").fadeOut(1000);
});

});





 
 

