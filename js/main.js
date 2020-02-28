$('.signUpBtn').on('click', () => {
	$('.signUpPopupWr').fadeIn(500);
});


$('.signUpPopupClose').on('click', () => {
	$('.signUpPopupWr').fadeOut(500);
});


$('.signUpPopupCross').on('click', () => {
	$('.signUpPopupWr').fadeOut(500);
});
	
$('.signInBtn').on('click', () => {
	$('.signInPopupWr').fadeIn(500);
});

$('.signInPopupClose').on('click', () => {
	$('.signInPopupWr').fadeOut(500);
});

$('.signInPopupCross').on('click', () => {
	$('.signInPopupWr').fadeOut(500);
});	
 

var inputs = document.querySelectorAll('.newOrderAddPhoto');
Array.prototype.forEach.call(inputs, function(input){
  var label	 = input.nextElementSibling,
      labelVal = label.innerHTML;
  input.addEventListener('change', function(e){
    var fileName = '';
    if( this.files && this.files.length > 1 )
    {
		fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
		if( fileName )
			label.querySelector( 'span' ).innerHTML = fileName;
		else
		{
			label.innerHTML = labelVal;
		}
    }
    else
    {
		fileName = e.target.value.split( '\\' ).pop();
		if( fileName )
			label.querySelector( 'span' ).innerHTML = fileName;
		else
		{
			label.innerHTML = labelVal;
		}
	}
    
	});
});