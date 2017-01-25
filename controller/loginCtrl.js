angular.module('mainApp').controller('LoginCtrl', function($scope, $state, $auth, localStorageService,restService) {


//for checking regular expression for email&password
    $scope.re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    $scope.ps = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");




    var config = {
        method: 'POST',
<<<<<<< HEAD
        url: 'http://192.168.0.17:3000/login'
=======
        url: 'http://192.168.0.9:3000/login'
>>>>>>> e5ec9a74556ad854cf72b0adb746685febac3b68
    };
    $scope.login = function() {
      $scope.dataLoading = true;
        $auth.login($scope.user, config)
            .then(function(data) {
<<<<<<< HEAD
                $state.go('home');
=======
                // console.log("You have successfully signed in!");
                console.log("ok ", data);
                // $state.go('home');
                // $location.path('/');
>>>>>>> e5ec9a74556ad854cf72b0adb746685febac3b68
            })
            .catch(function(error) {
                console.log(error.data.message, error.status);
                $scope.error = "Incorrect email/password !";
            });
    };
    $scope.authenticate = function(provider) {
        $auth.authenticate(provider)
            .then(function() {
                console.log("You have successfully signed in!" + provider + "!");
                $state.go('home');
            })
            .catch(function(error) {
               $scope.dataLoading = false;
                if (error.message) {
                    // Satellizer promise reject error.

                    console.log(error.message);
                } else if (error.data) {
                    // HTTP response error from server
                    console.log(error.data.message, error.status);
                } else {
                    console.log(error);
                }
            });
    };

});
