<?php

require 'connect.php';
if(isset($_SESSION['id_user']) && !empty($_SESSION['id_user']))
{
    require_once 'Usuario.php'; 
   //instanciar a classe usuario;
    $usuario= new Usuario();
    
   // 
    $logado=$usuario->logado($_SESSION['id_user']);
    $userName= $logado["name"]; 
    $email=$logado["email"];
    
}else{    
        header("loction:../index.html");
    }


?>