function calcularPrecio(precio,cantidad,categoria) {
  var porcentaje;
  switch(categoria) {
	case "1":
	porcentaje = 0.8;
	break;
	case "2":
	porcentaje = 0.5;  
	break;
	case "3":
	porcentaje = 0.15;  
	break;
default:
}     

  document.getElementById("total").innerHTML = precio*cantidad * (1-porcentaje);
}

function limpiarFormulario() {
	document.getElementById("total").innerHTML = "";
	document.getElementById("armadoDeViaje").reset();
}