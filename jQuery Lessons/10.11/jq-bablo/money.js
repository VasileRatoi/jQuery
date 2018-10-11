const SERVICE_URL = 'http://api.pdflayer.com/api/convert';
const SERVICE_KEY = '4d42aa6779dcd05a62a24c15889b46a5';



function init(){
    disableButton();
    watchInput();
    watchButton();
}
function getPdf(url){
    $.get( SERVICE_URL + '?access_key=' 
         + SERVICE_KEY + '&document_url=' + url 
        ).done(function(data){
            // console.log(data);
            var encoded = URL.createObjectURL(data);
            $('body').append($('<iframe>').attr('src', encoded));
        }).fail(function(data){
            console.error(data);
         });

}
function watchButton(){
    $('button').on('click', function(e){
        e.preventDefault();
        var url = $('input').val();
        getPdf(url);
    });
}
function disableButton(){
    $('button').attr('disabled', true);
}
function enableButton(){
    $('button').attr('disabled', false);
}
function watchInput(){
    $('input').on('keyup paste', function(){
        var url = $(this).val();
        if( url.length > 10 ){
            enableButton();
        }else{
            disableButton();
        }
    });
}

init();
