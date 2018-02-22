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
        .when('/events',{
            templateUrl: './pages/events.html'
        })
        .when('/portfolio',{
            templateUrl: './pages/portfolio.html'
        })
        .when('/kat-james',{
            templateUrl: './pages/gallery/kat-james.html'
        })
        .when('/jess-marc',{
            templateUrl: './pages/gallery/jess-marc.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
 
    $locationProvider.hashPrefix('');
 
});