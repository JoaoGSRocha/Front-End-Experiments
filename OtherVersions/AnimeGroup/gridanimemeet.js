
 $(function(){ //DOM Ready

    $(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [140, 140]
    });
	//var myElement ='<li><table border ="0" class="vid"><tr><td>fdf</td><td></td><td></td></tr><tr><td>13</td><td><iframe autoplay="1" width="390" height="235" src="https://www.youtube.com/embed/cu7QvOQKcKk?autoplay=1"></iframe></td><td></td></tr><tr><td>fdf</td><td></td><td>fdd</td></tr></table></li>';
	var myElement02 ='<li data-col="2" data-row="2" class=""	><div class="title">Senpai, Drag me Plx!</div></li>';
	/*	myElement.display = "inline-block";
	myElement.align = "middle";
	myElement.lineHeight = "normal";
	*///var gridster = $(".gridster ul").gridster().data('gridster');
	var gridster02 = $(".gridster ul").gridster().data('gridster');
	//gridster.add_widget(myElement, 3, 2);
	gridster02.add_widget(myElement02, 2, 1);
});
/*
function bigImg(x) {
	x.style.height = "64px";
	x.style.width = "64px";
}
function normalImg(x) {
	x.style.height = "32px";
	x.style.width = "32px";
}*/
