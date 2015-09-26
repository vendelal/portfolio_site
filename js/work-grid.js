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

		$("#bison-button").mouseenter(
			function(){
			$(".work-title").hide();
			$(".view-work").show();
		});

		$("#bison-button").mouseleave(
			function(){
			$(".work-title").show();
			$(".view-work").hide();
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

		$("#northeastern-button").mouseenter(
			function(){
			$(".work-title").hide();
			$(".view-work").show();
		});

		$("#northeastern-button").mouseleave(
			function(){
			$(".work-title").show();
			$(".view-work").hide();
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

		$("#swea-button").mouseenter(
			function(){
			$(".work-title").hide();
			$(".view-work").show();
		});

		$("#swea-button").mouseleave(
			function(){
			$(".work-title").show();
			$(".view-work").hide();
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

		$("#sacc-button").mouseenter(
			function(){
			$(".work-title").hide();
			$(".view-work").show();
		});

		$("#sacc-button").mouseleave(
			function(){
			$(".work-title").show();
			$(".view-work").hide();
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

		$("#wsdev-button").mouseenter(
			function(){
			$(".work-title").hide();
			$(".view-work").show();
		});

		$("#wsdev-button").mouseleave(
			function(){
			$(".work-title").show();
			$(".view-work").hide();
		});
});
