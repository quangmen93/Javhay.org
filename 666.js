var _titleSllipsis=null;
var _loadFbSDk=null;
jQuery(document).ready(function(){
	//--Menu
	jQuery('#mega-menu-1').dcMegaMenu({
		speed: 'fast',
		effect: 'slide'
	});
	
	//Thanh cuĂ¡Â»â„¢n top phim tuĂ¡ÂºÂ§n+thÄ‚Â¡ng
	jQuery(function(){
		jQuery('#list-top-movie-week, #list-top-film-week').slimScroll({
			height: '477px',
			railVisible: true,
			alwaysVisible: true
		});
	});
	

	// CuĂ¡Â»â„¢n qua lĂ¡ÂºÂ¡i cÄ‚Â¡c box phim mĂ¡Â»â€ºi cĂ¡Â»Â§a tĂ¡Â»Â«ng mĂ¡Â»Â¥c
	jQuery('.last-film-box').each(function(){
		var currentId=jQuery(this).attr('id');
		var categoryId=jQuery(this).attr('data-categoryid');
		if(typeof currentId=='string' && typeof categoryId=='string')
		{
			jQuery('#'+currentId).carouFredSel({
				auto: false,
				prev: '#prev'+categoryId,
				next: '#next'+categoryId
			});
		}
	});
	//--CuĂ¡Â»â„¢n lĂ¡ÂºÂ¡i top phim mĂ¡Â»â€ºi Ă¡Â»Å¸ home
	jQuery('#movie-carousel-top').carouFredSel({
		auto: false,
		prev: '#prevTop',
		next: '#nextTop',
	});
	//--Tab phim mĂ¡Â»â€ºi cĂ¡ÂºÂ­p nhĂ¡ÂºÂ­t
	jQuery("#tabs-movie").tabs();
	
	
	
	//hiĂ¡Â»â€¡n ... Ă¡Â»Å¸ tÄ‚Âªn phim
	_titleSllipsis=function(){
		//--NĂ¡ÂºÂ¿u trÄ‚Â¬nh duyĂ¡Â»â€¡t Ă„â€˜Ă¡Â»Âi mĂ¡Â»â€ºi hĂ¡Â»â€” trĂ¡Â»Â£ HTML5 vÄ‚  CSS3 thÄ‚Â¬ khĂ¡Â»Âi
		if(typeof window.localStorage!='undefined')
			return true;
		jQuery(".movie-title-1, .movie-title-2, .news-title-1 a, .name-en a").ellipsis();
	}
	jQuery(window).load(function(){
		setTimeout("_titleSllipsis()",1000);
	});
	
});