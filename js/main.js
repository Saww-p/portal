 $(document).ready(function(){
    //Скрыть PopUp при загрузке страницы    
    PopUpHide();
});
//Функция отображения PopUp
function PopUpShow(popupName){
    $("#signInPopup").show();
}

$("#signInBtnn").on("click", function(){
    PopUpShow("#signInPopup");
});

//Функция скрытия PopUp
function PopUpHide(){
    $("#signInPopup").hide();
    $("#signInPopup").show();
    $("#signUpPopup").hide();
}