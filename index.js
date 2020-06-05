$(document).ready(function(){
    $('#js-shopping-list-form').submit(function(event){

        //Stop form submission
        event.preventDefault();
        
        // add new item to bottom of list
        $('.shopping-list').append(
            '<li>' +
              '<span class="shopping-item">' + $("#shopping-list-entry").val() + '</span>' +
              '<div class="shopping-item-controls">' +
                '<button class="shopping-item-toggle">' +
                  '<span class="button-label">check</span>' +
                '</button>' +
                '<button class="shopping-item-delete">' +
                  '<span class="button-label">delete</span>' +
                '</button>' +
              '</div>' +
            '</li>'
        );
        // remove the submitted item from the form input
        $(this)[0].reset(); 
    });
    
    //delete items from list
    $('.shopping-list').on('click', '.shopping-item-delete', function(){

        $(this).closest('li').remove();
    });

    //toggle checked items
    $('.shopping-list').on('click', '.shopping-item-toggle', function(){
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

});