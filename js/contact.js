function sendMessage()
 { 

   // var email=document.getElementById("email").value;
    var txtmessage=document.getElementById("txtmessage").value;
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;

    
	
      if (!validateName()  || !validateMessage() || !validatePhone() ) {
        jsShow('submit-error');
        producePrompt('Por favor, preencha todos os campos', 'submit-error', 'red');
        setTimeout(function(){jsHide('submit-error');}, 1000);
      }
      else {
    
                
                //O método $.ajax(); é o responsável pela requisição
                $.ajax
                ({
                    //Configurações
                    type: 'POST',//Método que está sendo utilizado.
                    dataType: 'html',//É o tipo de dado que a página vai retornar.
                    url:'contact.php',//Indica a página que está sendo solicitada.
                    //função que vai ser executada assim que a requisição for enviada
                    beforeSend: function () {
                        
                    },
                    data: { txtmessage:txtmessage,name:name,phone:phone},//Dados para consulta
                    //função que será executada quando a solicitação for finalizada.
                    success: function (msg)
                    {
                       sucesso.add()
                       
                        document.getElementById("txtmessage").value="";
                        document.getElementById("name").value="";
						            document.getElementById("phone").value="";
                    }
                });

              }   
               
  }

  function validateName() {

    var name = document.getElementById('name').value;
  
    if(name.length == 0) {
  
      producePrompt('Introduza o seu nome', 'name-error' , 'red')
      return false;
  
    }
  
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
  
      producePrompt('Primeiro e Ultimo nome, por favor.','name-error', 'red');
      return false;
  
    }
  
    producePrompt('Valido', 'name-error', 'green');
    return true;
  
}

  function validateEmail() {

    var email = document.getElementById('email').value;
  
    if(email.length == 0) {
  
      producePrompt('Email Inválido','email-error', 'red');
      return false;
  
    }
  
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
  
      producePrompt('Email Inválido', 'email-error', 'red');
      return false;
  
    }
  
    producePrompt('Valido', 'email-error', 'green');
    return true;
  
  }

  //Validar a mensagem! ela não pode ter menos que 20 caracteres
  function validateMessage() {
    var message = document.getElementById('txtmessage').value;
    var required = 20;
    var left =  required-message.length;
    
    if (left > 0) {
      producePrompt(left+' Mensagem demasiado curta','message-error','red');
      return false;
    }
  
    producePrompt('Valida', 'message-error', 'green');
    return true;
  
  }

   function validatePhone() {

    var phone = document.getElementById('phone').value;
  
    if(phone.length == 0) {
  
      producePrompt('Introduza o numero por favor', 'phone-error' , 'red')
      return false;
  
    }

   
	if((phone.length <=8)){
		 producePrompt('Introduza um numero valido, por favor.','phone-error', 'red');
      return false;
	}
  
    producePrompt('Valido', 'phone-error', 'green');
    return true;
}
  






//Mensagens e cores 
function producePrompt(message, promptLocation, color) {
  
                document.getElementById(promptLocation).innerHTML = message;
                document.getElementById(promptLocation).style.color = color;
              
}
  

function jsShow(id) {
  document.getElementById(id).style.display = 'block';
}
function jsHide(id) {
  document.getElementById(id).style.display = 'none';
}
