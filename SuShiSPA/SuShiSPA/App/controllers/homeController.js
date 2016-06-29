sushiApp.controller("homeController", function ($scope, sushiFactory,product) {
    var object =JSON.stringify({
        "CallerKey": "Not Use Now",
        "CommandId": -1,
        "RequestParams":
            []
    })
    jsonDataObj = JSON.stringify(object);
    sushiFactory.getProducts(jsonDataObj).then(function (response) {
        $scope.products = response.data.ResponseData;        
    }, function (error) {       
        console.log("Error");
    });
});