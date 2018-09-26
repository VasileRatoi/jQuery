var images = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg'
];
var slide = 1;
$('body').prepend('<div>');
$('div').append('<img>');
$('div').append('<a>');
$('div').append('<a>');
$('img').attr('src', images[slide]);
$('a').attr('href', '#');
$('a:first').addClass('arrow prev').text(`PREV`).click(function(){
    if(slide == 0){        
        slide = 2;
        $('img').attr('src', images[slide]);
    }else{
        slide--;
        $('img').attr('src', images[slide]);
    }    
});
$('a:last').addClass('arrow next').text('NEXT').click(function(){
    if(slide == 2){
        slide = 0;
        $('img').attr('src', images[slide]);
    }else{
        slide++;
        $('img').attr('src', images[slide]);
    }
    
});
console.log(slide);