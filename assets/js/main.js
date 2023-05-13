/*
	Strongly Typed by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			hoverDelay: 150,
			hideDelay: 350
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);


//animation
const scrollOffset = 100;

const scrollElements = document.querySelector('.flex-container');

// scrollElements.forEach((el) => {
// 	el.style.opacity = 0
// })

//Function to determine how far the element is from the page

const elementInView = (el, offset = 0) => {
	const elementTop = el.getBoundingClientRect().top;

	return (
		elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - (offset))
	);
};

//function to handle displaying the element

const displayScrollElement = () => {
	scrollElement.classList.add('scrolled');
};

//then combine logic with display function to call function on all containers
const hideScrollElement = () => {
	scrollElement.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
	if (elementInView(scrollElement, scrollOffset)) {
		displayScrollElement();
	}else{
		hideScrollElement();
	}
}

//lastly we pass the above method into a scroll event listener on the window so it runs whenever the user scrolls

window.addEventListener('scroll', () => {
	handleScrollAnimation();
});