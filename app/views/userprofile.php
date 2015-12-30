<div class="container-fluid">
	<div class="row">
		<div class="col-sm-3"></div>
		<div class="col-sm-6">
			<div class="panel-group" id="accordion">
				<div class="panel panel-default" style="background-color : #ffe8cc">
					<div class="panel-heading" style="background-color : #4d4d4d;color : #ffffff">
						<div class="row">
							<div class="col-sm-10">
								<h4 class="panel-title">
									<a data-toggle="collapse" data-parent="#accordion" href="#collapse1" style="text-decoration : none">
										<b>Basic Info</b>
									</a>
								</h4>
							</div>
							<div class="col-sm-2">
								<h4 class="panel-title">
									<a id="editbasicinfo" data-parent="#accordion" href="#" style="text-decoration : none">
										<b>Edit</b>
									</a>
								</h4>
							</div>
						</div>						
					</div>
					<div id="collapse1" class="panel-collapse collapse in">
						<form id = "basicinfoform" class="form-horizontal" autocomplete = "off" role="form" style="">
							<div class="form-group">								
								<label class="control-label col-sm-offset-2 col-sm-2" for="firstname">FIRSTNAME:</label>
								<div class="col-sm-5">
									<label id = "userfname" class="control-label" for="firstname" style="text-transform : uppercase"><?php echo $result['FIRSTNAME']; ?></label>
									<input type="text" class="form-control" style="text-transform : uppercase;display : none" id="firstname" placeholder="Enter Firstname">
								</div>
								<label id="fnamel" class="col-sm-3"></label>																
							</div>
							<div class="form-group">
								<label class="control-label col-sm-offset-2 col-sm-2" for="lastname">LASTNAME:</label>
								<div class="col-sm-5">
									<label id = "userlname" class="control-label" for="lastname" style="text-transform : uppercase"><?php echo $result['LASTNAME']; ?></label>
									<input type="text" class="form-control" style="text-transform : uppercase;display : none" id="lastname" placeholder="Enter Lastname">
								</div>
								<label id="lnamel" class="col-sm-3"></label>
							</div>
							<div class="form-group">
								<label class="control-label col-sm-offset-2 col-sm-2" for="email">EMAIL:</label>
								<div class="col-sm-5">
									<label id = "useremail" class="control-label" for="email"><?php echo $result['EMAIL']; ?></label>
									<input type="email" class="form-control" style="display : none" id="email" placeholder="Enter Email">
								</div>
								<label id="emaill" class="col-sm-3"></label>
							</div>
							<div class="form-group">
								<label class="control-label col-sm-offset-2 col-sm-2" for="gender">GENDER:</label>
								<div class="col-sm-5">
									<label id = "usergender" class="control-label" for="gender">
										<?php 
											$gen = $result['GENDER'];
											if($gen = 1){
												echo "MALE";
											}else{
												echo "FEMALE";
											}
										 ?>
									</label>
									<select class="form-control" style="display : none" id="gender" placeholder="Select Gender">
										<option value="0">Select Gender</option>
										<option value="1">Male</option>
										<option value="2">Female</option>
									</select>
									<!-- <input type="email" class="form-control" id="email" placeholder="Enter Email"> -->
								</div>
								<label id="genderl" class="col-sm-3"></label>
							</div>
							<div class="form-group">
								<label class="control-label col-sm-offset-2 col-sm-2" for="dob">D.O.B:</label>
								<div class="col-sm-5">
									<label id = "userdob" class="control-label" for="dob"><?php echo $result['DOB']; ?></label>
									<input type="date" style="display : none" class="form-control" id="dob">
								</div>
								<label id="dobl" class="col-sm-3"></label>
							</div>							
							<div id = "editbasicinfodiv" class="form-group" style="display : none">
								<label id="errreg" class="control-label  col-sm-offset-2 col-sm-2"></label>					
								<div class="col-sm-5">
									<button id="cancelbasicinfobtn" type="submit" class="btn btn-danger btn-sm" style="float:right">Cancel</button>
									<button id="editbasicinfobtn" type="submit" class="btn btn-primary btn-sm" style="float:left">Edit info</button>									
								</div>
							</div>
						</form>				      
    				</div>
				</div>
				<div class="panel panel-default"  style="background-color : #ffe8cc">
					<div class="panel-heading" style="background-color : #4d4d4d;color : #ffffff">
						<div class="row">
							<div class="col-sm-10">
								<h4 class="panel-title">
									<a data-toggle="collapse" data-parent="#accordion" href="#collapse2" style="text-decoration : none">
										<b>Login Details</b>
									</a>							
								</h4>
							</div>
							<div class="col-sm-2" style="disply : none">
								<h4 class="panel-title">
									<a id="editlogininfo" style="display : none" data-parent="#accordion" href="#" style="text-decoration : none">
										<b>Edit</b>
									</a>							
								</h4>
							</div>
						</div>						
					</div>
					<div id="collapse2" class="panel-collapse collapse">
						<form id="logininfoform" class="form-horizontal" role="form" style="">
		                  	<div class="form-group">
		                      	<label class="control-label col-sm-offset-2 col-sm-2" for="username">USERNAME:</label>
		                      	<div class="col-sm-5">
		                      		<label id = "loginusername" class="control-label" for="username"><?php echo $result['USERNAME']; ?></label>
		                        	<input type="text" style="display : none" class="form-control" id="memusername" placeholder="Enter Username">
		                      	</div>
		                      	<label id = "unamel" class="col-sm-3"></label>
		                  	</div>
		                  	<div class="form-group">
		                      	<label class="control-label col-sm-offset-2 col-sm-2" for="password">PASSWORD:</label>
		                      	<div class="col-sm-5">
		                      		<label id = "loginpassword" class="control-label" for="password"><?php echo $result['USERPASS']; ?></label>
		                        	<input type="password" style="display : none" class="form-control" id="mempassword" placeholder="Enter Password">
		                      	</div>
		                      	<label id = "passl" class="col-sm-3"></label>
		                  	</div>
		                  	<div class="form-group" id="repassworddiv" style="display : none">
		                      	<label class="control-label col-sm-offset-1 col-sm-3" for="password">RE-PASSWORD:</label>
		                      	<div class="col-sm-5">		                      		
		                        	<input type="password" class="form-control" id="re-password" placeholder="Enter Password">
		                      	</div>
		                      	<label id = "re-passl" class="col-sm-3"></label>
		                  	</div>
		                  	<div id="editlogindetailsdiv" class="form-group" style="display : none">
		                      	<label id="errlogin" class="control-label  col-sm-offset-2 col-sm-2"></label>         
		                      	<div class="col-sm-5">
		                        	<button id="editlogindetailsbtn" type="button" class="btn btn-primary btn-sm" style="float:left">Edit Info</button>
		                        	<button id="cancellogindetailsbtn" type="button" class="btn btn-danger btn-sm" style="float:right">Cancel</button>
		                      	</div>
		                  	</div>
                		</form> 				      
    				</div>
				</div>
			</div>
		</div>
		<div class="col-sm-3"></div>
	</div>
	<div class="row" style="height:45px"></div>
</div>