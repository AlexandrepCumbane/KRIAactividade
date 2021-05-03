/* -------------------------------------------------------------------------------- /
	
	Magentech jQuery
	Created by Magentech
	v1.0 - 20.9.2016
	All rights reserved.
	
/ -------------------------------------------------------------------------------- */
	
var sucesso = {
	'add': function() {
		mensagem('Sucesso', 'Operação executada com sucesso', 'success');
	}
}

var fracasso = {
	'add': function() {
		mensagem('Sem sucesso', 'Por favor, tente novamente', 'success');
	}
}


	
	/* ---------------------------------------------------
		jGrowl – jQuery alerts and message box
	-------------------------------------------------- */
	function mensagem(title, text, type) {
		$.jGrowl.defaults.closer = false;
		//Stop jGrowl
		//$.jGrowl.defaults.sticky = true;
		var tpl = '<h3>'+text+'</h3>';
		$.jGrowl(tpl, {		
			life: 4000,
			header: title,
			speed: 'slow',
			theme: type
		});
	}

