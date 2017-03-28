<div class="container">
	<div class="row topspace">
            <div class="col-sm-6 col-sm-offset-3 contact pd-top-bottom-small standardsp-mar-sm">
            	<img src="images/button.png" class="img-responsive pull-right contact-imgwidth"/>
            	<img src="images/button.png" class="img-responsive contact-imgwidth"/>
            	<h2>Contact Us</h2>
                <p class="pdsmall">If you have any additional questions, Contact Us!</p>
				<h3>Flywing Designs</h3>
						<p style="margin:0px;">Feel free to message or call us<br/>
                        (Mon-Fri 9:30am-6:30pm, Sat 10:30am-4:00pm)<br/>
						(704) 680-2243<br/>
						3116 FIFTH Street Winston Salem, NC 27408
						<br/>
                <img src="images/button.png" class="img-responsive pull-right contact-imgwidth"/>
            	<img src="images/button.png" class="img-responsive contact-imgwidth"/>
            </div>
    </div>
            
      <div class="row bottomspace">
        <div class="col-sm-6 col-sm-offset-3 contact pd-top-bottom-small bottomspacesmall">
			<div id="signupform">
				<fieldset>
							
					<div class="container-fluid standardsp">	
					<form name="contactform" id="contactform" onsubmit="return false;" enctype="multipart/form-data">
					
						<div class="form-group">
							<label for = "contact-name" class="col-lg-2 control-label">Name</label>
							<div class="col-lg-10">
								<input id="contact-name" type="text" class="form-control" onblur="checkusername()" onkeyup="restrict('username')"  placeholder="Full Name" maxlength="60">
							</div>
						</div>
						<div class="form-group">
							<label for = "contact-email" class="col-lg-2 control-label">E-Mail</label>
							<div class="col-lg-10">
								<input id="contact-email" type="text" class="form-control" onfocus="emptyElement('status')" onkeyup="restrict('email')" placeholder="you@example" maxlength="88">
							</div>
						</div>
						<div class="form-group">
							<label for = "contact-message" class="col-lg-2 control-label">Message</label>
							<div class="col-lg-10" style="margin-bottom:10px;">
								<textarea class="form-control" id="contact-message" onfocus="emptyElement('status')" name="message" rows="8"></textarea>
							</div>
						</div>
						
						<div class="footer">
						<button id="signupbutton" name="submit" class="pull-right colorblk" style="margin-right:15px;" onclick="signup()">Send Message</button>
						<span id="status"></span>
						</div>
					</form>
					</div>
				</fieldset>			
			</div>			
        </div>
	  </div>
</div>