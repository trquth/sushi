sushiApp.factory("sushiFactory", ["$http", function ($http) {
    var serviceBase = "http://localhost:49663/api/product/";
    var obj = {};
    obj.getProducts = function (data) {
        return $http.post(serviceBase + "getlistproducts", data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } })
    }
    return obj;
}]);