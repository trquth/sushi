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
sushiApp.config(function ($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
});