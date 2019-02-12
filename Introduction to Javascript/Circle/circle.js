
	function clr() {
		document.getElementById("i").value=" ";
	}
	function area(){
		var r=(document.getElementById("i").value);
		if(r.length==0)
			alert("Enter Radius Of Circle");
		else
	      document.getElementById("inpt").value=(Math.PI*Number(r)*Number(r)).toFixed(2);
	}