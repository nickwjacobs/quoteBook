angular.module("quoteBook").controller("controller",function($scope, service){

  $scope.quotes = service.getQuotes();

  // $scope.deleteMe = function;
});
