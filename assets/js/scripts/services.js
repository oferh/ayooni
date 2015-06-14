var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('/phones/:phoneId', {}, {
      query: {method:'GET', params:{phoneId:''}, isArray:true}
    });
  }]);