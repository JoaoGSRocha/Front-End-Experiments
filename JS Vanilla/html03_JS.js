var coord = new Array(3, 5, 7, 8 , 9, 5);
runBots(coord)
function runBots(params){
	document.write(params[3]);
}
		

/*
function LoopBotsTurns(coord, maxCnt){
	var coord = new Array(3, 5, 7, 8 , 9, 5);
			
		var count;
		document.write("Starting Loop"+"<br />");
		for(count=0; maxCnt<10; count++){
			document.write("Current Count: " + count);
			document.write("<br />");
			if(coord[count]==5)
				document.write("Bots Collided at position "+ count +" !</br>");
		}
		document.write("Loop stopped!");
}*/