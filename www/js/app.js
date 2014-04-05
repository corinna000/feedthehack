// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })

            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'AppCtrl'
            })

            .state('app.play', {
                url: '/play',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/play.html',
                        controller: 'GameCtrl'
                    }
                }
            })
            .state('app.coupons', {
                url: '/coupons',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/coupons.html',
                        controller: 'CouponCtrl'
                    }
                }
            })
            .state('app.account', {
                url: '/account',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/account.html',
                        controller: 'UserCtrl'
                    }
                }
            })

            .state('app.vendors', {
                // url: '/vendors/:vendorId',
                url: '/vendors',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/vendors.html',
                        controller: 'VendorsCtrl'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/home');
    });

