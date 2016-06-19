sushiApp.controller("homeController", function ($scope, sushiFactory) {
    sushiFactory.getProducts().then(function (data) {
        $scope.products = data.data.ResponseData;
    })
});