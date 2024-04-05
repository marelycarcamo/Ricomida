$(document).ready(function () {
	// Tooltips
	// Tooltips
	const tooltipTrigger = $('[data-bs-toggle="tooltip"]');
	$.each(tooltipTrigger, function (index, tooltipTriggerEl) {
		new bootstrap.Tooltip(tooltipTriggerEl);
	});


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
