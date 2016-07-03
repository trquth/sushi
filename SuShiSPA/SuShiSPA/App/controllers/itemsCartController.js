sushiApp.controller("itemsCartController", function ($scope, sushiFactory) {
    
    $scope.contents = sushiFactory.cart.items;
    $scope.cart = sushiFactory.cart;
});