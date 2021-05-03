

$(document).ready(function() {
	
	//--- HAMBURGER MENU ---//
	"use strict";

	var toggles = document.querySelectorAll(".c-hamburger");

	for (var i = toggles.length - 1; i >= 0; i--) {
	  var toggle = toggles[i];
	  toggleHandler(toggle);
	};

	function toggleHandler(toggle) {
	  toggle.addEventListener( "click", function(e) {
		e.preventDefault();
		(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
	  });
	};	

	
	//--- OWL CAROUSEL FOR HOME SLIDER ---//
	var time = 7; // time in seconds

	var $progressBar,
	  $bar, 
	  $elem, 
	  isPause, 
	  tick,
	  percentTime;

	//Init the carousel
	$("#owl-home").owlCarousel({
	  slideSpeed : 500,
	  paginationSpeed : 500,
	  singleItem : true,
	  afterInit : progressBar,
	  afterMove : moved,
	  startDragging : pauseOnDragging
	});

	//Init progressBar where elem is $("#owl-demo")
	function progressBar(elem){
	  $elem = elem;
	  //build progress bar elements
	  buildProgressBar();
	  //start counting
	  start();
	};

	//create div#progressBar and div#bar then prepend to $("#owl-demo")
	function buildProgressBar(){
	  $progressBar = $("<div>",{
		id:"progressBar"
	  });
	  $bar = $("<div>",{
		id:"bar"
	  });
	  $progressBar.append($bar).prependTo($elem);
	};

	function start() {
	  //reset timer
	  percentTime = 0;
	  isPause = false;
	  //run interval every 0.01 second
	  tick = setInterval(interval, 10);
	};

	function interval() {
	  if(isPause === false){
		percentTime += 1 / time;
		$bar.css({
		   width: percentTime+"%"
		 });
		//if percentTime is equal or greater than 100
		if(percentTime >= 100){
		  //slide to next item 
		  $elem.trigger('owl.next')
		}
	  }
	};

	//pause while dragging 
	function pauseOnDragging(){
		isPause = true;
	};

	//moved callback
	function moved(){
		//clear interval
		clearTimeout(tick);
		//start again
		start();
	};

	//uncomment this to make pause on mouseover 
	// $elem.on('mouseover',function(){
	//   isPause = true;
	// })
	// $elem.on('mouseout',function(){
	//   isPause = false;
	// })
	
	
	//--- OWL CAROUSEL FOR BLOG SLIDER ---//
	var owl = $("#owl-blog");
	 
	owl.owlCarousel({
		loop: true,
		items : 2, //2 items above 1000px browser width
		itemsDesktop : [1000,2], //2 items between 1000px and 901px
		itemsDesktopSmall : [900,1], // betweem 900px and 601px
		itemsTablet: [600,1], //2 items between 600 and 0
		itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});

	// Custom Navigation Events
	$(".next-blog").click(function(){
		owl.trigger('owl.next');
	})
	$(".prev-blog").click(function(){
		owl.trigger('owl.prev');
	});
	
	
	//--- BLOG NAVIGATION HOVER ADD-REMOVE CLASS ---//
	$(".prev-blog").hover(function(){
		$(".prev-blog").addClass("blogPrevHover");
	},function(){
		$(".prev-blog").removeClass("blogPrevHover");
	});
	$(".next-blog").hover(function(){
		$(".next-blog").addClass("blogNextHover");
	},function(){
		$(".next-blog").removeClass("blogNextHover");
	});
	
	
	//--- ITEM NAVIGATION HOVER ADD-REMOVE CLASS ---//
	$(".prev-item").hover(function(){
		$(".prev-item").addClass("itemPrevHover");
	},function(){
		$(".prev-item").removeClass("itemPrevHover");
	});
	$(".next-item").hover(function(){
		$(".next-item").addClass("itemNextHover");
	},function(){
		$(".next-item").removeClass("itemNextHover");
	});
	
	
	//--- PORTFOLIO NAVIGATION HOVER ADD-REMOVE CLASS ---//
	$(".portfolioGalleryNavigation .prev-item").hover(function(){
		$(".portfolioGalleryNavigation .prev-item").addClass("portfolioPrevHover");
	},function(){
		$(".portfolioGalleryNavigation .prev-item").removeClass("portfolioPrevHover");
	});
	$(".portfolioGalleryNavigation .next-item").hover(function(){
		$(".portfolioGalleryNavigation .next-item").addClass("portfolioNextHover");
	},function(){
		$(".portfolioGalleryNavigation .next-item").removeClass("portfolioNextHover");
	});
	
	
	//--- OWL CAROUSEL FOR TEAM SLIDER ---//
	var owlTeam = $("#owl-team");
 
	owlTeam.owlCarousel({
		loop: true,
		items : 1, //2 items above 1000px browser width
		itemsDesktop : [1000,2], //2 items between 1000px and 901px
		itemsDesktopSmall : [900,1], // betweem 900px and 601px
		itemsTablet: [600,1], //2 items between 600 and 0
		itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});

	// Custom Navigation Events
	$(".next-team").click(function(){
		owlTeam.trigger('owl.next');
	});
	$(".prev-team").click(function(){
		owlTeam.trigger('owl.prev');
	});
	
	
	//--- TEAM NAVIGATION HOVER ADD-REMOVE CLASS ---//
	$(".prev-team").hover(function(){
		$(".prev-team").addClass("teamPrevHover");
	},function(){
		$(".prev-team").removeClass("teamPrevHover");
	});
	$(".next-team").hover(function(){
		$(".next-team").addClass("teamNextHover");
	},function(){
		$(".next-team").removeClass("teamNextHover");
	});
	
	
	//--- CARD FLIP ADD-REMOVE CLASS ---//
	$(".flip").hover(function(){
		$(this).find(".card").toggleClass("flipped");
		return false;
	});
	
	
	//--- STICKY FUNCTIONS ---//
	if (!!$('.sticky').offset()) { // make sure ".sticky" element exists
	
		var stickyTop = $('.sticky').offset().top; // returns number 
		
		$(window).scroll(function(){ // scroll event
		
		var windowTop = $(window).scrollTop(); // returns number 

		if (stickyTop < windowTop){
				var sX = $('.sticky').width();
			$('.sticky').css({ position: 'fixed', top: 0, width: sX });
		}
		else {
			$('.sticky').css('position','static');
			$('.sticky').css({ width: '' });
			}
		});
	};
	
	
	//--- MOBILE MENU FUNCTIONS ---//
	$(".menu-list li .subMenuExpand").bind("click", function() {
		$(this).parent().children('.subMenu').slideToggle("700", "easeOutSine");
		$(this).parent().children('.subMenuLeft').slideToggle("700", "easeOutSine");
	});
	$(".menu-list li .subMenu .subMenuExpand").bind("click", function() {
		$(this).parent().children('.subMenuSecond').slideToggle("700", "easeOutSine");
	});
	
	// Maximum Height Calculate for Mobile Menu
	var windowWidth2 = $(window).width();
	var windowHeight2 = $(window).height();
	var listHeight2 = $(".menu-list").height();
	
	if(windowWidth2 <= 1023) {
		$(".menu .menu-list").css("max-height", windowHeight2 - 120);
	} else {
		$(".menu .menu-list").css("max-height", "");
	};
	
	
	//--- RESPONSIVE TABS ---//
	'use strict';

	$(document).on('show.bs.tab', '.nav-tabs-responsive [data-toggle="tab"]', function(e) {
		var $target = $(e.target);
		var $tabs = $target.closest('.nav-tabs-responsive');
		var $current = $target.closest('li');
		var $parent = $current.closest('li.dropdown');
			$current = $parent.length > 0 ? $parent : $current;
		var $next = $current.next();
		var $prev = $current.prev();
		var updateDropdownMenu = function($el, position){
		  $el
			.find('.dropdown-menu')
			.removeClass('pull-xs-left pull-xs-center pull-xs-right')
			.addClass( 'pull-xs-' + position );
		};

		$tabs.find('>li').removeClass('tab-next tab-prev');
		$prev.addClass('tab-prev');
		$next.addClass('tab-next');

		updateDropdownMenu( $prev, 'left' );
		updateDropdownMenu( $current, 'center' );
		updateDropdownMenu( $next, 'right' );
	});

  
});


//--- PARALLAX IMAGES ---//
parallaxOperations = function () {
	if (!Modernizr.touch) {
		var heightWindow = $(window).height();
		var topWindow = $(window).scrollTop();
		var bottomWindow = topWindow + heightWindow;
		var currentWindow = (topWindow + bottomWindow) / 2;
		
		$('.parallax').each(function () {
			var path = $(this);
			var height = path.height();
			var top = path.offset().top;
			var bottom = top + height;
			// only when in range
			//alert('botttomW:'+bottomWindow+'---top:'+top+'---topWindow:'+topWindow);
			
			if (bottomWindow > top && topWindow < bottom) {
				var imgW = path.attr("data-img-width");
				var imgH = path.attr("data-img-height");
				// min when image touch top of window
				var min = 0;
				// max when image touch bottom of window
				var max = -imgH + heightWindow;
				// overflow changes parallax
				var overflowH = height < heightWindow ? imgH - height : imgH - heightWindow; // fix height on overflow
				top = top - overflowH;
				bottom = bottom + overflowH;
				// value with linear interpolation
				var value = min + (max - min) * (currentWindow - top) / (bottom - top);
				// set background-position
				var orizontalPosition = path.attr("data-oriz-pos");
				orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
				path.css("background-position", orizontalPosition + " " + value + "px");
			}
		});
	}
};

parallaxOperations();


//--- WINDOW SCROLL ---//
$(window).scroll(function(){
	parallaxOperations();
    $(".scrollFade").css("opacity", 1 - $(window).scrollTop() / 500);
	$(".pageHeader .pageTitle, .pageHeader .pageSubTitle").css("opacity", 1 - $(window).scrollTop() / 150);
	var opValue = $(window).scrollTop() / 800;
	if(opValue > 0.7)
		$(".headerBg").css("opacity", 0.8);
	else
		$(".headerBg").css("opacity", $(window).scrollTop() / 800);
});
  

//--- STICKY RESIZE FUNCTION ---//
$(window).bind("resize", function() {
	var sY = $('.stickyWrapper').width();
	$('.sticky').css({ width: sY });
  				
});


//--- MOBILE MENU RESIZE FUNCTIONS ---//
$(window).bind("resize", function(){
	
	var menuStatus = $(".show-menu");
		if(menuStatus.length) {
		   
		} else {
		   $(".menu .menu-list").css({"display": "none" });
		}
	
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var listHeight = $(".menu-list").height();
	
	if(windowWidth <= 1023) {
		$(".menu .menu-list").css("max-height", windowHeight - 120);
	} else {
		$(".menu .menu-list").css({"max-height": "", "display": "block"});
	}	
});
