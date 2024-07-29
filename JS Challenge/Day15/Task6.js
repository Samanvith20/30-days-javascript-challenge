const itemcollection = function manageitems() {
    let items = [];
    return {
        additem: function(item) {
            items.push(item);
        },
        getitems: function() {
            return items;
        },
        removeitem: function(item) {
            items = items.filter(function(value) {
                return value !== item;
            });
        }
    };
};

const myItems = itemcollection(); 

myItems.additem("pizza");
myItems.additem("burger");
myItems.additem("coke");
console.log(myItems.getitems());
myItems.removeitem("burger");
console.log(myItems.getitems()); 
