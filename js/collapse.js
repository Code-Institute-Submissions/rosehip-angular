/* Navbar closes on click when in collapsed mode*/
$('.navbar-nav>li>a').on('click', function(){
	var href = this.href;
	if (href.includes('#')){
		$('.navbar-collapse').collapse('hide');
	}
});
/* Navbar dropdown closes on click when in collapsed mode*/
$('.dropdown-menu>a').on('click', function(){
	var href = this.href;
	if (href.includes('#')){
		$('.navbar-collapse').collapse('hide');
	}
});

/*listener for left/right key*/
window.onkeydown = function(e){
	var key = e.keyCode ? e.keyCode : e.which;

	//left key
	if (key == 37){
		jumpImages(-1);
	}
	//right key
	else if (key == 39){
		jumpImages(1);
	}
	//esc key
	else if (key == 27){
		closeLightboxModal();
	}
	else{}
}

