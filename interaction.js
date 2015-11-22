window.onload=function(){
		addMouseOvers();
	};
	function addMouseOvers(){
		var areas = document.getElementsByTagName("area");
		for(var i = 0; i < areas.length; i++){
			areas[i].onmouseover = function(){
				resaltarMapa(this);
			};
		}
	}
	function resaltarMapa(area){
		console.log(area)
		anchors = document.getElementsByTagName("a");
		for(var i = 0; i < anchors.length ; i++){
			if(area.alt === anchors[i].id){
				anchors[i].className="selected";
			}
			else{
				anchors[i].className="";
			}
		}
		seleccionarCiudad(area.alt);
	}
	function seleccionarCiudad(classe){
		document.getElementById("selectedtown").className=classe;

	}