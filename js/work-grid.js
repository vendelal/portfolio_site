$(document).ready(function(){

		$("#bison-button").click(
			function(){
			$(".work-grid").hide();
			$("#bison").show();
			$(".selected-button").hide();
			$(".show-button").show();
			$(this).children(".show-button").hide();
			$(this).children(".selected-button").show();
		});

		$("#northeastern-button").click(
			function(){
			$(".work-grid").hide();
			$("#northeastern").show();
			$(".selected-button").hide();
			$(".show-button").show();
			$(this).children(".show-button").hide();
			$(this).children(".selected-button").show();
		});

		$("#swea-button").click(
			function(){
			$(".work-grid").hide();
			$("#swea").show();
			$(".selected-button").hide();
			$(".show-button").show();
			$(this).children(".show-button").hide();
			$(this).children(".selected-button").show();
		});

		$("#sacc-button").click(
			function(){
			$(".work-grid").hide();
			$("#sacc").show();
			$(".selected-button").hide();
			$(".show-button").show();
			$(this).children(".show-button").hide();
			$(this).children(".selected-button").show();
		});

		$("#wsdev-button").click(
			function(){
			$(".work-grid").hide();
			$("#wsdev").show();
			$(".selected-button").hide();
			$(".show-button").show();
			$(this).children(".show-button").hide();
			$(this).children(".selected-button").show();
		});
});
