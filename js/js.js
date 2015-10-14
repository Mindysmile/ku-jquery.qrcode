$(function(){
	var text = 'https://github.com/iq9891';
	jQuery('#qrcode').qrcode({
		
		text    : text,
		render    : "canvas",  // 'canvas' or 'table'. Default value is 'canvas'
		background : "#ffffff",
		foreground : "#565356"
	});
	$("canvas").css("height", "auto");
});