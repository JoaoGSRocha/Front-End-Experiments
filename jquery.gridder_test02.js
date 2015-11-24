
 $(function(){ //DOM Ready

    $(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [140, 140]
    });
	var myElement ='<li><table border ="0" class="vid"><tr><td width="40px" class="dragIcon"></td><td class="dragIcon"><img class="dragIcon" src="dragIcon.png">&nbsp;</td><td class="dragIcon"></td></tr><tr><td class="dragIcon">&nbsp;&nbsp;&nbsp;</td><td><iframe autoplay="1" width="390" height="235" src="http://www.youtube.com/embed/XGSy3_Czz8k?autoplay=0"></iframe></td><td class="dragIcon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr><tr><td class="dragIcon"></td><td class="dragIcon">&nbsp;</td><td class="dragIcon"></td></tr></table></li>';
	myElement.display = "inline-block";
	myElement.align = "middle";
	myElement.lineHeight = "normal";
	var gridster = $(".gridster ul").gridster().data('gridster');
	gridster.add_widget(myElement , 3, 2);
});

	$(document).ready(function(){
		$(".dragIcon").hover(
			function(){
			$("img.dragIcon").css('opacity', '1.0');
			}, function(){
			$("img.dragIcon").css('opacity', '0.0');
			});
		
	});
