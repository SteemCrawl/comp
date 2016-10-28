function setBranding() {
	$('#branding').css({
		'display': 'block',
		'position': 'absolute',
		'top': ($('body').height() - 30) + 'px'
	});
}

$(window).resize(setBranding);

$(document).ready(function() {
	setBranding();
});