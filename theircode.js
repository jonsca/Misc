(function(){

	// the minimum version of jQuery we want
	var v = "1.3.2";

	// check prior inclusion and version
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initMyBookmarklet();
	}

	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
			// your JavaScript code goes here!
                        var s = ''
			if (window.getSelection)
			    s = window.getSelection();
                        else if(document.getSelection)
                            s = document.getSelection();
                        
                        else if(document.selection)
                            s = document.selection.createRange().text;
			
			if (s.length > 0)
			{
			    var count = 0;
			    for (var i = 0;i<s.length;i++)
			    {
			    	if (s[i] == '\n')
			    		count++;
			    }
			
			    alert("There are "+count+" lines.");
			}
                        
		})();
	}

})();