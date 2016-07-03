sushiApp.controller("detailController", ["$scope", "$rootScope", "$location", "$routeParams", "sushiFactory", "product", function ($scope, $rootScope, $location, $routeParams, sushiFactory, product) {
    //var Id = $routeParams.productId;
    //sushiFactory.getProduct(Id).then(function (response) {
    //    if (response.data.ResponseData.length != 0) {
    //        $scope.product = angular.copy(response.data.ResponseData[0]);
    //    } else {
    //        $scope.product = null;
    //    }
    //});
    if (product.data.ResponseData.length != 0) {
        $scope.product = angular.copy(product.data.ResponseData[0]);
    } else {
        $scope.product = null;
    }
    $scope.nextproduct = function (product) {
        sushiFactory.getNextProduct(product.Id).then(function (response) {
            $scope.product = response.data.ResponseData[0];
        });
    }
    $scope.previousproduct = function (product) {
        sushiFactory.getPreviousProduct(product.Id).then(function (response) {
            $scope.product = response.data.ResponseData[0];
        });
    }
    // get store and cart from service
    $scope.cart = sushiFactory.cart;
}]);