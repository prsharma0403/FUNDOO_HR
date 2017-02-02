
angular.module('mainApp')
.directive('itemCard', function() {
// return the directive definition object
return {
         scope: {
          item: "="
  },
    controller: function($scope, $element, $attrs, $location) {
                $scope.addToCart = function(value, key) {
                var mainScope = angular.element("#main1").scope();
                mainScope.employees(value, key);
                return false;
            };
          },
               replace: true,
               templateUrl:'templates/UnmarkedEmpcard.html'
       };
    });
