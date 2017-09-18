		
		document.getElementById("demo1").addEventListener("mouseover", mouseOver);
		document.getElementById("demo1").addEventListener("mouseout", mouseOut);
		document.getElementById("demo2").addEventListener("mouseover", mouseOver);
		document.getElementById("demo2").addEventListener("mouseout", mouseOut);
		document.getElementById("demo3").addEventListener("mouseover", mouseOver);
		document.getElementById("demo3").addEventListener("mouseout", mouseOut);

		function mouseOver() {
			var el = this;
			var play_area = document.getElementById("play_area");
			play_area.style.color = "red";
			el.style.fontStyle = "Italic";
			if (el == document.getElementById("demo1")) {
				play_area.innerHTML = "Home highlighted in red!" 
			}
			if (el == document.getElementById("demo2")) {
				play_area.innerHTML = "Archive highlighted in red!" 
			}
			if (el == document.getElementById("demo3")) {
				play_area.innerHTML = "About highlighted in red!" 
			}
		}

		function mouseOut() {
			var el = this;
			var play_area = document.getElementById("play_area");
	    	play_area.style.color = "black";
	    	play_area.innerHTML = "Normal." 
	    	el.style.fontStyle = "normal";
		}