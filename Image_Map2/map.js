	/* Javascript function to display <dt> titles beneath
	   the image.  Does not seem to be accessible if CSS
		is disabled, but Javascript is enabled.
		
	   Author: Frank Manno
	   Version: Nov. 25, 2004
	----------------------------------------------- */
	function addTriggers(){
	
		if ( document.getElementByID || document.createTextNode ){
		
			// Retrieve all <dt>s in the "officeMap" def. list
			dds = document.getElementById("officeMap").getElementsByTagName("dd");
	
			// Add mouseover/mouseout events
			for (i = 0; i < dds.length; i++){
				dds[i].onmouseover = function(){ switchIt(this); };
				dds[i].onmouseout = function(){ switchIt(this); };
			}
		}
	}

	// Hides/Displays text within a <dd> related to calling <dt>
	function switchIt(obj){

		// Test to make sure previousSibling is not whitespace!
		var item = obj.previousSibling;
		while (item.nodeType != 1){
			item = item.previousSibling;
		}
		
		if (item.style.display == "block"){
			item.style.display = "none";
			return;
		}
		
		// Style accordingly
		item.style.color = "black";
		item.style.fontWeight = "bold";
		item.style.top = "275px";
		item.style.display = "block";
		
	}
	
	// Disabled for example
	window.onload = addTriggers;