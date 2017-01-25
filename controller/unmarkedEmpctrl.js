angular.module('mainApp').controller('unmarkedEmp', function($scope,$rootScope, $location, $stateParams, $state, $auth, $http, localStorageService, restService,$filter) {


    var token = localStorageService.get('token');
    $scope.today = new Date();
    var timeStamp = $stateParams.timeStamp;
// console.log($rootScope.viewDay);

    var query = {
        token: "1a285sdffd8do8fd",
        timeStamp: timeStamp
    };
//promising the readingUnmarkedAttendence of employee for getting restService
    var promise = restService.getRequest('readUnmarkedAttendanceEmployee', query);
    promise.then(function(data) {

        $scope.totalEmployee = data.data.totalEmployee;
        $scope.unmarkedNumber = data.data.unmarkedNumber;
        $scope.display = "umarkedEmployee";
        $scope.items = data.data.umarkedEmployee;
        $scope.display = "umarkedEmployee";
    });


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

});
