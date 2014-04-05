angular.module('starter.services', [])

    .factory('Vendors', function () {

        return {
            vendors: [
                {
                    name: 'The Flavor Truck',
                    logo: 'flavor_truck_logo.png',
                    twitterId: '1234567'
                },
                {
                    name: 'Citizen Hash',
                    logo: 'citizen_hash.png',
                    twitterId: '1234568'
                },
                {
                    name: 'Nicey Treat',
                    logo: 'nicey_treat.png',
                    twitterId: '1234572'
                },
                {
                    name: 'Taste the Caribbean',
                    logo: 'taste_the_caribbean.png',
                    twitterId: '1234570'
                },
                {
                    name: 'Big Ron\'s Bistro',
                    logo: 'big_rons_bistro.png',
                    twitterId: '1234571'
                }
            ]
        }

    })
    .factory('User', function ($http) {
        return {
            username: 'Squigly',
            credits: 10
        }
    })

;