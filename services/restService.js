// restServices rest call with baseurl
angular.module('mainApp').service('restService', function ($http, $log, $q) {
   var baseUrl = "http://192.168.0.17:3000/";
   //    function for GET
   this.getRequest = function (path, query) {

       var deferred = $q.defer();
       // console.log(query)
       $http({
           method: "GET",
           url: baseUrl + path,
           params: query

       }).then(function (data) {
           //sending data...
           deferred.resolve(data);
       }), function (msg, code) {
           deferred.reject(msg);

           $log.error(msg, code);
       };
       return deferred.promise;
   };

    //  function to POST
       this.postRequest = function (path,query) {
         var deferred = $q.defer();

         $http ({
           method:"POST",
           url:baseUrl + path,
           data:query
         }).then(function(data) {
           deferred.resolve(data);
         }),function(msg,code) {
           deferred.reject(msg);
           $log.error(msg,code);
         };
         return deferred.promise;
       };
 });
