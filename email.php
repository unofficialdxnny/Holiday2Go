<?php

$first_name = $_POST['fname']
$last_name = $_POST['lname']
$email = $_POST['email'];

?>



<?php
	$email_from = 'ahmeddanial324@gmail.com';

	$email_subject = "Holiday2Go Booking";

	$email_body = "You have received a new message from the user $name.\n".
                            "Here is the message:\n $message".
?>


<?php

  $to = "$email";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $visitor_email \r\n";

  mail($to,$email_subject,$email_body,$headers);

 ?>