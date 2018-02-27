var mainAngular = angular.module('rhApp',['ngRoute']);
 
mainAngular.config(function ($routeProvider, $locationProvider) {
    //$locationProvider.html5MOde(true); //Enable href routing without hashes
    
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
        .when('/event-decor',{
            templateUrl: './pages/gallery/event-decor.html'
        })
        .when('/jess-marc',{
            templateUrl: './pages/gallery/jess-marc.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
 
    $locationProvider.hashPrefix('');
 
});