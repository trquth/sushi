﻿sushiApp.factory("sushiFactory", ["$http", function ($http) {
    var serviceBase = "http://localhost:49663/api/product/";
    var obj = {};
    obj.getProducts = function (data) {
        return $http.post(serviceBase + "getlistproducts", data)}
    obj.getProduct = function (data) {
        return $http.post(serviceBase + "getproductbyId", data);
    }
    return obj;
}]);