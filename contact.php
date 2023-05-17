<?php
if(isset($_POST['email'])) {

    $email_to = "ralphkocken@gmail.com";
    $email_subject = "plant swap contact";

    function died($error) {
        echo "Het spijt me zeer, maar er zijn fout(en) gevonden met het formulier dat u heeft ingediend. neem contact met mij via email hello@buurtcampusoost.nl.  " ;

        echo $error."<br /><br />";

        die();
    }


    if(!isset($_POST['first_name']) ||
        !isset($_POST['last_name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['comments'])) {
        died('Het spijt me, maar er lijkt een probleem te zijn met het formulier dat u heeft ingediend.');
    }



    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email_from = $_POST['email'];

    $comments = $_POST['comments'];

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'Het e-mailadres dat u heeft ingevoerd, lijkt niet geldig te zijn.<br />';
  }

    $string_exp = "/^[A-Za-z .'-]+$/";

  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'De voornaam die u heeft ingevoerd, lijkt niet geldig te zijn.<br />';
  }

  if(!preg_match($string_exp,$last_name)) {
    $error_message .= 'De achternaam die u heeft ingevoerd, lijkt niet geldig te zijn.<br />';
  }

  if(strlen($comments) < 2) {
    $error_message .= 'De opmerkingen die u heeft ingevoerd, lijken niet geldig te zijn.<br />';
  }

  if(strlen($error_message) > 0) {
    died($error_message);
  }

    $email_message = "Form details Plant swap.\n\n";


    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }



    $email_message .= "First Name: ".clean_string($first_name)."\n";
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";

$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);
?>

<?php
 header('location: index.ejs');
?>

<?php

}
?>
