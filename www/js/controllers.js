angular.module('starter.controllers', ['starter.services'])

    .controller('AppCtrl', function ($scope, User) {
        $scope.user = User;
    })

    .controller('GameCtrl', function ($scope, $stateParams, User) {

        var slotGame;

        ionic.Platform.ready(function () {
            slotGame = SlotGame();
        });

        $scope.credits = User.credits;

        $scope.play = function () {
            if ($scope.credits > 0) {
                $scope.credits = $scope.credits - 1;
                angular.element('h1').text('Rollwing!');
                slotGame.startGame();
            }
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
