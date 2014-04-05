angular.module('starter.controllers', ['starter.services'])

    .controller('AppCtrl', function ($scope, $location, User, $ionicModal) {
        $scope.user = User;

        $scope.playGame = function () {

            var user;

            User.auth()
                .success(function (data) {
                    user = data;
                    $location.url('#/app/game');
                })
                .error(function () {
                    $scope.modal.show();
                });

        };

        $ionicModal.fromTemplateUrl('my-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function() {
            $scope.modal.show();
        };

        $scope.closeModal = function() {
            $scope.modal.hide();
        };

        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
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
                angular.element('h1').text('Rolling!');
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


        $scope.vendor = undefined;

        if (angular.isDefined($stateParams.vendorId)) {
            var id = $stateParams.vendorId;
            var i;

            for (i = 0; i < $scope.vendors.length; i++) {
                if (id == $scope.vendors[i].id) {
                    $scope.vendor = $scope.vendors[i];
                    break;
                }
            }
        }

    });
