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
    var TheSscRequest = {
        CallerKey: "Not Use Now",
        CommandId: -10,
        RequestParams:
            [{
                "Id": Id
            }]
    }
    jsonDataObj = JSON.stringify(TheSscRequest);
    sushiFactory.getProduct(TheSscRequest).then(function (response) {
        $scope.product = angular.copy(response.dat);
    });
    //var original = product;
});