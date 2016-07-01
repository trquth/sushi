sushiApp.controller("shoppingCartController", function ($scope, sushiFactory) {
    $scope.items = [];
    $scope.addToCart = function (product,quantity) {
        addItem(product, quantity);
    }
    // load items from local storage
    //shoppingCart.prototype.loadItems = function () {
    //    var items = localStorage != null ? localStorage[this.cartName + "_items"] : null;
    //    if (items != null && JSON != null) {
    //        try {
    //            var items = JSON.parse(items);
    //            for (var i = 0; i < items.length; i++) {
    //                var item = items[i];
    //                if (item.sku != null && item.name != null && item.price != null && item.quantity != null) {
    //                    item = new cartItem(item.sku, item.name, item.price, item.quantity);
    //                    this.items.push(item);
    //                }
    //            }
    //        }
    //        catch (err) {
    //            // ignore errors while loading...
    //        }
    //    }
    //}

    // save items to local storage
    saveItems = function () {
        if (localStorage != null && JSON != null) {
            localStorage[this.cartName + "_items"] = JSON.stringify(items);
        }
    }

    // adds an item to the cart
    function addItem(product,quantity) {
        quantity = toNumber(quantity);
        if (quantity != 0) {

            // update quantity for existing item
            var found = false;
            for (var i = 0; i < $scope.items.length && !found; i++) {
                var item = $scope.items[i];
                if (item.sku == sku) {
                    found = true;
                    item.quantity = toNumber(item.quantity + quantity);
                    if (item.quantity <= 0) {
                        $scope.items.splice(i, 1);
                    }
                }
            }

            // new item, add now
            if (!found) {
                var item = new cartItem(product, quantity);
                $scope.items.push(item);
            }

            // save changes
           saveItems();
        }
    }
    function toNumber(value) {
        value = value * 1;
        return isNaN(value) ? 0 : value;
    }
    function cartItem(product, quantity) {
        product = product;
        quantity = quantity * 1;
    }
});