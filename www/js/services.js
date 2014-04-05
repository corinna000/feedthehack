angular.module('starter.services', [])

    .factory('Vendors', function () {

        return {
            vendors: [
                {
                    id: 1,
                    name: 'The Flavor Truck',
                    logo: 'flavor_truck_64.png',
                    twitterId: '1234567'
                },
                {
                    id: 2,
                    name: 'Flying Cupcake',
                    logo: 'flying_cupcake_64.png',
                    twitterId: '1234567'
                },

                {
                    id: 3,
                    name: 'The NY Slice',
                    logo: 'ny_slice_64.png',
                    twitterId: '1234567'
                },
                {
                    id: 4,
                    name: 'Citizen Hash',
                    logo: 'citizen_hash_64.png',
                    twitterId: '1234568'
                },
                {
                    id: 5,
                    name: 'Spice Box',
                    logo: 'spice_box_64.png',
                    twitterId: '1234572'
                },
                {
                    id: 6,
                    name: 'Taste the Caribbean',
                    logo: 'taste_of_caribbean_64.png',
                    twitterId: '1234570'
                },
                {
                    id: 7,
                    name: 'Big Ron\'s Bistro',
                    logo: 'big_rons_bistro_64.png',
                    twitterId: '1234571'
                }
            ]
        }

    })
    .factory('User', function ($http, $location) {

        // /users/api/users/current

        var user;

        var user = $http({
            method: 'GET',
            url: '/user/api/users/current'
        }).success(function (data, status, headers) {
           user = data;
        }).failure(function() {
//            console.log("Not logged In");
           $location.path('/user/login/twitter');
        });

        return {
            username: user.name,
            credits: user.credits
        }
    })

;