sushiApp.controller("checkoutController", function ($scope, sushiFactory, $controller) {
    $scope.contents = sushiFactory.cart.items;
    $scope.cart = sushiFactory.cart;
});