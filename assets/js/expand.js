/**
 * expand.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 *
 * MENU WRAP
 */
(function() {

	var bodyEl = document.querySelector('.mainWrapper'),
		content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		//logoClass = document.querySelector('.mainWrapper'),
		isOpen = false;

	var bodyElSearch = document.querySelector('.mainWrapper'),
		searchopenbtn = document.getElementById( 'search-open-button' ),
		searchclosebtn = document.getElementById( 'search-close-button' ),
		isOpenSearch = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		/*content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
*/

		searchopenbtn.addEventListener( 'click', toggleMenuSearch );
		if( searchclosebtn ) {
			searchclosebtn.addEventListener( 'click', toggleMenuSearch );
		}
	}
	
	

	function toggleMenu() {
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var listHeight = $(".menu-list").height();
		
		if( isOpen ) {
			//classie.remove( bodyEl, 'show-menu' );
			//classie.remove( bodyEl, 'show-search' );
			//classie.remove( logoClass, 'logoHide' );
			if(windowWidth <= 1023) {
				$('.menu-wrap .menu .menu-list').slideToggle("700", "easeOutSine", function(){
					classie.remove( bodyEl, 'show-menu' );
					classie.remove( bodyEl, 'show-search' );
					$(".menu .menu-list").css({"max-height": windowHeight - 120, "display": "none"});
				});
			} else {
				classie.remove( bodyEl, 'show-menu' );
				classie.remove( bodyEl, 'show-search' );
				$(".menu .menu-list").css({"max-height": "", "display": "block"});
			}
			isOpenSearch = false;
		}
		else {
			classie.add( bodyEl, 'show-menu' );
			//classie.add( logoClass, 'logoHide' );
			if(windowWidth <= 1023) {
				$('.menu-wrap .menu .menu-list').delay(600).slideToggle("700", "easeOutSine");
			} 
		}
		isOpen = !isOpen;
	}

	function toggleMenuSearch() {
		if( isOpenSearch ) {
			classie.remove( bodyElSearch, 'show-search' );
		}
		else {
			classie.add( bodyElSearch, 'show-search' );
		}
		isOpenSearch = !isOpenSearch;
	}

	init();

})();