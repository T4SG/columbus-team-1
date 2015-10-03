$(document).ready(function() {
	$("#academInfo").hide();
	$("#serviceInfo").hide();
	$("input[value='academics']").click(
		function() {
			$("#academInfo").toggle();
			
		});
	$("input[value='community_service']").click(
		function() {
			$("serviceInfo").toggle();
		});
	
});



/*$("input[name='reset']").on('click', function () {
		$("#academInfo").fadeIn("slow");
	});
	*/