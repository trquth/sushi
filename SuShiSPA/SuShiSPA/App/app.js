var sushiApp = angular.module("sushiApp",["ngRoute"]);
sushiApp.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/", {
        title: "Sushiesss",
        templateUrl: "App/partials/products.html",
        controller: "homeController"
    }).when("/detail-product/:productId", {
        title: "Sushi",
        templateUrl: "App/partials/product.html",
        controller: "detailController",
        resolve: {
            product: function (sushiFactory, $route) {
                var Id = $route.current.params.productId;
                var TheSscRequest = {
                    CallerKey: "Not Use Now",
                    CommandId: -10,
                    RequestParams:
                        [{
                            "Id": Id
                        }]
                }
                //jsonDataObj = JSON.stringify(object);
                return sushiFactory.getProduct(TheSscRequest).then(function (response) {
                    return  response.data;
                });
            }
        }
    }).otherwise({
        redirectTo: "/"
    });
}])
sushiApp.config(['$httpProvider', function ($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    // Intercept POST requests, convert to standard form encoding
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $httpProvider.defaults.transformRequest.unshift(function (data, headersGetter) {
        var key, result = [];

        if (typeof data === "string")
            return data;
        for (key in data) {
            if (data.hasOwnProperty(key))
                result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
        }
        return result.join("&");
    });
}]);