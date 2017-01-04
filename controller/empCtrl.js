'use strict';



angular.module('mainApp')
.controller('empCtrl', empCtrl);
/* Controllers */
function empCtrl($scope) {
  $scope.today = new Date();
$scope.items = [{
        employeeName:'Naresh shanghvi',
        employeeStatus: 'Internship',
        company: 'BridgeLabz',
        mobile:'1234567890',
        emailId :'artichabra@bridgelabz.com',
        src: 'images/pppp profilepic.jpg'
      },
      {
          employeeName:'Sohail taanveer',
          employeeStatus: 'Fellowship',
          company: 'BridgeLabz',
          mobile:'1234567890',
          emailId :'arti2793@bridgelabz.com',
          src: 'images/431.png'
        },{
            employeeName:'Amit arunthee',
            employeeStatus: 'Fellowship',
            company: 'BridgeLabz',
            mobile:'1234567890',
            emailId :'sushantsingh@bridgelabz.com',
            src: 'images/virat_kohli.png'
          },  {
                employeeName:'Durga Mahtab',
                employeeStatus: 'Fellowship',
                company: 'BridgeLabz',
                mobile:'1234567890',
                emailId :'pp@bridgelabz.com',
                src: 'images/ab_de_villiers.png'
              },{
                  employeeName:'Hamid Raza Noori',
                  employeeStatus: 'Fellowship',
                  company: 'BridgeLabz',
                  mobile:'1234567890',
                  emailId :'pp@bridgelabz.com',
                  src: 'images/sreenath_aravind.png'
                },{
                      employeeName:'Shalini Reddy',
                      employeeStatus: 'Internship',
                      company: 'BridgeLabz',
                      mobile:'1234567890',
                      emailId :'pp@bridgelabz.com',
                      src: 'images/stuart_binny.png'
                    },
                    {
                        employeeName:'Sharad bhai pawar',
                        employeeStatus: 'Fellowship',
                        company: 'BridgeLabz',
                        mobile:'1234567890',
                        emailId :'pp@bridgelabz.com',
                        src: 'images/praveen_dubey.png'
                      },{
                          employeeName:'Swati Dindule',
                          employeeStatus: 'Fellowship',
                          company: 'BridgeLabz',
                          mobile:'1234567890',
                          emailId :'pp@bridgelabz.com',
                          src: 'images/yuzvendra_chahal.png'
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
        template: '<div class="item">\
        <div class="item-int"><h4>{{item.employeeName}}</h4>\
                <div class="data"><img ng-src="{{item.src}}"/>\
                <table>\
              <tr><td>{{item.employeeStatus}}</td><tr>\
            <tr><td>{{item.company}}</td><tr>\
            <tr><td>{{item.mobile}}</td><tr>\
              <tr><td>{{item.emailId}}</td></tr></table></div></div></div>'
    };
});
