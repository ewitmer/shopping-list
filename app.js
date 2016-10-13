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
	var i = state.items.indexOf(item);
		if(i != -1) {
		state.items.splice(i, 1);
		}
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

$('.shopping-list').on('click', '.shopping-item-delete', function() {
    event.preventDefault();
    deleteItem(state, //get current value//);  
    renderList(state, $('.shopping-list'));
});

$('.shopping-list').on('click', '.shopping-item-toggle', function() {
  	console.log('working1');
});