function ClickFunction() {
	document.getElementById('important').classList.toggle("show");
}
	
window.onclick = function(event) {
	if(!event.target.matches('.MenuButton')) {
		var droppings = document.getElementsByClassName("MenuContents");
		for(var i = 0; i < droppings.length; i++) {
			var MenuOpen = droppings[i];
			if(MenuOpen.classList.contains('show')){
				MenuOpen.classList.remove('show');
			}
		}
	}
}
function previewFile(){
	var preview = document.querySelector('img');
	var file = document.querySelector('input[type=file]').files[0];
	var reader = new FileReader();
	reader.onloadend = function() {
		preview.src = reader.result;
	}
	if (file) {
		reader.readAsDataURL(file);
	}
	else {
		preview.src="";
	}
}
previewFile();