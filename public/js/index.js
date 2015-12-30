$(document).ready(function(){

	function login(){
		var username = $("#username").val();
		var password = $("#password").val();
		$.ajax({
			url : "app/views/controls.php",
			type : "POST",
			data : "user=l&uname=" + username + "&pass=" + password,
			success : function(msg){
				if(msg > 0){
					window.location="app/views/member.php?uid=" + msg;
				}else{					
					$("#myModal").modal("show");
					$(".modal-title").css("color","#ff0000")
					$("#err").html("Invalid User");
				}				
			}						
		});
	}

	$(document).keypress(function(e){
		var key = e.which;
		if(key == 13){
			login();
		}
	});	

	$("#loginbtn").click(function(e){
		e.preventDefault();
		login();				
	});
	
	$("#signup").click(function(){
		$("#logindiv").hide(500,function(){
			$("#signupdiv").show(500);
			$("#firstname").val("");
			$("#lastname").val("");
			$("#email").val("");
			$("#gender").val("0");
			$("#dob").val("");
			$("#rusername").val("");
			$("#rpassword").val("");
			$("#repassword").val("");
		});		
	});
	$("#login").click(function(){
		$("#signupdiv").hide(500,function(){
			$("#logindiv").show(500);
		});		
	});

	function signUp(){
		if($("#firstname").val() != "" && $("#fnamel").text() == ""){			
			if($("#lastname").val() != "" && $("#lnamel").text() == ""){
				if($("#email").val() != "" && $("#emaill").text() == ""){
					if($("#gender").val() != "0"){
						if($("#dob").val() != ""){
							if($("#rusername").val() != "" && $("#runame").text() == ""){
								if($("#rpassword").val() != "" && $("#rpassl").text() == ""){
									if($("#repassword").val() != "" && $("#repassl").text() == ""){
										var fname = $("#firstname").val();
										var lname = $("#lastname").val();
										var email = $("#email").val();
										var gender = $("#gender").val();
										var dob = $("#dob").val();
										var uname = $("#rusername").val();
										var pass = $("#rpassword").val();
										$.ajax({
											url : "app/views/controls.php",
											type : "POST",
											data : "user=r&fname=" + fname + "&lname=" + lname +
											"&email=" + email + "&gender=" + gender + "&dob=" +
											dob + "&uname=" + uname + "&pass=" + pass,
											success : function(msg){
												if(msg < 1){
													$("#myModal").modal("show");
													$(".modal-title").css("color","#ff0000")
													$("#err").html("User Already Exists");
													//$("#err").css("color","red");
												}else{
													$("#myModal").modal("show");
													$(".modal-title").css("color","#009933")
													$("#err").html("Account Created<br/><h4>Please Login to Continue</h4>");
													//$("#err").css("color","red");
												}
											}
										});
									}else{
										$("#repassword").css("background-color","#ffb3b3");
										if ($("#repassl").text() == "") {
											$("#repassl").html("Enter Password");
											$("#repassl").css("color","red");
										}
									}
								}else{
									$("#rpassword").css("background-color","#ffb3b3");
									if ($("#rpassl").text() == "") {
										$("#rpassl").html("Enter Password");
										$("#rpassl").css("color","red");
									}
								}
							}else{
								$("#rusername").css("background-color","#ffb3b3");
								if ($("#runamel").text() == "") {
									$("#runamel").html("Enter Username");
									$("#runamel").css("color","red");
								}
							}
						}else{
							$("#dob").css("background-color","#ffb3b3");
							$("#dobl").html("Enter DOB");
							$("#dobl").css("color","red");
						}
					}else{
						$("#gender").css("background-color","#ffb3b3");
						$("#genderl").html("Select Gender");
						$("#genderl").css("color","red");
					}
				}else{
					$("#email").css("background-color","#ffb3b3");
					if ($("#emaill").text() == "") {
						$("#emaill").html("Enter Email");
						$("#emaill").css("color","red");
					}					
				}
			}else{
				$("#lastname").css("background-color","#ffb3b3");
				if ($("#lnamel").text() == "") {
					$("#lnamel").html("Enter Lastname");
					$("#lnamel").css("color","red");
				}				
			}			
		}else{
			$("#firstname").css("background-color","#33ff99");
			if($("#fnamel").text() == ""){
				$("#fnamel").html("Enter Firstname");
				$("#fnamel").css("color","red");
			}			
		}
	}

	$("#regbtn").click(function(e){
		e.preventDefault();
		
	});
	$("#modalclose").click(function(){
		var alertval = $("#err").text();
		if(alertval == "User Already Exists"){
			$("#email").css("background-color","#ffb3b3");
		}else{
			$("#signupdiv").fadeOut(500,function(){
				$("#logindiv").fadeIn(500);
			});
		}
	});
});
