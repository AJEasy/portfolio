<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../favicon.ico">
	<title><?php include('includes/page-eles/title.php'); ?></title>
	<link href="css/portfolio.css" rel="stylesheet">
	<link href="css/pages.css" rel="stylesheet">
	<link href="css/jquery.fancybox.css" rel="stylesheet">
	<link href="fonts/font-awesome.min.css" rel="stylesheet">
	<link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css" rel="stylesheet">
	<script>
		window.addEventListener("load",function(){
			var load_screen = document.getElementById("load_screen");
			document.body.removeChild(load_screen);
		});
	</script>
	<script src="js/ajax.js"></script>
	<script src="js/main.js"></script>
	<script src="js/contact.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
	<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
  </head>
  <body>
  <div id="load_screen"><div id="loading">loading...</div></div>
	<?php include('includes/page-eles/globalnav.php'); ?>
	<?php include('includes/bodycontent.php'); ?>
	<?php include('includes/page-eles/footer.php'); ?>
	<script src="js/smoothup.js"></script>
	<script src="js/portfolio.min.js"></script>
	<script src="js/ie10-viewport-bug-workaround.js"></script>
	<script src="js/engine.js"></script>
	<script src="js/jquery.fancybox.min.js"></script>
  </body>  
</html>	
	
