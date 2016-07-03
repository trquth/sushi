sushiApp.controller("itemsCartController", function ($scope, sushiFactory) {
    
    $scope.contents = sushiFactory.cart.items;
    
});