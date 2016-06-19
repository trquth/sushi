sushiApp.factory("sushiFactory", ["$http", function ($http) {
    var serviceBase = "http://productapi.tqtco.com/api/Product/";
    var obj = {};
    obj.getProducts = function () {
        return $http.get(serviceBase+"getproducts")
    }
    return obj;
}]);