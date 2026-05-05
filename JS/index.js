/*ロード画面が３秒で消える*/
window.addEventListener('load', function(){
	setTimeout(function(){
		const loader = document.getElementById('Loading');
		loader.classList.add('loaded');
	}, 3000);
});


$(document).ready(function() {
	$('#multiscroll').multiscroll({
		licenseKey: 'OPEN-SOURCE-GPLv3-LICENSE',
		verticalCentered: true,
		scrollingSpeed: 1000,
		touchSensitivity: 50,
		easing: 'easeInQuart' 
		css3: true
	});
});
