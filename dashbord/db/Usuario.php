            <?php

class Usuario{

                //funcao que garante o login
                public function login($email, $password){

                global $pdo;

                $sql=   "SELECT * FROM usuarios WHERE email= :email AND password = :password";
                $sql= $pdo->prepare($sql);
                $sql->bindValue("email",$email);
                $sql->bindValue("password", md5($password));
                $sql->execute(); 
                

                if($sql->rowCount()>0){

                $dado= $sql-> fetch();
                echo $dado["id_user"];
                $_SESSION["id_user"] = $dado["id_user"];

                return true;

                }else{
                return false;
                }

                }

                //verificacao de usuario logado;

                public function logado($id){
                    global $pdo;
                    $array= array();
                    $sql =" SELECT name, email FROM usuarios WHERE id_user=:id";
                    $sql=$pdo->prepare($sql);
                    $sql->bindValue("id",$id);
                    $sql->execute();

                    if($sql->rowCount()>0){

                        $array=$sql->fetch();

                    }
                    return $array; 

                }




            }




            ?>