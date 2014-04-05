angular.module('starter.controllers', ['starter.services'])

    .controller('AppCtrl', function ($scope) {
    })

    .controller('GameCtrl', function ($scope, $stateParams) {

        var slotGame;

        ionic.Platform.ready(function () {
            slotGame = SlotGame();
        });

        $scope.play = function () {
            angular.element('h1').text('Rollwing!');
            slotGame.startGame();
        };

    })

    .controller('CouponCtrl', function ($scope, $stateParams) {
    })

    .controller('UserCtrl', function ($scope, $stateParams, User) {
        $scope.credits = User.credits;
        $scope.username = User.username;
    })

    .controller('VendorsCtrl', function ($scope, $stateParams, Vendors) {

        $scope.vendors = Vendors.vendors;

    });
