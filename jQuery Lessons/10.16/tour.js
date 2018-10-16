var offers           = [];
const TOTAL_OFFERS   = 100; 
const PER_PAGE       = 10; //reultate pe pagina

//generam oferte
function generateOffers(){
    for(var i = 1; i <= 100; i++){
        var city = faker.address.city();
        offers.push({
            title: faker.lorem.sentence(5) + ' ' + city,
            destination: city,
            description: faker.lorem.paragraph(30),
            cover: 'https://picsum.photos/300/200?image=' + faker.random.number(100),
            date_from: faker.date.between('2018-01-01', '2018-04-01'),
            date_to: faker.date.between('2018-04-01', '2018-07-01'),
            price: faker.commerce.price(200, 3000)
        });
    }
}

function generatePager(){
    for(var i = 1; i <= TOTAL_OFFERS/PER_PAGE;i++){
        $('.w3-border a:last')
            .before($('<a>')
                .attr('href', '#')
                .addClass('w3-bar-item w3-button')
                .html(i)
                .on('click', function(){
                    var $page = $(this).text();
                    showPage($page);
                    $(this).parent().find('a').removeClass('w3-green');
                    $(this).addClass('w3-green');                    
                }
            ));
    }
}

// JSDoc
/**
 * Arata o pagina
 * @param p - reprezinta numarul paginii
 */
function showPage( p ){
    $offers = $('.offers');
    $offers.empty();
    for( var i = (p-1)*10; i < p*10; i++ ){
        $offers.append(
            $('<div>').append(
                [
                    $('<h2>').html( offers[i].title ),
                    $('<img>').attr('src', offers[i].cover),
                    $('<p>').append($('<strong>').html(offers[i].price)),
                    $('<hr>')
                ]
            )
            
        );
    }
}


generateOffers();
generatePager();
showPage(1);

//console.table( offers );