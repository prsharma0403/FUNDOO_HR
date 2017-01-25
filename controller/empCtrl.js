'use strict';



angular.module('mainApp')
    .controller('empCtrl', empCtrl)
// localStorage.setItem('tom', 'prashant');


/* Controllers */

function empCtrl($scope, $http, $stateParams, restService) {
    var token = localStorage.getItem('satellizer_token');

    $scope.dataLoading = true;
    $scope.today = new Date();

    var date = new Date();

    date.setDate(date.getDate() - 1);
    $scope.yesterday = date;
    var timeStamp = date.getTime();

    console.log(timeStamp);
    var query = {
        token: localStorage.getItem("satellizer_token"),
        timeStamp: timeStamp
    };
    console.log(query);
    var promise = restService.getRequest('readFalloutAttendanceEmployee', query);
    promise.then(function(data) {




        console.log(data.data);
        $scope.items = data.data.falloutEmployee;
        $scope.fall = data.data.falloutNumber;
        $scope.totalEmployee = data.data.totalEmployee;

        $scope.dataLoading = false;
    }).catch(function(error) {
        console.log(error);
    })



//storing all emp data in an array 
    $scope.cardItems = [];

    $scope.employees = function(employeeName, employeeStatus, company, mobile, emailId) {
        var objAdded = {

            employeeName: employeeName,
            employeeStatus: employeeStatus,
            company: company,
            mobile: mobile,
            emailId: emailId
        };
        $scope.cardItems.push(objAdded);
    };

}
