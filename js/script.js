var mainAngular = angular.module('rhApp',['ngRoute', 'ngAnimate']);
 
mainAngular.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/home',{
            templateUrl: './pages/home.html'
        })
        .when('/about',{
            templateUrl: './pages/about.html'
        })
        .when('/contact',{
            templateUrl: './pages/contact.html'
        })
        .when('/services',{
            templateUrl: './pages/services.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
 
    $locationProvider.hashPrefix('');
 
});