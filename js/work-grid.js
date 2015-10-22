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
			$(".bi-work-title").hide();
			$(".bi-view-work").show();
		});

		$("#bison-button").mouseleave(
			function(){
			$(".bi-work-title").show();
			$(".bi-view-work").hide();
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
			$(".nu-work-title").hide();
			$(".nu-view-work").show();
		});

		$("#northeastern-button").mouseleave(
			function(){
			$(".nu-work-title").show();
			$(".nu-view-work").hide();
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
			$(".sw-work-title").hide();
			$(".sw-view-work").show();
		});

		$("#swea-button").mouseleave(
			function(){
			$(".sw-work-title").show();
			$(".sw-view-work").hide();
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
			$(".sa-work-title").hide();
			$(".sa-view-work").show();
		});

		$("#sacc-button").mouseleave(
			function(){
			$(".sa-work-title").show();
			$(".sa-view-work").hide();
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
			$(".ws-work-title").hide();
			$(".ws-view-work").show();
		});

		$("#wsdev-button").mouseleave(
			function(){
			$(".ws-work-title").show();
			$(".ws-view-work").hide();
		});
});
