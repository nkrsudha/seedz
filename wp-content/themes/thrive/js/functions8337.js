/**
 * Functionality specific to WP Custom Theme.
 *
 * Provides helper functions to enhance the theme experience.
 */

( function( $ ) {
	var body    = $( 'body' ),
	    _window = $( window );
	/**
	 * Makes "skip to content" link work correctly in IE9 and Chrome for better
	 * accessibility.
	 *
	 * @link http://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/
	 */
	_window.on( 'hashchange.wpcustomtheme', function() {
		var element = document.getElementById( location.hash.substring( 1 ) );

		if ( element ) {
			if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) {
				element.tabIndex = -1;
			}

			element.focus();
		}
	} );
} )( jQuery );

jQuery(function(){
	// Mobile Menu 
	var removeClass = true;

	jQuery(".menu-toggle").click(function () {

		jQuery("body").toggleClass("menu-open");

		removeClass = false;

	});

	jQuery(".nav-menu li").click(function() {

		removeClass = false;

	});

	jQuery("html").click(function () {

		if (removeClass) {

			jQuery("body").removeClass("menu-open");

		}
		removeClass = true;
	});
	// Slider
	jQuery('.home-banner').bxSlider({
		  controls:false,
		  mode: 'fade',
		  auto: true,
		  pager:false,
		  speed:1500,
		  adaptiveHeight: true
	});
});

jQuery(window).resize(function() {
	
});

jQuery(window).scroll(function() {
	
});