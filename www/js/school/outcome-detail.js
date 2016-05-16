/**
 * Created by apple-ty on 16-5-4.
 */

angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('outcome-detail',{
        url:'/school-outcome/outcome-detail',
        templateUrl: 'templates/school/outcome-detail.html',
        controller:'outcomeDetailCtrl'

      });
  })
  .controller('outcomeDetailCtrl',function($rootScope,$scope){

    $scope.outcomeDetail = $rootScope.outComeDetail ;

  })
