$(document).ready(() => {
	$("#nav-about > button").on("click", (event) => {
		const oldBtn = $("#nav-about > button.btn-primary");
		if (oldBtn.get()[0] !== event.target) {
			oldBtn.addClass('btn-secondary').removeClass('btn-primary');
			event.target.classList.remove('btn-secondary');
			event.target.classList.add('btn-primary');
			let oldInfo = oldBtn.attr('id').replace('-btn','');
			let newInfo = event.target.getAttribute('id').replace('-btn','');
			console.log(oldInfo, newInfo)
			$(`#${oldInfo}-para`).hide();
			$(`#${newInfo}-para`).fadeIn("slow");
		}
	});
}
)

/*
https://www.w3schools.com/jquery/jquery_syntax.asp
*/