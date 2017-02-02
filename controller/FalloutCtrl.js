/*
 * FileName:falloutCtrl.js
 bind the controller with the module and inject the services
*/
'use strict';
angular.module('mainApp')
    .controller('falloutCtrl', falloutCtrl)
  /* Controllers */
      function falloutCtrl($scope, $http, $stateParams, restService)
  {
    var token = localStorage.getItem('satellizer_token');
    //  $scope.today = new Date();
    var date = new Date();
    date.setDate(date.getDate() - 1);
    $scope.yesterday = date;
    var timeStamp = date.getTime();
    var query = {
    timeStamp: timeStamp
              };
    var config = {
    "x-token": token
                 }
    restService.getRequest('readFalloutAttendanceEmployee',
    query,config).then(function(data)
    {
          // console.log(data.data);
      $scope.items = data.data.falloutEmployee;
      $scope.fall = data.data.falloutNumber;
      $scope.totalEmployee = data.data.totalEmployee;
      $scope.imageUrl = data.data.imageUrl;
     });
    console.log("hii");
    $scope.confirm=function () {
      var token=localStorage.getItem('satellizer_token');
      var timeStamp = date.getTime();
      var query = {
            timeStamp: timeStamp
        };
        var config = {
                    "x-token": token
       };
    console.log( "x-token");
    restService.postRequest('sendEmailToFalloutEmployee',query,
    config).then(function (data)
    {
      if  (data.data.status === 200) {
          $('#mymodal1').modal('show');
          $scope.message = "Sent Successfully!";
     }
     else {
           $scope.message = "Cannot sent";
        }
    });
           console.log("heelo");
     }
       $scope.cancel = function() {
       console.log("message cant sent");
           }
      $scope.cardItems = [];
      $scope.employees = function(employeeName, employeeStatus, company,
         mobile, emailId)
  {
      var objAdded = {
      employeeName: employeeName,
      employeeStatus: employeeStatus,
      company: company,
      mobile: mobile,
      emailId: emailId,
      imageUrl: imageUrl
    };
      $scope.cardItems.push(objAdded);
  };
}
