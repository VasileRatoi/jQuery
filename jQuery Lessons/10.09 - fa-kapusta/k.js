//Determinam cind apare evenimentul modal
$('#customer-cart').on('shown.bs.modal', function(){
    setTimeout(function(){
        $('.modal-body')
            .append($('<p>')
            .text('Publicitate'));
    }, 2000);
})


// cand apasa pe a din dropdwn sa apara alert

$('#customer-cart .dropdown-menu a').on('click', function(){
    var q = $(this).text();
    $('#customer-cart .dropdown button .q').text(q);

    var price = $('.price').text();
    $('.total').html(price * q);
});

// this ->parent()/closest() -> find(selector)