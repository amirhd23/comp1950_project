$(document).ready(function () {

	/* this part is used for closing and opening content area*/
	$(".collapsible").addClass("arrow_up");

	$(".collapsible").click(function(){	
		$( this ).toggleClass( "arrow_up arrow_down" );
		$(this).next('.content').slideToggle();
	});
	/* **************************************/ 
	
	
	/****************************************/
	/* 		making accordion navigation 	*/ 
	/****************************************/
	$( "#nav > li:has(ul)").css("background","url('images/right_arrow.png') no-repeat 95% 10px")
  
	$('#nav > li > a').click(function(){
	
		if ($(this).attr('class') != 'active'){
			
				
			$('#nav li ul').slideUp();
			$("#nav > li:has(ul)").css("background","url('images/right_arrow.png') no-repeat 95% 10px")
			
			$(this).next().slideToggle();
			$('#nav li a').removeClass('active');
			$(this).addClass('active');
			$(this).parent().css("background","url('images/down_arrow.png') no-repeat 95% 10px")
		  
		}
		else{
			$('#nav> li ul').slideUp();
			$('#nav li a').removeClass('active');
			$(this).parent().css("background","url('images/right_arrow.png') no-repeat 95% 10px")
			
		}
		
	 });
	 
	 /* opening submenu*/ 
	 $('#current_page').parent().prev('a').click();
	 
	 /*******************************************/
	 /* 	End of making accordion navigation  */ 
	 /*******************************************/
	 
});
