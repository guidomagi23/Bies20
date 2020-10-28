document.getElementById('titulo').style.backgroundColor= "#7a1b0c";
document.getElementById('pgEstacionamiento').style.backgroundColor= "#7a1b0c";

function mostrarporc(){
	var x = $('#inPorcentajeDar');
	x.val("hola ");
}



$('#btAtrasLogin').click(atrasLogin);
function atrasLogin(){
    window.location.href='../vista/login.html';
}

$('#btAtras').click(atras);
function atras(){
    window.location.href='../vista/estacionamiento.html';
}

$('#btDar').click(Dar);
function Dar(){
	window.location.href='../vista/detalle_estacionamiento.html';
}

$('#btSanJeronimo').click(SanJeronimo);
function SanJeronimo(){
	window.location.href='../vista/detalle_estacionamiento.html';
}

$('#btTucuman').click(Tucuman);
function Tucuman(){
	window.location.href='../vista/detalle_estacionamiento.html';
}

$('#btIrse').click(Irse);
function Irse(){
    alert("Has abandonado el estacionamiento");
    document.getElementById("btIrse").disabled = true;
    document.getElementById("btEstacionar").disabled = false;
}

$('#btEstacionar').click(Estacionar);
function Estacionar(){
    alert("Has estacionado");
    document.getElementById("btIrse").disabled = false;
    document.getElementById("btEstacionar").disabled = true;
}
