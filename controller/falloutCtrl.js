angular.module('mainApp').controller('falloutCtrl', function($scope,$http) {

localStorage.setItem('key-','ss');
var akey=localStorage.getItem('satellizer_token');
console.log("key::",akey);
  $http({
  method: 'GET',
  url: 'http://192.168.0.171:3000/readFalloutAttendanceEmployee?timeStamp=1483315200000&token=21hghj'
  // headers:{'satellizer_token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBicmlkZ2VsYWJ6LmNvbSIsImlhdCI6MTQ4MzUxMTU4MSwiZXhwIjoxNDg0NzIxMTgxfQ.g3FGwnfNV8F330ynVntnz5OoHzvQbKP0amQ4oKWtPWc'}
}).then(function(data) {
  console.log(data.data);
  $scope.fallout=data.data.falloutEmployee;

  });
        });
////////////////////////////////////QQ
