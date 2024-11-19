jQuery(document).ready(function() {
	
	var pathname = window.location.pathname;
	pathname = pathname.split("/");
	if(pathname[1] == "hire-developers"){
		var pagename = jQuery("title").html().split(" - ");
		jQuery("#pageurl").val(pagename[0]+" Page");
	}
	
	jQuery('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
	//Portfolio slider inner pages    
	jQuery("#slides2").slidesjs({  	
		height: 800,
		pagination : {
			active : !0,
			effect : "fade"
		},
		play : {
			effect : "fade",
			interval : 7e3,
			auto: true,
		},
		effect : {
			fade : {
			speed : 800,
			crossfade : 800
			}
		},			
		navigation: false
	});
});