$('.signUpBtn').on('click', () => {
	$('.signUpPopupWr').fadeIn(500);
});

$('.signInBtn').on('click', () => {
	$('.signInPopupWr').fadeIn(500);
});

$('.signUpPopupClose').on('click', () => {
	$('.signUpPopupWr').fadeOut(500);
});

$('.signInPopupClose').on('click', () => {
	$('.signInPopupWr').fadeOut(500);
});

$('.signUpPopupCross').on('click', () => {
	$('.signUpPopupWr').fadeOut(500);
});	

$('.signInPopupCross').on('click', () => {
	$('.signInPopupWr').fadeOut(500);
});	
 