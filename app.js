/**
 * FileName:app.js
 * CreatedBy: Prashant Praveen
 * purpose : perform routing according to state
  * */

var mainApp = angular.module("mainApp", ['ui.router', 'ngMaterial', 'ngAnimate', 'ngAria', 'ngMessages', 'satellizer', 'toastr', 'LocalStorageModule']);

         /**configure existing service*/
        mainApp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $authProvider) {
        var skipIfLoggedIn = ['$q', '$auth', function($q, $auth) {
        var deferred = $q.defer(); //Deferred creates a new instance of the promise to be returned
        if ($auth.isAuthenticated()) {
            deferred.reject(); // To reject a promise, use .reject
         } else {
            deferred.resolve(); // To fulfil a promise, use .resolve
           }
           return deferred.promise;
           }]; //end of function
        var loginRequired = ['$q', '$location', '$auth', function($q, $location, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
            deferred.resolve();
        } else {
            $location.path('/login');
        }
        return deferred.promise;
    }];

    /* $stateProvider give different states*/
    $urlRouterProvider.otherwise('/dash');
    /* $stateProvider give different states*/
    $stateProvider
    /* configure the home state*/
           .state('home', {
            url: '/',
            templateUrl: 'templates/Home.html',
            controller: 'HomeCtrl',
            resolve: {
                loginRequired: loginRequired
            }
        })
        /* configure the logout state*/
        .state('login', {
            url: '/login',
            templateUrl: 'templates/Login.html',
            controller: 'LoginCtrl',
            resolve: {
                skipIfLoggedIn: skipIfLoggedIn
            }
        })
        /* configure the logout state*/
        .state('logout', {
            url: '/logout',
            template: null,
            controller: 'LogoutCtrl'
        })

        /* configure the DashBoard state*/
        .state('home.DashBoard', {
            url: 'dash',
            templateUrl: 'templates/Dashboard.html',
            controller: 'DashCtrl',
            resolve: {
                loginRequired: loginRequired
            }
        })
        /* configure the Fallout state*/
        .state('home.fallout', {
            url: 'attendence',
            templateUrl: 'templates/Falloutemp.html',
            controller: 'falloutCtrl',
            resolve: {
            loginRequired: loginRequired
            }
        })
        /* configure the home calander state*/
        .state('home.Attendence', {
            // url: 'calender',
            template: '<calendar></calendar>',
            controller: null,
            resolve: {
            loginRequired: loginRequired
            }
        })

        /* configure the unmarkedEmp state*/
            .state('home.unmarkedEmp', {
            url: 'unmarkedEmp/:timeStamp',
            templateUrl: 'templates/UnmarkedEmp.html',
            controller: 'unmarkedEmp'


        })

});
