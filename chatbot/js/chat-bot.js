function chatBot() {
	
	// current user input
	this.input;
	
	
	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(this.match('(cordial|buenas|hola|saludo)(\\s|!|\\.|$)'))
			return "Hola..!!! en que le puedo ayudar";
		
		if(this.match('precio|precios|costo|vale|cuesta[^ ]* up') || this.match('ota') || this.match('definitiva'))
			return ["tenemos precios que van desde 10.000 hasta 30.000","para mayor informacion puede cunsultar en: https://naik97.github.io/webmisak/tours.html"];
		if (this.match('pago|pagar|cancelar'))
			return["puede cancelar el tour con tarjeta de credito o en efectivo"];
		if (this.match('descuento|promocion'))
			return["si usted elige 3 tours se le aplica un descuento"];
		if(this.match('puedo|escoger|elegir|seleccionar|adquirir'))
			return["puede elegir todos los tours o solo las que le guste"];
		if (this.match('incluye|tiene|ofrece'))
			return["cada tour incluye Transporte a los lugares que se visitan,retorno al hospedaje, Refrigerios, Seguro y Guías"];
		if (this.match('apartar|cupo'))
			return["para apartar un tour puede comunicarse al cel 310-000-0000 o al correo misaktours@gmail.com"];
		if(this.match('tiempo|tarda|demora|hora'))
			return ["el tiempo de un tour puede ser de 1 hora hasta 9 horas","para ver las horas del tour puede consultar en: https://naik97.github.io/webmisak/tours.html"];
		
		if (this.match('asesor|asesorado|acompañado|acompaña|guia|guiado'))
			return["cada rrecorrido va con un guia turístico"];

		if (this.match('cuantos tours|ofrecen|tienen|hay'))
			return["en el momento tenemos 9 tours","si gusta puede ir al siguente enlace para ver los tours: https://naik97.github.io/webmisak/tours.html "];
		
		if(this.match('^no+(\\s|!|\\.|$)'))
			return "fue un placer ayudarle";
		
		if(this.match('(gracias|bye|hasta luego)'))
			return ["Con todo gusto!!!!", "feliz dia!"];
		
		
		
		
		if(this.input == 'noop')
			return;
		
		return input + " no tengo informacion pero se puede comunicar con 123458 ";
	}
	
	/**
	 * match
	 * 
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {
	
		return new RegExp(regex).test(this.input);
	}
}
