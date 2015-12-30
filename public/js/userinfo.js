$(document).ready(function(){
	var fname = $("#fnamehdn").val().toUpperCase();
	var lname = $("#lnamehdn").val().toUpperCase();
	$("#membername").html(fname + "&nbsp;" +lname);
	$("#logout").click(function(){
		window.location = "../../index.php";
	});
	$("#collapse1").on('show.bs.collapse',function(){
		$("#editbasicinfo").show();
	});
	$("#collapse1").on('hide.bs.collapse',function(){
		$("#editbasicinfo").hide();
		hideBasicInfoTextBoxes();
	});
	$("#collapse2").on('show.bs.collapse',function(){
		$("#editlogininfo").show();
	});
	$("#collapse2").on('hide.bs.collapse',function(){
		$("#editlogininfo").hide();
		hideLoginInfoTextBoxes();
	});
	$("#collapse2").on('hidden.bs.collapse',function(){
		$("#collapse1").collapse('show');
	});
	$("#collapse1").on('hidden.bs.collapse',function(){
		$("#collapse2").collapse('show');
	});
	$("#collapse1").on('shown.bs.collapse',function(){
		$("#collapse2").collapse('hide');
	});
	$("#collapse2").on('shown.bs.collapse',function(){
		$("#collapse1").collapse('hide');
	});
	$("#editbasicinfo").click(function(){
		$(this).hide();
		$("#userfname,#userlname,#useremail,#usergender,#userdob").hide();
		$("#firstname,#lastname,#email,#gender,#dob,#editbasicinfodiv").show();
		$("#firstname").val($("#userfname").text());
		$("#lastname").val($("#userlname").text());
		$("#email").val($("#useremail").text());		
		var gender = $("#useremail").text();
		if(gender = "MALE"){
			$("#gender").val("1");
		}else{
			$("#gender").val("2");
		}
		var dob = $("#userdob").text();
		$("#dob").val(dob);
		$("#basicinfoform").css("margin-top","2%");
	});

	$("#editlogininfo").click(function(){
		$(this).hide();
		$("#loginusername,#loginpassword").hide();
		$("#memusername,#mempassword,#editlogindetailsdiv").show();
		$("#memusername").val($("#loginusername").text());
		$("#mempassword").val($("#loginpassword").text());
		$("#logininfoform").css("margin-top","2%");
	});

	function hideBasicInfoTextBoxes(){
		$("#firstname,#lastname,#email,#gender,#dob,#editbasicinfodiv").hide();
		$("#userfname,#userlname,#useremail,#usergender,#userdob").show();
		$("#fnamel").html("");
		$("#lnamel").html("");
		$("#emaill").html("");
		$("#genderl").html("");
		$("#dobl").html("");
	}

	function hideLoginInfoTextBoxes(){
		$("#loginusername,#loginpassword").show();
		$("#memusername,#mempassword,#editlogindetailsdiv,#repassworddiv").hide();
		$("#unamel").html("");
		$("#passl").html("");
		$("#re-passl").html("");
	}

	$("#cancelbasicinfobtn").click(function(e){
		e.preventDefault();
		hideBasicInfoTextBoxes();
		$("#editbasicinfo").show();
	});

	$("#cancellogindetailsbtn").click(function(e){
		e.preventDefault();
		hideLoginInfoTextBoxes();
		$("#editlogininfo").show();
	});	

	$("#editbasicinfobtn").click(function(e){
		e.preventDefault();
		if($("#firstname").val() != "" && $("#fnamel").text() == ""){			
			if($("#lastname").val() != "" && $("#lnamel").text() == ""){
				if($("#email").val() != "" && $("#emaill").text() == ""){
					if($("#gender").val() != "0"){
						if($("#dob").val() != ""){
							if($("#loginusername").text() != "" && $("#unamel").text() == ""){
								if($("#loginpassword").text() != "" && $("#passl").text() == ""){
									e.preventDefault();
									var uid = $("#uidhdn").val();
									var fname = $("#firstname").val();
									var lname = $("#lastname").val();
									var email = $("#email").val();
									var gender = $("#gender").val();
									var dob = $("#dob").val();
									var uname = $("#loginusername").text();
									var pass = $("#loginpassword").text();
									$.ajax({
										url : "controls.php",
										type : "POST",
										data : "user=edit&editinfo=bi&uid=" + uid + "&fname=" + fname + "&lname=" + lname +
										"&email=" + email + "&gender=" + gender + "&dob=" +
										dob + "&uname=" + uname + "&pass=" + pass,
										success : function(msg){
												location.reload();
										}
									});									
								}else{
								}
							}else{
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
	});

	$("#editlogindetailsbtn").click(function(e){
		e.preventDefault();
		if($("#memusername").val() != "" && $("#unamel").text() == ""){
			if($("#mempassword").val() != "" && $("#passl").text() == ""){
				if($("#re-passl").text() == ""){
					var uid = $("#uidhdn").val();
					var fname = $("#firstname").val();
					var lname = $("#lastname").val();
					var email = $("#email").val();
					var gender = $("#gender").val();
					var dob = $("#userdob").text();
					var uname = $("#memusername").val();
					var pass = $("#mempassword").val();
					$.ajax({
						url : "controls.php",
						type : "POST",
						data : "user=edit&editinfo=li&uid=" + uid + "&fname=" + fname + "&lname=" + lname +
						"&email=" + email + "&gender=" + gender + "&dob=" +
						dob + "&uname=" + uname + "&pass=" + pass,
						success : function(msg){
							location.reload();
						},
						complete : function(){
							
						}
					});
				}else{
					$("#re-password").css("background-color","#ffb3b3");
					if ($("#re-passl").text() == "") {
						$("#re-passl").html("Enter Password");
						$("#re-passl").css("color","red");
					}
				}
			}else{
				$("#mempassword").css("background-color","#ffb3b3");
				if ($("#passl").text() == "") {
					$("#passl").html("Enter Password");
					$("#passl").css("color","red");
				}
			}
		}else{
			$("#memusername").css("background-color","#ffb3b3");
			if ($("#unamel").text() == "") {
				$("#unamel").html("Enter Username");
				$("#unamel").css("color","red");
			}
		}
	});
});