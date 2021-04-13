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
	console.log('index loaded')
	$("#robofr-thumb").attr("src", `https://robohash.org/${id}?200x200`)
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