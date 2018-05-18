$(function(){

	var path 		= window.location.href;
	var findPage	= false

	$('.nav-link').each(function(){
		if (this.href==path)
		{
			$(this).addClass('active')
			findPage = true
		}
	})

	if (!findPage)
	{
		$('.nav-link').first().addClass('active') //[0]//is empty query string in url
	}

})