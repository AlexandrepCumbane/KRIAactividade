<?php  
use PHPMailer\PHPMailer\PHPMailer;

try{
  

    function enviarEmail($phone, $mensagem, $assunto,$nome,$to){
    require "php/PHPMailer/PHPMailer.php";
    require "php/PHPMailer/SMTP.php";
    require "php/PHPMailer/Exception.php";
        
                
        $subject = $assunto;
        $name=$nome;
        $message = $mensagem;
		$to='lanelangly@gmail.com';

        $email = new PHPMailer();
        //die($_REQUEST['message']); 
        $email->SMTPDebug = 0; 
        $email->IsSMTP();
        $email->IsHTML(true);
        $email->Charset = 'UTF-8';
        $email->SMTPAuth = true;
        
        $email->SMTPSecure = 'ssl';
        $email->Host = 'smtp.gmail.com';
        //port 465 || port 25 || port 143  \
        
        $email->Port =  465;
        $email->Username = 'lanelangly@gmail.com';
        $email->Password = 'Kujay99999';
        $email->From = "lanelangly@gmail.com";
        $email->FromName = "FORMULARIO DE CONTACTOS";
        $email->Subject = $subject;
        //Message Content

        $email->Body = utf8_decode('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
        
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Formulário de clientes</title>
        <style type="text/css">
        body {margin: 0; padding: 0; min-width: 100%!important;}
        img {height: auto;}
        .content {width: 100%; max-width: 600px;}
        .header {padding: 40px 30px 20px 30px;}
        .innerpadding {padding: 30px 30px 30px 30px;}
        .borderbottom {border-bottom: 1px solid #f2eeed;}
        .subhead {font-size: 15px; color: #ffffff; font-family: sans-serif; letter-spacing: 10px;}
        .bodycopy {color: #153643; font-family: sans-serif;}
        .h1 {color: #ffffff; font-family: sans-serif;}
        .h2 {color: rgb(168,0,0); font-family: sans-serif;}
        .h1 {font-size: 33px; line-height: 38px; font-weight: bold;}
        .h2 {padding: 0 0 15px 0; font-size: 24px; line-height: 28px; font-weight: bold;}
        .bodycopy {font-size: 16px; line-height: 22px;}
        .button {text-align: center; font-size: 18px; font-family: sans-serif; font-weight: bold; padding: 0 30px 0 30px;}
        .button a {color: #ffffff; text-decoration: none;}
        .footer {padding: 20px 30px 15px 30px;}
        .footercopy {font-family: sans-serif; font-size: 14px; color: #ffffff;}
        .footercopy a {color: #ffffff; text-decoration: underline;}
        
        @media only screen and (max-width: 550px), screen and (max-device-width: 550px) {
        body[yahoo] .hide {display: none!important;}
        body[yahoo] .buttonwrapper {background-color: transparent!important;}
        body[yahoo] .button {padding: 0px!important;}
        body[yahoo] .button a {background-color: #e05443; padding: 15px 15px 13px!important;}
        body[yahoo] .unsubscribe {display: block; margin-top: 20px; padding: 10px 50px; background: #2f3942; border-radius: 5px; text-decoration: none!important; font-weight: bold;}
        }
        
        /*@media only screen and (min-device-width: 601px) {
        .content {width: 600px !important;}
        .col425 {width: 425px!important;}
        .col380 {width: 380px!important;}
        }*/
        
        </style>
        </head>
        
        <body yahoo bgcolor="#f6f8f1">
        <table width="100%" bgcolor="#f6f8f1" border="0" cellpadding="0" cellspacing="0">
        <tr>
        <td>
        <!--[if (gte mso 9)|(IE)]>
            <table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
            <tr>
            <td>
        <![endif]-->     
        <table bgcolor="#ffffff" class="content" align="center" cellpadding="0" cellspacing="0" border="0">
            <tr>
            <td bgcolor="#A3783C" class="header">
            <table width="70" align="left" border="0" cellpadding="0" cellspacing="0">  
            <tr>
                <td height="70" style="padding: 0 20px 20px 0;">
                <!--img class="fix" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/icon.gif" width="70" height="70" border="0" alt="" /-->
                </td>
            </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
            <table width="425" align="left" cellpadding="0" cellspacing="0" border="0">
                <tr>
                <td>
            <![endif]-->
            <table class="col425" align="left" border="0" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 425px;">  
            <tr>
                <td height="70">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                <td class="subhead" style="padding: 0 0 0 3px;">
                    Mensagem
                </td>
                </tr>
                <tr>
                <td class="h1" style="padding: 5px 0 0 0;">
                 KamaneKamas
                </td>
                </tr>
                </table>
                </td>
            </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
            </table>
            <![endif]-->
            </td>
            </tr>
            <tr>
            <td class="innerpadding borderbottom">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr class="h2" style="color:#a80000">
           
            </tr>
            <tr>
                <td class="bodycopy">
            
                </td>
            </tr>
            </table>
            </td>
            </tr>
            <tr>
            <td class="innerpadding borderbottom">
            <table width="115" align="left" border="0" cellpadding="0" cellspacing="0">  
            <tr>
                <td height="115" style="padding: 0 20px 20px 0;">
                <!--img class="fix" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/icon.gif" width="115" height="115" border="0" alt="" /-->
            
                </td>
            </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
            <table width="380" align="left" cellpadding="0" cellspacing="0" border="0">
                <tr>
                <td>
            <![endif]-->
            <table class="col380" align="left" border="0" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 380px;">  
            
            
        <tr>
        
        </tr>
            <tr>    
                
                Esta mensagem vem do cliente: '.$name. '<br><br> Que diz:'.$message. '<br><br>
                Deverá usar o seguinte email para a(o) contactar:  ' .$phone.'
                
            </tr>
        
            <tr>    
                
            </tr>
            </table>
            <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
            </table>
            <![endif]-->
            </td>
            </tr>
            <tr>
            <td class="innerpadding borderbottom">
            <!--img class="fix" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/wide.png" width="100%" border="0" alt="" /-->
            </td>
            </tr>
            <tr>
            
            </tr>
           
            <tr>
                <td align="center" style="padding: 20px 0 0 0;">
                <table border="0" cellspacing="0" cellpadding="0">
            
                </table>
                </td>
            </tr>
            </table>
            </td>
            </tr>
        </table>
        <!--[if (gte mso 9)|(IE)]>
            </td>
            </tr>
        </table>
        <![endif]-->
        </td>
        </tr>
        </table>
        </body>
        </html>') ;

        $email->AddAddress($to);   

        if(!$email->send()) {
            return false;      
        } else {
            return true;
        }  
    }

    if(true){
        $phone = $_POST['phone'];     
        $name= $_POST['name'];
        $mensagem = $_POST['txtmessage'];
       
        $assunto="Formulario de contacto";
		$to='';

        if(!enviarEmail($phone, $mensagem, $assunto, $name,$to)){
            echo "0";
        }else{
            echo "1";
        }
    }


} catch(Exception $ex){
    die($ex->getMessage());
    exit(); 
}
?>