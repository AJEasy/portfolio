function restrict(elem){
			var tf = _(elem);
			var rx = new RegExp;
			if(elem == "contact-email"){
				rx = /[' "]/gi;
			} else if(elem == "contact-name"){
				rx = /[^a-z0-9]/gi;
			}
			tf.value = tf.value.replace(rx, "");
		}
		function emptyElement(x){
			_(x).innerHTML = "";
		}
		function signup(){
					var u = _("contact-name").value;
					var e = _("contact-email").value;
					var m = _("contact-message").value;
					var status = _("status");
				if(u == "" || e == "" || m == ""){
					status.innerHTML = "Fill out all of the form data";
				} else {
					_("signupbutton").style.display = "none";
				status.innerHTML = 'please wait ...';
				var ajax = ajaxObj("POST", "mailer.php");
				ajax.onreadystatechange = function(){
					if(ajaxReturn(ajax) == true){
						if(ajax.responseText != "signup_success"){
							status.innerHTML = ajax.responseText;
							_("signupbutton").style.display = "block";		
						} else {
							_("signupbutton").style.display = "none"; 
						}
					}
				}
				ajax.send("u="+u+"&e="+e+"&m="+m);
			}
		}