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


$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});


$(".fa fa-hourglasss").click(function(){
	$("input[type='text'").fadeToggle()
});