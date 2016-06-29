sushiApp.controller("detailController", ["$scope", "$rootScope", "$location", "$routeParams","sushiFactory", "product", function ($scope, $rootScope, $location, $routeParams, sushiFactory, product) {
    //var Id = $routeParams.productId;
    //sushiFactory.getProduct(Id).then(function (response) {
    //    if (response.data.ResponseData.length != 0) {
    //        $scope.product = angular.copy(response.data.ResponseData[0]);
    //    } else {
    //        $scope.product = null;
    //    }
    //});
    $scope.product = product.data.ResponseData[0];
}]);