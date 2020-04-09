	/* For NAV */
	let navListing = document.querySelector('.nav__listing');
	let navLI = navListing.getElementsByTagName('li');
	let linkA = navListing.getElementsByTagName('a');
	let actA = document.location.href;

	/* For Right Table */
	let buttonTable = document.querySelector('.rated-score__last-btn');
	let table = document.querySelector('.rated-score__last-table-scroll');


/* Nav */
	for (let i = 0; i < linkA.length; i++){
	if (actA == linkA[i].href) {
	navLI[i].classList.add('act');
	
};
};

/* BTN right table */
	buttonTable.onclick = function() {
		table.classList.toggle('open-table');
	}


/* Like - /*only works on one card*/	

	let heartPoint = document.querySelector('.rated-score__card-point');
	let heart = heartPoint.querySelector('.rated-score__card-like');
	let likesNumber = document.querySelector('.likes-number')

	heart.onclick = function () {
	if (heart.classList.contains('rated-score__card-like-svg')) {
		likesNumber.textContent--;
	} else (likesNumber.textContent++);
	
  	
  	heart.classList.toggle('rated-score__card-like-svg');
};

/* Drag and Drop CARD - /*no normal work*/
	function onDragStart(event) {
	  event
	    .dataTransfer
	    .setData('text/plain', event.target.id);
	}
	function onDragOver(event) {
	  event.preventDefault();
	}
	function onDrop(event) {
	  let id = event
	 	.dataTransfer
	 	.getData('text');

	  let parentItem = document.querySelector('.rated-score__card');
	  let draggableElement = document.getElementById(id);
	  let dropzone = event.target;

	  

	  parentItem.insertBefore(draggableElement,dropzone);
	  
	  event
	 .dataTransfer
	 .clearData();
	}
