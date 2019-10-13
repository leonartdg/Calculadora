

//variables
var teclas = document.querySelectorAll('.tecla');
var borrar = false
var display = document.getElementById('display');
var tecla = '';  rfinal = 0; bloque1 = ''; bloque2 = '';cadena = '';


//valor por teclado
  window.addEventListener('keypress', function(event) {
	tecla = event.which || event.KeyCode
  	tecla = String.fromCharCode(tecla);
	  	if(isNaN(tecla)){
	  		operadores(tecla);
	  	}
	  	else{
	  				ingresotecla(tecla);
	  	}
  });

  //valor por clic
  teclas.forEach(function(teclas){
	var tecla = teclas.getAttribute("alt");
	  teclas.addEventListener('click', function() {
		  	if(isNaN(tecla)){
		  		if (tecla=='On') {
		  			eliminar();
		  		}else if(tecla=='igual'){
	  				if (bloque1 == ""){
						bloque1 = display.textContent
	  				}else{
	  				bloque2 = display.textContent;
					console.log(bloque1)
	  				calcular();
	  				}
		  		}else{
		  		switch(tecla){
			  			case 'mas':
				  			tecla= "+";
					    	console.log(tecla)
			  			break;
			  			case 'menos':
				  			tecla='-';
			  			break;
			  			case 'por':
				  			tecla='*';
			  			break;
			  			case 'dividido':
				  			tecla='/';
			  			break;
	  				}
	  				tecla=tecla;
	  				operacion(tecla);

		  		}
		  	}else{

	  				ingresotecla(tecla);
	  			}
	  });
  
  });

function calcular(){
	  	switch(arit){
	  		case'+':
	  			if(bloque1==''){rfinal = bloque2}else{rfinal = parseFloat(bloque1) + parseFloat(bloque2);}
	  		break;
	  		case'-':
	  			if(bloque1==''){rfinal = bloque2}else{rfinal = parseFloat(bloque1) - parseFloat(bloque2);}
	  		break;
	  		case'*':
	  			if(bloque1==''){rfinal = bloque2}else{rfinal = parseFloat(bloque1) * parseFloat(bloque2);}
	  		break;
	  		case'/':
	  			if(bloque1==''){rfinal = bloque2}else{rfinal = parseFloat(bloque1) / parseFloat(bloque2);}
	  		break;
	  	}
	  	resultado(rfinal);
}
function operadores(tecla){
	  		switch(tecla){
	  			case '+':
	  			operacion(tecla);
				console.log(tecla)
	  			break;
	  			case '-':
	  			if (bloque2==''){tecla=''}else{operacion(tecla);}
	  			break;
	  			case '*':
	  			operacion(tecla);
	  			break;
	  			case '/':
	  			operacion(tecla);
	  			break;
	  			case '=':
	  				if (bloque1 == ""){
						bloque1 = display.textContent
	  				}else{
	  				bloque2 = display.textContent;
					console.log(bloque1)
	  				calcular();
	  				}
	  			break;
	  		}
}

function ingresotecla(tecla){
  			c = display.textContent
	  		if (c == "0"){
				display.textContent = display.textContent.replace("0", "")	  			
		  		display.textContent = display.textContent + tecla		  		
		  		bloque2 = display.textContent
	  		}else if (borrar==true){
		  		cadena= cadena + tecla
		  		display.textContent = cadena
		  		bloque2 = display.textContent
	  		}
	  		else{	  			
	  			display.textContent = display.textContent + tecla  			
	  			bloque2 = display.textContent;
	  		}
	  		var limitar=display.textContent.length
	  		
	  		if (limitar>= 8){
				display.textContent = display.textContent.substring(0,8);
				bloque2 = display.textContent
			}
	console.log(tecla)
}

function operacion(tecla){
		  	arit = tecla
		  	calcular();
		  	if (bloque2!=''){bloque1 = rfinal}else{}
}

function resultado(rfinal){
	if (String(parseFloat(rfinal)).length>=8){
	display.textContent = String(parseFloat(rfinal)).substring(0,8)
	}
	else{
	display.textContent = rfinal		
	}
	cambio();
	rfinal=''
	console.log(rfinal);
}


function cambio(){
	borrar=true
	cadena='';
}

function eliminar(){
	rfinal = 0; bloque1 = ''; bloque2 = ''; tecla = ''; cadena=''; borrar=false
	display.textContent = '0';
}

/*//valor ingresado por click
teclas.forEach(function(teclas) {
var tecla = teclas.getAttribute("alt");
  // Agregamos un listener a cada elemento
 teclas.addEventListener('click', function() {
  		condicion = tecla
	  	if(isNaN(condicion)){
		  		bloque1=0
	    	console.log(tecla);
		    if(tecla=="On"){
		    	eliminar()
		    }else if (tecla=='igual') {
		    calcular()
		    rfinal = localStorage.getItem("resultado");
			console.log(rfinal)
			display.innerHTML= rfinal;
		    }
	  	}
	  	else{
	    resultado = resultado + tecla
	  	display.innerHTML= resultado;
	  	}
  });
  
});

if (arit == "+" || arit == "-" || arit=="*" || arit=="/") {
	  			arit = arit.replace(arit,tecla);
	  			console.log(arit)
		  		bloque1 = parseInt(resultado, 10);
	  			if(borrar){
	  				resultado=''
	  			}
			}

	  		if (bloque1=='') {
			    resultado = resultado + tecla
			  	display.innerHTML= resultado;
	  		}else{
			    resultado = resultado + tecla
		  		bloque2 = parseInt(resultado, 10);
			  	display.innerHTML= resultado;
	  			console.log(bloque1,bloque2)
	  		}



	localStorage.setItem("resultado", rfinal);
*/

// window.onload = function(){document.onkeypress = PresionarTeclas; } tecla = parseInt(String.fromCharCode(tecla), 10);





	  		