
$(document).ready(function(){

 //entering items to list and clearing text field//
$("button").on('click', function(){
var txtval = $('#input').val();
if(txtval == 0){
	alert('Please Enter items first');
}else{
var list = $(".list");
list.prepend('<p class = "items" style="display:block">' + txtval + '</p>').fadeIn(1000);//FadeIn doesn't work.
 $('#input').val('');
}
 });

//delete button displayed
$(".list").on('mouseenter', function(){
 //I'd like it to be displayed right next to the target item list. I tried $(this).
 //If entered more than one item, delete button shows next to the last 
 //item entered list regardless.
});

//deleting items
$(".delete").on("click", function(){//
 $(".delete, .list").fadeOut(1000);//It should delete the button and item next to it.
 //I don't think I could use $(".delete") because 
 //it would target ALL delete buttons.
});

});





 
 

