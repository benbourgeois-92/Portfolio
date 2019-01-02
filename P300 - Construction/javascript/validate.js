

function feedback(){
	
	var contactform = document.getElementById("contactform");
	var name = contactform.name.value;
	var email = contactform.email.value;
	var phone = contactform.phone.value;
	var message = contactform.message.value;
	var success = true;
	

	if(!name){
		success = false;
		failure();
		
	}
	
	if(!email){
		success = false;
		failure();
		
	}
	
	if(!phone){
		success = false;
		failure();
		
	}
	
	if(!message){
		success = false;
		failure();
		
	}
	if(success){
		alert("Thank you, " + name);
	}
	$("nav").slideToggle();
	
	
	
	
	
}

function failure(){
	
	alert("Please enter something in each field before submitting.");
	
	
	
}