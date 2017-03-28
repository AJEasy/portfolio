<?php
	@ob_start();
	if(isset($_POST["u"])){
		$u = preg_replace('#[^a-z0-9]#i', '', $_POST['u']);
		$e = $_POST['e'];
		$m = $_POST['m'];
		
		if($u == "" || $e == "" || $m == ""){
			echo "The form submission is missing values.";
			exit();
		} else if (strlen($u) < 2 || strlen($u) > 60){
			echo "Username must be between 3 and 60 characters";
			exit();
		}
		
		require 'PHPMailer/PHPMailerAutoload.php';

			$mail = new PHPMailer;
			$email = "$e";
			$name = "$u";
			$message = "$m";
			
			$data = "Name: " . $name . "<br />" . "Email: " . $email . "<br />" . "Message: " . $message;
			
			//$mail->SMTPDebug = 3;                               // Enable verbose debug output

			$mail->isSMTP();                                      // Set mailer to use SMTP
			$mail->Host = 'gator3233.hostgator.com';  // Specify main and backup SMTP servers
			$mail->SMTPAuth = true;                               // Enable SMTP authentication
			$mail->Username = 'aje600@youinminddesigns.com';                 // SMTP username
			$mail->Password = 'Anthony6093';                           // SMTP password
			$mail->SMTPSecure = 'TLS';                            // Enable TLS encryption, `ssl` also accepted
			$mail->Port = 587;                                    // TCP port to connect to

			$mail->setFrom('info@qeaschools.com', 'QEA Info');
			$mail->addAddress('aje600@gmail.com', 'AJ Crump');     // Add a recipient
			$mail->addAddress('info@qeaschools.com', 'AJ Crump');
			$mail->addAddress($email);               // Name is optional
			$mail->addReplyTo('info@qeaschools', 'Client Information');
			$mail->addCC('cc@example.com');
			$mail->addBCC('bcc@example.com');

			//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
			//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
			$mail->isHTML(true);                                  // Set email format to HTML

			$mail->Subject = 'Website Message!!!';
			$mail->Body    = $data;
			$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

			if(!$mail->send()) {
				echo 'Message could not be sent.';
				echo 'Mailer Error: ' . $mail->ErrorInfo;
			} else {
				echo 'Thank you '.$u.', we will respond back to <u>'.$e.'</u> soon.';
			}
			
			exit();			
	}
?>
