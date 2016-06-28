sushiApp.controller("detailController", function ($scope, sushiFactory, product) {
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
    var original = product;
    $scope.product = angular.copy(original);

});