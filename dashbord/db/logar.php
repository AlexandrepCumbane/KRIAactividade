 <?php

            if(isset($_POST['email']) && !empty($_POST['email'])  &&  isset($_POST['password']) && !empty($_POST['password'])){

            require 'connect.php';
            require 'Usuario.php';

            //instanciar a classe usuario;
            $usuario= new Usuario();

            $email= addslashes( $_POST['email']);
            $password= addslashes( $_POST['password']);

            if($usuario->login($email,$password)){
            if(isset($_SESSION["id_user"])){

            header( "location: ../home.php");

            }else{


            header( "location: ../index.html");
            }


            }else{

            header( "location: ../index.html");

            }

            }else{

            header( "location: ../index.html");

            }

?>