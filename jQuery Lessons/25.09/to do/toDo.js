function addButton(parent_selector){
    $(parent_selector).append(
        $('<button>')
            .text('save')
            .addClass('btn green')
            .click(function(){
                alert( $('input').val() );
            })
    );
}

function addInput(parent_selector){
    $(parent_selector).append(
        // $('<input>', {
        //     class: 'name',
        //     placeholder: 'Type here your name'
        // })
        $('<input>')
            .attr('placeholder', 'Type your name here')
            .addClass('name')
    );
}


addInput('body');
addButton('body');