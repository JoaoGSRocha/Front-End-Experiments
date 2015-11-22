
  $(function(){ //DOM Ready

    $(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [140, 140]
    });
	var myElement = '<li class="new"><div class="vid"><iframe autoplay="1" width="232" height="100" src="http://www.youtube.com/embed/XGSy3_Czz8k?autoplay=0"></iframe></div> </li>';
	myElement.display = "inline-block";
	myElement.align = "middle";
	myElement.lineHeight = "normal";
	var gridster = $(".gridster ul").gridster().data('gridster');
	gridster.add_widget(myElement , 2, 1);
});