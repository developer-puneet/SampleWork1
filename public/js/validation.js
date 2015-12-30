$(document).ready(function(){
	$("#firstname").keyup(function(){
		var fname = $(this).val();
		var characterReg = /^([a-zA-Z]+)$/;	
		if(fname != ""){
			$("#firstname").css("background-color","#ffffff");
			if(!characterReg.test(fname)){
				$("#fnamel").html("Letters Only");
				$("#fnamel").css("color","red");
			}else{
				$("#fnamel").html("");
			}
		}else{
			$("#fnamel").html("");
		}				
	});
	$("#lastname").keyup(function(){
		var lname = $(this).val();
		var characterReg = /^([a-zA-Z]+)$/;	
		if(lname != ""){
			$("#lastname").css("background-color","#ffffff");
			if(!characterReg.test(lname)){
				$("#lnamel").html("Letters Only");
				$("#lnamel").css("color","red");
			}else{
				$("#lnamel").html("");
			}
		}else{
				$("#lnamel").html("");
		}
	});
	$("#email").keyup(function(){
		var email = $(this).val();
		var characterReg = /^([a-zA-Z0-9_.+-])+\@(gmail\.)+(com)+$/;
		if(email != ""){
			$("#email").css("background-color","#ffffff");
			if(!characterReg.test(email)){
				$("#emaill").html("Only Gmail Users");
				$("#emaill").css("color","red");
			}else{
				$("#emaill").html("");
			}
		}else{
			$("#emaill").html("");
		}		
	});
	$("#rusername").keyup(function(){
		var uname = $(this).val();
		var characterReg = /^([a-zA-Z0-9_.+-])+$/;
		if(uname != ""){
			$("#rusername").css("background-color","#ffffff");
			if(!characterReg.test(uname)){
				$("#runamel").html("Invalid Username");
				$("#runamel").css("color","red");
			}else{
				$("#runamel").html("");
			}
		}else{
				$("#runamel").html("");
		}
	});
	$("#rpassword").keyup(function(){
		var pass = $(this).val();
		var characterReg = /^([a-zA-Z0-9_.+-@])+$/;
		if(pass != ""){
			$("#rpassword").css("background-color","#ffffff");
			if(!characterReg.test(pass)){
				$("#rpassl").html("Invalid Password");
				$("#rpassl").css("color","red");
			}else{
				$("#rpassl").html("");
			}
		}else{
				$("#rpassl").html("");
		}
	});
	$("#repassword").keyup(function(){
		var pass1 = $("#rpassword").val();
		var pass2 = $(this).val();
		//var characterReg = /^([a-zA-Z0-9_.+-@])+$/;
		if(pass2 != ""){
			$("#repassword").css("background-color","#ffffff");
			if(pass1 == ""){
				$("#repassl").html("Fill Password First");
			}else{
				$("#repassl").html("");
				if(pass2 != pass1){
					$("#repassl").html("Password Must Match");
				}				
			}
		}else{
			$("#repassl").html("");
		}		
	});
	$("#gender").on("change",function(){
		$("#gender").css("background-color","#ffffff");
		$("#genderl").html("");
	});
	$("#dob").on("change",function(){
		$("#dob").css("background-color","#ffffff");
		$("#dobl").html("");	
	});

	$("#memusername").keyup(function(){
		var uname = $(this).val();
		var characterReg = /^([a-zA-Z0-9_.+-])+$/;
		if(uname != ""){
			$("#memusername").css("background-color","#ffffff");
			if(!characterReg.test(uname)){
				$("#unamel").html("Invalid Username");
				$("#unamel").css("color","red");
			}else{
				$("#unamel").html("");
			}
		}else{
				$("#unamel").html("");
		}
	});

	$("#mempassword").keyup(function(){
		var pass = $(this).val();
		var characterReg = /^([a-zA-Z0-9_.+-@])+$/;
		if(pass != ""){
			$("#repassworddiv").show();
			$("#mempassword").css("background-color","#ffffff");
			if(!characterReg.test(pass)){
				$("#passl").html("Invalid Password");
				$("#passl").css("color","red");
			}else{
				$("#passl").html("");
			}
		}else{
			$("#repassworddiv").hide();
			$("#passl").html("");
		}
	});

	$("#re-password").keyup(function(){
		var pass1 = $("#mempassword").val();
		var pass2 = $(this).val();
		//var characterReg = /^([a-zA-Z0-9_.+-@])+$/;
		if(pass2 != ""){
			$("#re-password").css("background-color","#ffffff");
			if(pass1 == ""){
				$("#re-passl").html("Fill Password First");
				$("#re-passl").css("color","red");
			}else{
				$("#re-passl").html("");
				if(pass2 != pass1){
					$("#re-passl").html("Password Must Match");
					$("#re-passl").css("color","red");
				}				
			}
		}else{
			$("#re-passl").html("");
		}		
	});
});