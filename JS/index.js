

/*ロード画面が３秒で消える*/
window.addEventListener('load', function(){
	setTimeout(function(){
		const loader = document.getElementById('Loading');
		loader.classList.add('loaded');
	},3000);
});

$(document).ready(function() {
	if ($(window).width() >=768){
	$('#multiscroll').multiscroll({
		responseWidth: 768,
		easing:'easeInQuart'
	});
	}else{
		$('body').addClass('ms-responsive');
	}
});

$('#multiscroll').multiscroll({
	licenseKey: 'OPEN-SOURCE-GPLv3-LICENSE',
	verticalCentered: true,
	responsiveWidth: 768,
	touchSensitivity: 30
});
