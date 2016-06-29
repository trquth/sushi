sushiApp.factory("sushiFactory", ["$http", function ($http) {
    var serviceBase = "http://localhost:49663/api/product/";
    var obj = {};
    var data = [];
    obj.getProducts = function () {
        return $http.get(serviceBase + "getlistproductsaj")}
    obj.getProduct = function (id) {
        return $http.get(serviceBase + "getproductbyIdaj" + "?Id=" + id);
    }
    return obj;
}]);
