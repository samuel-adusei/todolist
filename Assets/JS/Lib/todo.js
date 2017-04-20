// check off specific todo by clicking 

$("ul").on("click" ,"li",function() { //effects all "Li"
	$(this).toggleClass("completed"); //this adds an event and link it to the class
}); 	// this allows a line when you click on a todo is shows a gray line 
	
//click on x to delete

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500,function(){
	//the parent puts brings it to the li
	$(this).remove();
	//this allows it to fadeOut 
	});
	event.stopPropagation();
	//this stops the system like a loop
});


$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		//grabbing new todoText from input
		var todoText = $(this).val();
		//create a new li and add to ul
		$(this).val("");
		//allows it to change to strring 
$("ul").append("<li><span>X</span>"	 + todoText + "</li>")
}
});
