
        
        //object containing margin settings
        var margins = {
          panel1: 0,
          panel2: -1100,
          panel3: -2200,
          panel4: -3300,
          panel5: -4400,          
          panel6: -5500
        }
		var thisWidth;
		var firstTry=true;
         $("#slider p").hide();
        $(document).ready(function() {

	
        //handle fade in
        
       // $("#slider").fadeIn(1000);
       // $("#nav").fadeIn(1000);
       // $("#nav a").removeClass("on");
        $("#nav .thumb1 a").addClass("on");
                //handle nav click
                /*
		  $("#nav a").mouseover(function(e){
		  	
		  	e.preventDefault();
			$(this).stop();
			$(this).parent().siblings("li").children().stop();

			if(firstTry){
				thisWidth = $(this).width();
				firstTry = false;
			}
	
			//alert(thisWidth);	
			var widthDiff = 180-thisWidth;
			
			//stop all animation
			
	
			
		
		 	$(this).animate({
				width:"180px"				
			},300,"linear")
			
			var otherTag = $(this).parent().siblings("li");
			$.each(otherTag, function(){
				widthDiff =widthDiff - Math.floor(widthDiff/2) ;
				if(widthDiff>=0){
					$(this).children().animate({				
					width: thisWidth-widthDiff + "px"
					},300*widthDiff/thisWidth,"linear") 
				}
			})
		
			
		  })
		  $("#nav a").mouseout(function(e){	
		  	$(this).stop();
			$(this).parent().siblings("li").children().stop();
		
			$(this).animate({
				width:thisWidth+"px"			
		  	},150.,"linear")
			var otherTag = $(this).parent().siblings("li");
			$.each(otherTag, function(){
				//widthDiff =widthDiff - Math.floor(widthDiff/2) ;
				//if(widthDiff>=0){
					$(this).children().animate({				
						width:thisWidth+"px"
					},150*(1+$(this).children().width()/thisWidth),"linear") 
				//}
			})
		
		  })*/
		  
          $("#nav a").click(function(e){
            
            //stop browser default
            e.preventDefault();
            
            //remove on states for all nav links
            $("#nav a").removeClass("on");
            $("#slider div").hide();
            //add on state to selected nav link
            $(this).addClass("on");
            var panel = $(this).attr("href");
            $(panel).fadeIn(1000);
            //set margin of slider to move
            /*$("#slider").animate({
              marginLeft: margins[$(this).attr("href").split("#")[1]]
            });    */     
          });
		  
        });
       

        
        //hide descriptive text
       
        
        //auto change the image 
        setInterval( function(){
          
          //remove on states for all nav links
          var $active = $("#nav li a.on");
          var $active_list = $active.parent();
          var $next = $active_list.next().children();
          if($next.length == 0){  
            $next = $("#nav .thumb1 a");
          }

            //remove on states for all nav links
            $("#nav a").removeClass("on");
            $("#slider div").hide();
            //add on state to selected nav link
            $next.addClass("on");
            var panel = $next.attr("href");
            $(panel).fadeIn(1000);
  
        
        }, 10000 );

        
    
        
