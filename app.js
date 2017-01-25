var mainApp = angular.module("mainApp", ['ui.router', 'ngMaterial', 'ngAnimate', 'ngAria', 'ngMessages', 'satellizer', 'toastr', 'LocalStorageModule']);
mainApp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $authProvider) {
    var skipIfLoggedIn = ['$q', '$auth', function($q, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
            deferred.reject();
        } else {
            deferred.resolve();
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
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl',
            resolve: {
                skipIfLoggedIn: skipIfLoggedIn
            }
        })
        .state('logout', {
            url: '/logout',
            template: null,
            controller: 'LogoutCtrl'
        })
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl',
            resolve: {
                loginRequired: loginRequired
            }
        })
        .state('home.DashBoard', {
            url: 'dash',
            templateUrl: 'templates/dash.html',
            controller: 'DashCtrl',
            resolve: {
                loginRequired: loginRequired
            }
        })
        .state('home.fallout', {
            url: 'attendence',
            templateUrl: 'templates/empFallout.html',
            controller: 'empCtrl',
            resolve: {
                loginRequired: loginRequired
            }
        })
        .state('home.Attendence', {
            url: 'calender',
            template: '<calendar></calendar>',
            controller: null,
            resolve: {
                loginRequired: loginRequired
            }
        })


.state('home.unmarkedEmp',{
url:'unmarkedEmp/:timeStamp',
templateUrl:'templates/unmarkedEmp.html',
controller:'unmarkedEmp'
// resolve: {
//     loginRequired: loginRequired
// }

})

});
