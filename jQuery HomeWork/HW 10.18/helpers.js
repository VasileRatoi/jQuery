function loadStyle(url){
    $('head').append(
        $('<link>', {
            rel: 'stylesheet', 
            href: url
        })
    );
}

// coordonate aliatorii
function randCoord(){
    return parseInt(Math.random() * 9.9);
}