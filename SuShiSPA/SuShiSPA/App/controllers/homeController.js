sushiApp.controller("homeController", function ($scope, sushiFactory, $controller) {
    $controller('shoppingCartController', { $scope: $scope });
    sushiFactory.getProducts().then(function (response) {
        $scope.products = response.data.ResponseData;        
    }, function (error) {       
        console.log("Error");
    });
});