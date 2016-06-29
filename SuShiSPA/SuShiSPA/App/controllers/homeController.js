sushiApp.controller("homeController", function ($scope, sushiFactory) {
    sushiFactory.getProducts().then(function (response) {
        $scope.products = response.data.ResponseData;        
    }, function (error) {       
        console.log("Error");
    });
});