        <?php

        session_start();

        $localhost="localhost";
        $user="root";
        $password="";
        $db="kamaneKMA";

        global $pdo;

        try{
        //orientacao a objectos com pdo;

        $pdo= new PDO("mysql:dbname=".$db."; port=3308; host=".$localhost,$user,$password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

        }catch(PDOException $e){

        echo "ERRO: ". $e->getMessage();
        exit;

        }





        ?>