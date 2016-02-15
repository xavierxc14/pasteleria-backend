var app = angular.module('Prueba', ['ui.router', 'ngAnimate', 'ngResource', 'toastr']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            controller: 'HomeController',
            templateUrl: 'rutas/home.html'
        })
        .state('nuevousuario', {
            url: '/nuevousuario',
            controller: 'NuevoUsuarioController',
            templateUrl: 'rutas/nuevo.html'
        })
        .state('pastel', {
            url: '/:idUsuario/pastel',
            controller: 'PastelController',
            templateUrl: 'rutas/pastel.html'
        });
});
