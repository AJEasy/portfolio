<?php
$section = '-1';

if(isset($_GET['section'])) {
	$section = $_GET['section'];
}


switch($section){
	case "-1":
        include('content/homepage.php');
        break;
	case "about":
        include('includes/content/about.php');
        break;
	case "pro":
        include('includes/content/professional.php');
        break;	
	case "art":
        include('includes/content/art.php');
        break;	
	case "print":
        include('includes/content/print.php');
        break;
	case "contact":
        include('includes/content/contact.php');
        break;
	case "cc":
        include('includes/content/cc.php');
        break;		
	default:
		include('content/homepage.php');
		break;

}
?>
