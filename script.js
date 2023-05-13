jQuery(document).ready(function($) {
	let input = $('.input');	
	let btn = $('.main__button');
	let main = $('.main');

	btn.click(function(event) {
		main.css('backgroundColor', input.val());
		if (input.val() == 'black') {
			$('.main__button a').css({
				color: 'white',
				border: '3px solid white'
			});
		}else{
			$('.main__button a').css({
				color: 'black',
				border: '3px solid black'
			});
		}
	});
	
	
});
