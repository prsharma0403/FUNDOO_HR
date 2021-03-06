/*
 * FileName:LoginCtrl.js
*@define controller
*@param(string)LoginCtrl-parameters refers to the controller used by HTML elements
*param(function)self invoke dependenciesare added in it
 bind the controller with the module and inject the services
*/
   angular.module('mainApp').controller('LoginCtrl', function($scope, $state,
    $auth, localStorageService,restService)
  {
    $scope.re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    $scope.ps = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        var config = {
        method: 'POST',
        url: 'http://192.168.0.16:3000/login'
    };

    $scope.login = function()
  {
      $scope.dataLoading = true;
      $auth.login($scope.user, config)
      .then(function(data)
      {
      $state.go('home.DashBoard');
    })
    .catch(function(error)
    {
    console.log(error.data.message, error.status);
    $scope.error = "Incorrect email/password !";
  });
 };
    $scope.authenticate = function(provider) {
    $auth.authenticate(provider)
    .then(function() {
    console.log("You have successfully signed in!" + provider + "!");
    $state.go('home.DashBoard');
  })
    .catch(function(error) {
    $scope.dataLoading = false;
  if (error.message) {
  // Satellizer promise reject error.
    console.log(error.message);
  }
    else if (error.data) {
  // HTTP response error from server
  console.log(error.data.message, error.status);
  }
   else {
          console.log(error);
        }
      });
    };
  });
