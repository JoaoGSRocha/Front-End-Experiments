
 $(function(){ //DOM Ready

    $(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [140, 140]
    });
	var myElement ='<li><table border ="0" class="vid"><tr><td width="40px"></td><td><div class="dragIcon" onmouseover="bigImg(this)" onmouseout="normalImg(this)">&nbsp;</div></td><td></td></tr><tr><td onmouseover="bigImg(this)" onmouseout="normalImg(this)"><img src="dragIcon.png"></td><td><iframe autoplay="1" width="390" height="235" src="http://www.youtube.com/embed/XGSy3_Czz8k?autoplay=0"></iframe></td><td><div class="dragIcon" onmouseover="bigImg(this)" onmouseout="normalImg(this)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></td></tr><tr><td></td><td><div class="dragIcon" onmouseover="bigImg(this)" onmouseout="normalImg(this)">&nbsp;</div></td><td></td></tr></table></li>';
	myElement.display = "inline-block";
	myElement.align = "middle";
	myElement.lineHeight = "normal";
	var gridster = $(".gridster ul").gridster().data('gridster');
	gridster.add_widget(myElement , 3, 2);
});

function bigImg(x) {
	x.style.style.opacity = "0.3";
}
function normalImg(x) {
	x.style.style.opacity = "0.0";
}
