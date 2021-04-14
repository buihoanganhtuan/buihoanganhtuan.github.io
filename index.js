//const buttons = document.getElementsByClassName('zone');
// const roboImg = document.getElementById('robofr-thumb');
// const buttonsAbout = document.querySelectorAll('#nav-about > button');

// const onClickGenerator = (i) => {
//     return (event) => {
//         console.log(`${i} was clicked`);
//     }
// }

// const onAboutBtnClick = (event) => {
// 	for (btn of buttonsAbout) {
// 		if (btn.getAttribute('id') !== event.target.getAttribute('id')) {
// 			btn.classList.remove('btn-primary');
// 			btn.classList.add('btn-secondary');
// 		} else {
// 			btn.classList.remove('btn-secondary');
// 			btn.classList.add('btn-primary');			
// 		}
// 	}
// }

$(document).ready(() => {	
	let id = Math.floor(Math.random() * 1000) + 1;
	$("#robofr-thumb").attr("src", `https://robohash.org/${id}?200x200`)

	$(".thumbnail-with-text").mouseenter(function() {
		let id = '#' + $(this).attr('id').replace('thumb','') + 'speech';
		$(id).fadeIn("fast");
	})
	.mouseleave(function() {
		let id = '#' + $(this).attr('id').replace('thumb','') + 'speech';
		$(id).fadeOut(0);
	})

	$(window).resize(function() {
		const resourceGridWrapper = $("#resources");
		const numChild = resourceGridWrapper.children().length;
		const contentWidth = resourceGridWrapper.width();
		const outerWidth = resourceGridWrapper.outerWidth(true);
		const innerWidth = resourceGridWrapper.innerWidth();
		const margin = outerWidth - resourceGridWrapper.outerWidth();
		let pad = 0;
		console.log(margin)
		let numItems = Math.floor((innerWidth + 10) / (250 + 10));
		if (numItems > numChild) {
			pad = (outerWidth - margin - ( 250*numChild + (numChild - 1)*10 )) / 2;
			resourceGridWrapper.css('padding-left', pad);
			resourceGridWrapper.css('padding-right', pad);			
		} else {
			const contentWidth = resourceGridWrapper.width();
			if (contentWidth < 250) {
				pad = (outerWidth - margin - 250) / 2;
				resourceGridWrapper.css('padding-left', pad);
				resourceGridWrapper.css('padding-right', pad);
			}
		}
	})
}
)

// for (btn of buttonsAbout) {
// 	btn.addEventListener('click', onAboutBtnClick);
// }

// for (let i = 0; i < buttons.length; i++) {
//     buttons.item(i).addEventListener('click', (onClickGenerator(i + 1)) );
// }

/*
https://www.w3schools.com/jquery/jquery_syntax.asp
*/