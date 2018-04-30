$(window).on('load', function () {
	// external js: masonry.pkgd.js
	var grid = document.querySelector('.grid');
	var msnry = new Masonry( grid, {
	  columnWidth: 120,
	  itemSelector: '.grid-item'
	});

	grid.addEventListener( 'click', function( event ) {
	  // don't proceed if item content was not clicked on
	  if ( !matchesSelector( event.target, '.grid-item-content' )  ) {
	    return;
	  }
	  var itemElem = event.target.parentNode;
	  itemElem.classList.toggle('is-expanded');
	  msnry.layout();
	});

	location.reload();
});