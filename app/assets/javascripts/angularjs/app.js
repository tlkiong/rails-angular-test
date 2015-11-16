'use strict';

angular.module('receta', [
		'Core',
        'Home'
    ])
	.config(function($stateProvider, $urlRouterProvider, $compileProvider, $locationProvider) {
		
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true); // enable HTML5 Mode for SEO
    });
