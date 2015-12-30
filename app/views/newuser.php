<div class="container-fluid">
	<div class="row" id="signupdiv" style = "display:none">
		<div class="col-sm-3">		
		</div>
		<div class="col-sm-6" style="">
			<div class="row">
				<div class="col-sm-12 text-center">
					<h3><b>New User</b></h3>
				</div>				
			</div>
			<form class="form-horizontal" autocomplete = "off" role="form" style="margin-top:3%">
				<div class="form-group">
					<label class="control-label col-sm-offset-2 col-sm-2" for="firstname">FIRSTNAME:</label>
					<div class="col-sm-5">
						<input type="text" class="form-control" style="text-transform : uppercase" id="firstname" placeholder="Enter Firstname">
					</div>
					<label id="fnamel" class="control-label col-sm-3"></label>
				</div>
				<div class="form-group">
					<label class="control-label col-sm-offset-2 col-sm-2" for="lastname">LASTNAME:</label>
					<div class="col-sm-5">
						<input type="text" class="form-control" style="text-transform : uppercase" id="lastname" placeholder="Enter Lastname">
					</div>
					<label id="lnamel" class="control-label col-sm-3"></label>
				</div>
				<div class="form-group">
					<label class="control-label col-sm-offset-2 col-sm-2" for="email">EMAIL:</label>
					<div class="col-sm-5">
						<input type="email" class="form-control" id="email" placeholder="Enter Email">
					</div>
					<label id="emaill" class="control-label col-sm-3"></label>
				</div>
				<div class="form-group">
					<label class="control-label col-sm-offset-2 col-sm-2" for="gender">GENDER:</label>
					<div class="col-sm-5">
						<select class="form-control" id="gender" placeholder="Select Gender">
							<option value="0">Select Gender</option>
							<option value="1">Male</option>
							<option value="2">Female</option>
						</select>
						<!-- <input type="email" class="form-control" id="email" placeholder="Enter Email"> -->
					</div>
					<label id="genderl" class="control-label col-sm-3"></label>
				</div>
				<div class="form-group">
					<label class="control-label col-sm-offset-2 col-sm-2" for="dof">D.O.B:</label>
					<div class="col-sm-5">
						<input type="date" class="form-control" id="dob">
					</div>
					<label id="dobl" class="control-label col-sm-3"></label>
				</div>
				<div class="form-group">
					<label class="control-label col-sm-offset-2 col-sm-2" for="username">USERNAME:</label>
					<div class="col-sm-5">
						<input type="text" class="form-control" id="rusername" placeholder="Enter Username">
					</div>
					<label id="runamel" class="control-label col-sm-3"></label>
				</div>
				<div class="form-group">
					<label class="control-label col-sm-offset-2 col-sm-2" for="password">PASSWORD:</label>
					<div class="col-sm-5">
						<input type="password" class="form-control" id="rpassword" placeholder="Enter Password">
					</div>
					<label id="rpassl" class="control-label col-sm-3"></label>
				</div>
				<div class="form-group">
					<label class="control-label col-sm-offset-1 col-sm-3" for="repassword">RE-PASSWORD:</label>
					<div class="col-sm-5">
						<input type="password" class="form-control" id="repassword" placeholder="Enter Password">
					</div>
					<label id="repassl" class="control-label col-sm-3"></label>
				</div>
				<div class="form-group">
					<label id="errreg" class="control-label  col-sm-offset-4 col-sm-3"></label>					
					<div class="col-sm-2">
						<button id="regbtn" type="submit" class="btn btn-default" style="float:right">Register</button>
					</div>
				</div>
				<label class="control-label col-sm-3"></label>
			</form>
		</div>
		<div class="col-sm-3">					
		</div>		
	</div>
	<div class="row" style="height:30px"></div>
</div>	
	
