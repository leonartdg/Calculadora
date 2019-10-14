//variables
var teclas = document.querySelectorAll('.tecla');
var borrar = false;
var display = document.getElementById('display');
localStorage.setItem("bloque1", "");

//Ingreso por taclado
window.addEventListener('keypress', function(event) {
	tecla = event.which || event.KeyCode
  	tecla = String.fromCharCode(tecla);
	  	if(isNaN(tecla)){
	  		if(tecla=='='){
	  			calcular();
	  		}else if(tecla=='.'){
		  		n=tecla;
		  		ingresotecla(n);
			}else{	
		  		o=tecla;
		  		operadores(o);
			}
	  	}else{
	  		n=tecla;
	  		ingresotecla(n);
	  	}
});

//Ingreso por botones
teclas.forEach(function(teclas){
var tecla = teclas.getAttribute("alt");
  teclas.addEventListener('click', function() {
	  	if(isNaN(tecla)){
	  		if (tecla=='On') {
	  			display.textContent='0';	  			
				localStorage.setItem("bloque1", "");
				bloque1='';
				bloque2='';
				borrar=false;
	  		}else if(tecla=='igual'){
  				calcular();
  			}else if(tecla=='signo'){
	  			sig();
	  		}else if(tecla=='punto'){
				n='.';
				ingresotecla(n);
	  		}else{
		  		switch(tecla){
		  			case 'mas':
			  			tecla= "+";
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
  				o=tecla;
  				operadores(o);
	  		}
	  	}else{
			n=tecla;
			ingresotecla(n);
		}
  });

  });

//Entrada de variable n = diguitos
function ingresotecla(n){
	var bloque2 = display.textContent;
	if (borrar) {
		//alert("se borro");
		display.textContent="";
		borrar = false;
		display.textContent = n;
	}
	else if (bloque2 == "0" && n != "."){
		resp = bloque2.replace("0", "")
		display.textContent = resp + n;
	}
	else{
		display.textContent = (bloque2 + n).substring(0,9);
	}
}
//Entrada de variable o = a operadores
function operadores(o){
	var bloque1 = localStorage.getItem("bloque1");
	var bloque2 = display.textContent;
	var operacion = bloque1.substring(0,bloque1.length-1);
	calcular()
	if (operacion == "+" || operacion == "-" || operacion=="*" || operacion=="/") {
		operacion = operacion.replace(operacion,o);
		var resultado = bloque1.substring(0,bloque1.length-1);
		bloque1 = resultado+operacion;
		localStorage.setItem("bloque1", bloque1);
	}
	if (bloque1 == "" && bloque2 != ""){
		bloque1 = bloque2 + o;
		localStorage.setItem("bloque1", bloque1);
	}
	else{
		bloque1 = bloque1 + bloque2 + o;
		localStorage.setItem("bloque1", bloque1);
		}
		borrar = true;
}
//Proceso de operaciones
function calcular(){
	var bloque1 = localStorage.getItem("bloque1");
	var bloque2 = display.textContent;		
	console.log(bloque1,bloque2)
	display.textContent = String(eval(bloque1 + bloque2)).substring(0,9);
	localStorage.clear();
	bloque1=''
	borrar = true;
}
//Cambio de signo
function sig(){
	var bloque2 = display.textContent;
	if (bloque2 > 0){
		display.textContent = "-" + bloque2;
	}
	else{
		cambio = bloque2.replace(/[-]/g, "");
		display.textContent = cambio;
	}
}