
// DATABASE
var offers = [
    {
        title: 'Vacation to Neverland!',
        destination: 'New York',
        period: {
            from: '2018-10-5',
            to: '2018-10-10'
        },
        photos: [
            'http://piscum.photos/400/300?image=1'
        ],
        price: 1000
    },
    {
        title: 'One family holiday!',
        destination: 'London',
        period: {
            from: '2019-01-01',
            to: '2019-01-10'
        },
        photos: [
            'http://piscum.photos/400/300?image=2'
        ],
        price: 2000
    },
    {
        title: 'Go alone!',
        destination: 'Chisinau',
        period: {
            from: '2020-01-01',
            to: '2021-01-01'
        },
        photos: [
            'http://piscum.photos/400/300?image=3'
        ],
        price: 100000
    },
    {
        title: 'Go alone 2!',
        destination: 'Chisinau',
        period: {
            from: '2021-01-01',
            to: '2022-01-01'
        },
        photos: [
            'http://piscum.photos/400/300?image=3'
        ],
        price: 100000
    }
];

// LOGIC
function showTeasers( name ){
    var $offers_div = $('#offers');
    $offers_div.empty(); // elimina copiii elementului
    $( offers ).each(function(i,offer){
        if( name === undefined || 
            name.length == 0 || 
            offer.destination.toLowerCase().startsWith( name.toLowerCase() ) 
        ){     
            $offers_div.append(
                $( '<div>' ).append(
                    $( '<h3>' ).html(
                        $('<a>')
                            .html( offer.title + ' <small>' + offer.period.from + ' - '+ offer.period.to + '</small>' )
                            .attr('href', '#')
                            .on('click', showFull)
                            .data('i', i)
                    )
                )
            );
        }   
    });
}

function showFull(){
    var i =$(this).data('i');
    var offer = offers[i];
    alert(offer.title);
}

$('#filters input').on('keyup', function(){
    var name = $(this).val();
    showTeasers( name );
})


showTeasers();