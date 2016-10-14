$(document).ready(function(){


});

// single state variable
var state = {
    items: []
};

// state modification functions
var addItem = function(state, item) {
    state.items.push(item);
};

var deleteItem = function(state, item) {


var i = state.items.indexOf(item[0].firstChild.innerText);
        if(i != -1) {
        state.items.splice(i, 1);
        }
};

var toggleCheck = function(item) {
    item.toggleClass('shopping-item__checked');
}


// render functions
var renderList = function(state, element) {

var itemsHTML = state.items.map(function(item){
    return '<li><span class="shopping-item">'+item+'</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'
})

    element.html(itemsHTML);
};

// event listeners
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    renderList(state, $('.shopping-list'));
});

//on click of delete item
$('.shopping-list').on('click', '.shopping-item-delete', function() {
    event.preventDefault();
    deleteItem(state, $(this).closest('li'));
    renderList(state, $('.shopping-list'));
});

//on click of item toggle (check item off list)
$('.shopping-list').on('click', '.shopping-item-toggle', function() {
    toggleCheck($(this.closest('li')));
});