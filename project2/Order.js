// AJAX Project 2
// Sarah Omernik

function Order() {
    var that = this;
    var items = {};
    this.total = 0;

    this.addItem = function (burrito) {
        var id = burrito.id;
        var price = burrito.price;

        items[id] = burrito;
        that.total += price;

    }

    this.removeItem = function(id) {

        that.total -= items[id].price;
        delete items[id];
    }

}