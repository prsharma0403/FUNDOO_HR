'use strict';



angular.module('mainApp')
.controller('empCtrl', empCtrl);
/* Controllers */
function empCtrl($scope) {
  $scope.today = new Date();
$scope.items = [{
        employeeName:'naresh',
        employeeStatus: 'Internship',
        company: 'BridgeLabz',
        mobile:'1234567890',
        emailId :'pp@bridgelabz.com',
        src: 'images/pppp profilepic.jpg'
      },
      {
          employeeName:'sohail',
          employeeStatus: 'Fellowship',
          company: 'BridgeLabz',
          mobile:'1234567890',
          emailId :'pp@bridgelabz.com',
          src: 'images/pppp profilepic.jpg'
        },{
            employeeName:'amit',
            employeeStatus: 'Fellowship',
            company: 'BridgeLabz',
            mobile:'1234567890',
            emailId :'pp@bridgelabz.com',
            src: 'images/pppp profilepic.jpg'
          },  {
                employeeName:'durga',
                employeeStatus: 'Fellowship',
                company: 'BridgeLabz',
                mobile:'1234567890',
                emailId :'pp@bridgelabz.com',
                src: 'images/pppp profilepic.jpg'
              },{
                  employeeName:'hamid',
                  employeeStatus: 'Fellowship',
                  company: 'BridgeLabz',
                  mobile:'1234567890',
                  emailId :'pp@bridgelabz.com',
                  src: 'images/pppp profilepic.jpg'
                },{
                      employeeName:'mam',
                      employeeStatus: 'Internship',
                      company: 'BridgeLabz',
                      mobile:'1234567890',
                      emailId :'pp@bridgelabz.com',
                      src: 'images/pppp profilepic.jpg'
                    },
                    {
                        employeeName:'sohail',
                        employeeStatus: 'Fellowship',
                        company: 'BridgeLabz',
                        mobile:'1234567890',
                        emailId :'pp@bridgelabz.com',
                        src: 'images/pppp profilepic.jpg'
                      },{
                          employeeName:'swat',
                          employeeStatus: 'Fellowship',
                          company: 'BridgeLabz',
                          mobile:'1234567890',
                          emailId :'pp@bridgelabz.com',
                          src: 'images/pppp profilepic.jpg'
                        }];




    $scope.cardItems = [];

    $scope.employees = function (employeeName, employeeStatus,company,mobile,emailId) {
        var objAdded = {
            employeeName:employeeName,
            employeeStatus:employeeStatus,
            company:company,
            mobile:mobile,
            emailId:emailId
        };
        $scope.cardItems.push(objAdded);
    };

}
/* Directives */

angular.module('mainApp')

.directive('itemCard', function () {
    // return the directive definition object
    return {
        scope: {
            item:"="
        },
        controller: function ($scope, $element, $attrs, $location) {
            $scope.addToCart = function (value, key) {
                var mainScope = angular.element("#main").scope();
                mainScope.employees(value, key);
                return false;
            };
        },
        replace: true,
        template: '<div class="item" style="height:auto;"><div class="item-int"><h4>{{item.employeeName}}</h4>\
                <div class="data"><img ng-src="{{item.src}}"/>\
                <span class="left">{{item.employeeStatus}}</span>\
                <span class="left">{{item.company}}</span>\
                <span class="left">{{item.mobile}}</span>\
                <span class="left">{{item.emailId}}</span></div></div></div>'
    };
});
