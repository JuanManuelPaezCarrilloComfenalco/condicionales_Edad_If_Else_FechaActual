addEventListener("DOMContentLoaded", (e)=>{
    
// A traves de un promt se pedirá un numero de edad, la edad ingresada 
// debe coincidir con el numero 18, si coincide saldrá una alerta diciendo
// que es mayor de edad, de lo contrario saldrá una alerta diciendo que 
// la edad ingresada no cumple con los parametros.

alert("Hola Bienvenid@")

 let numero= prompt('ingresa tu edad');
  if (numero !=null){
    alert('el numero que ingreso es_' + numero);

} if (numero==18) {
    alert("Usted es Mayor de edad")
	  
} else if(numero!==18) {
    alert("La edad ingresada no cumple con los parametros")
}

})