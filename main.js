addEventListener("DOMContentLoaded", (e)=>{
    

alert("Hola, Bienvenid@s")

let edad = prompt("escribe tu edad");
  alert("Has ingresado tu edad")
  
switch (true){
    case edad>=18:
       document.querySelector("body").innerHTML = "Es mayor de edad"
    break;
 default:
    document.querySelector("body").innerHTML = "La edad ingresada no cumple con los parámetros"

}
})