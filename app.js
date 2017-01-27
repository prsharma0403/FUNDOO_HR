var mainApp = angular.module("mainApp", ['ui.router', 'ngMaterial', 'ngAnimate', 'ngAria', 'ngMessages', 'satellizer', 'toastr', 'LocalStorageModule']);
mainApp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $authProvider) {
    var skipIfLoggedIn = ['$q', '$auth', function($q, $auth) {


        var deferred = $q.defer(); //Deferred creates a new instance of the promise to be returned
        if ($auth.isAuthenticated()) {
            deferred.reject(); // To reject a promise, use .reject

        } else {
            deferred.resolve(); // To fulfil a promise, use .resolve

        }
        return deferred.promise;
    }];

    var loginRequired = ['$q', '$location', '$auth', function($q, $location, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
            deferred.resolve();
        } else {
            $location.path('/login');
        }
        return deferred.promise;
    }];
    $urlRouterProvider.otherwise('/');
    $stateProvider

        //login state actions performing
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl',
            resolve: {
                skipIfLoggedIn: skipIfLoggedIn
            }
        })
        //logout state actions performing
        .state('logout', {
            url: '/logout',
            template: null,
            controller: 'LogoutCtrl'
        })
        //home states actions performing
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl',
            resolve: {
                loginRequired: loginRequired
            }
        })
        //dashboard states actions performing
        .state('home.DashBoard', {
            url: 'dash',
            templateUrl: 'templates/dash.html',
            controller: 'DashCtrl',
            resolve: {
                loginRequired: loginRequired
            }
        })
        //fallout state actions performing
        .state('home.fallout', {
            url: 'attendence',
            templateUrl: 'templates/empFallout.html',
            controller: 'empCtrl',
            resolve: {
                loginRequired: loginRequired
            }
        })
        //calender page states actions performing
        .state('home.Attendence', {
            url: 'calender',
            template: '<calendar></calendar>',
            controller: null,
            resolve: {
                loginRequired: loginRequired
            }
        })

        //unmarked  employee page actions performing
        .state('home.unmarkedEmp', {
            url: 'unmarkedEmp/:timeStamp',
            templateUrl: 'templates/unmarkedEmp.html',
            controller: 'unmarkedEmp'
            // resolve: {
            //     loginRequired: loginRequired
            // }

        })

});
