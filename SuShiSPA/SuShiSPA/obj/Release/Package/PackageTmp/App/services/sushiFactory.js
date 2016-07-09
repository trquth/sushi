sushiApp.factory("sushiFactory", ["$http", function ($http) {
    //var serviceBase = "http://localhost:49663/api/product/";
    var serviceBase = "http://productcorev01.somee.com/api/product/";
    var obj = {};
    obj.getProducts = function () {
        return $http.get(serviceBase + "getlistproductsaj")}
    obj.getProduct = function (id) {
        return $http.get(serviceBase + "getproductbyIdaj" + "?Id=" + id);
    }
    obj.getNextProduct = function (id) {
        return $http.get(serviceBase + "getnextproductbyIdaj" + "?Id=" + id);
    }
    obj.getPreviousProduct = function (id) {
        return $http.get(serviceBase + "getpreviousproductbyIdaj" + "?Id=" + id);
    }
    // create shopping cart
    obj.cart = new shoppingCart("AngularStore");
    return obj;
}]);
