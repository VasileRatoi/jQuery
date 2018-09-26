function addForm(parent_selector){
    $(parent_selector).prepend($('<form>'));
    $('form').append('<label>');    
    $('label:first-child').append('<input>');
    $('label:first-child input').attr('type', 'text').attr('id', 'title').attr('placeholder', 'task title');
    
    $('form').append('<label>');  
    $('label:nth-child(2)').append('<input>');
    $('label:nth-child(2) input').attr('type', 'date').attr('id', 'date').attr('placeholder', 'due date');

    $('form').append('<label>');    
    $('label:last-child').text('DONE');  
    $('label:last-child').append('<input>');
    $('label:last-child input').attr('type', 'checkbox').attr('id', 'done');
    

    $('form').append('<button>'); 
    $('button').addClass('btn green').text('save');
}

addForm('body');