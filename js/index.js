$('.navbar-nav>li>a').on('click', function(){
	var href = this.href;
	if (href.includes('#')){
		$('.navbar-collapse').collapse('hide');
	}
});
$('.dropdown-menu>a').on('click', function(){
	var href = this.href;
	if (href.includes('#')){
		$('.navbar-collapse').collapse('hide');
	}
});