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

