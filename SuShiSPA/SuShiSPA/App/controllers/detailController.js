sushiApp.controller("detailController", function ($scope, $routeParams, sushiFactory) {
    //var Id = ($routeParams.Id) ? parseInt($routeParams.Id) : 0;
    //var object = JSON.stringify({
    //    "CallerKey": "Not Use Now",
    //    "CommandId": -1,
    //    "RequestParams":
    //        [{
    //            "Id":Id
    //        }]
    //})
    //jsonDataObj = JSON.stringify(object);
    var Id = $routeParams.productId;
    sushiFactory.getProduct(Id).then(function (response) {
        if (response.data.ResponseData.length!=0) {
            $scope.product = angular.copy(response.data.ResponseData[0]);
        } else {
            $scope.product = null;
        }       
    });
    //var original = product;
});