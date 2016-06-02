/**
 * Created by sls on 16/5/11.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myPapers-detail',{
        url:'/my_papers/paper-detail:index',
        templateUrl:'templates/person/papers-detail.html',
        controller:'myPaperDetailCtrl'
      });
  })
  .controller('myPaperDetailCtrl', function ($scope ,userInfo) {


    $scope.thesis = userInfo['myPaper'];
  })
