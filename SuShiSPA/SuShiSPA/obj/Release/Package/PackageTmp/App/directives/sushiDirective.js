sushiApp.directive("itemscart",function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: false,
        templateUrl: "App/partials/itemscart.html",
    };
});