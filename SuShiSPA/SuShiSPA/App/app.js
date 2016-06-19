var sushiApp = angular.module("sushiApp",["ngRoute"]);
sushiApp.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/", {
        title: "Sushi App",
        templateUrl: "App/partials/products.html",
        controller: "homeController"
    })
    .otherwise({
        redirectTo: "/"
    });
}])