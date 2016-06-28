var sushiApp = angular.module("sushiApp", ["ngRoute"]);
sushiApp.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/", {
        title: "Sushiesss",
        templateUrl: "App/partials/products.html",
        controller: "homeController"
    }).when("/detail-product/:productId", {
        title: "Sushi",
        templateUrl: "App/partials/detailproduct.html",
        controller: "detailController",
        resolve: {
            //product: ["sushiFactory", "$route", function (sushiFactory, $route) {
            //    var Id = $route.current.params.productId;
            //    var TheSscRequest = {
            //        CallerKey: "Not Use Now",
            //        CommandId: -10,
            //        RequestParams:
            //            [{
            //                "Id": Id
            //            }]
            //    }
            //    //jsonDataObj = JSON.stringify(object);
            //    return TheSscRequest;
            //    //return sushiFactory2.getProduct(TheSscRequest).then(function (response) {
            //    //    return  response.data;
            //    //});
            //}]

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
    //$httpProvider.defaults.transformRequest.unshift(function (data, headersGetter) {
    //    var key, result = [];

    //    if (typeof data === "string")
    //        return data;
    //    for (key in data) {
    //        if (data.hasOwnProperty(key))
    //            result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
    //    }
    //    return result.join("&");
    //});




    /**
     * The workhorse; converts an object to x-www-form-urlencoded serialization.
     * @param {Object} obj
     * @return {String}
     */
    var param = function (obj) {
        var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

        for (name in obj) {
            value = obj[name];

            if (value instanceof Array) {
                for (i = 0; i < value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if (value instanceof Object) {
                for (subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if (value !== undefined && value !== null)
                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }

        return query.length ? query.substr(0, query.length - 1) : query;
    };

    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function (data) {
        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
}]);