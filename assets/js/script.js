
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



$(document).ready(function () {
	$('[data-toggle="tooltip"]').tooltip();


	$("#enviarCorreo").click(function () {
		alert("El correo fue enviado correctamente");
	});


	$("#title-card-1").on("click", function () {
		$("#text-card-1").toggle();
	});

	$("#title-card-2").on("click", function () {
		$("#text-card-2").toggle();
	});


	$("#title-card-3").on("click", function () {
		$("#text-card-3").toggle();
	});

	$("#preparacion").on("dblclick", function(){
		$(this).css("color", "red");
	});

	$("#ingredientes").on("dblclick", function(){
		$(this).css("color", "red");
	});






});
