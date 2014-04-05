angular.module('starter.services', [])

    .factory('Vendors', function () {

        return {
            vendors: [
                {
                    id: 1,
                    name: 'The Flavor Truck',
                    logo: 'flavor_truck_64.png',
                    twitterId: '1234567',
                    stats: {
                        saved: {
                            bronze: 31,
                            silver: 15,
                            gold: 3
                        },
                        impressions: {
                            bronze: 360,
                            silver: 43,
                            gold: 12
                        }
                    }
                },
                {
                    id: 2,
                    name: 'Flying Cupcake',
                    logo: 'flying_cupcake_64.png',
                    twitterId: '1234567',
                    stats: {
                        saved: {
                            bronze: 51,
                            silver: 35,
                            gold: 9
                        },
                        impressions: {
                            bronze: 260,
                            silver: 63,
                            gold: 14
                        }
                    }
                },

                {
                    id: 3,
                    name: 'The NY Slice',
                    logo: 'ny_slice_64.png',
                    twitterId: '1234567',
                    stats: {
                        saved: {
                            bronze: 71,
                            silver: 25,
                            gold: 11
                        },
                        impressions: {
                            bronze: 350,
                            silver: 73,
                            gold: 8
                        }
                    }
                },
                {
                    id: 4,
                    name: 'Citizen Hash',
                    logo: 'citizen_hash_64.png',
                    twitterId: '1234568',
                    stats: {
                        saved: {
                            bronze: 41,
                            silver: 25,
                            gold: 2
                        },
                        impressions: {
                            bronze: 120,
                            silver: 33,
                            gold: 16
                        }
                    }
                },
                {
                    id: 5,
                    name: 'Spice Box',
                    logo: 'spice_box_64.png',
                    twitterId: '1234572',
                    stats: {
                        saved: {
                            bronze: 81,
                            silver: 52,
                            gold: 15
                        },
                        impressions: {
                            bronze: 520,
                            silver: 133,
                            gold: 21
                        }
                    }
                },
                {
                    id: 6,
                    name: 'Taste the Caribbean',
                    logo: 'taste_of_caribbean_64.png',
                    twitterId: '1234570',
                    stats: {
                        saved: {
                            bronze: 36,
                            silver: 21,
                            gold: 3
                        },
                        impressions: {
                            bronze: 250,
                            silver: 93,
                            gold: 12
                        }
                    }
                },
                {
                    id: 7,
                    name: 'Big Ron\'s Bistro',
                    logo: 'big_rons_bistro_64.png',
                    twitterId: '1234571',
                    stats: {
                        saved: {
                            bronze: 86,
                            silver: 41,
                            gold: 4
                        },
                        impressions: {
                            bronze: 265,
                            silver: 48,
                            gold: 17
                        }
                    }
                }
            ]
        }

    })
    .factory('User', function ($http) {

        // /users/api/users/current
        var user = { loggedIn: false };

        $http({
            method: 'GET',
            url: '/user/api/users/current'
        }).success(function (data, status, headers) {
            user = data;
            user.loggedIn = true;
            console.log("logged in", user);
        }).error(function () {
            console.log("Not logged In", status);
        });

        return user;
    })

;