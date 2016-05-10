/**
 * Created by apple-ty on 16-5-6.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('learn-situation',{
        url:'/learn-situation',
          templateUrl: 'templates/stuPerson/learn-situation/learn-situation.html',
          controller:'LearnSitCtrl'
      });
  })
  .controller('LearnSitCtrl',function($scope,$state){
    $scope.learns = [
      {
        id:0,
        subjectsname:'街舞',
        assessmentName:'李老师',
        score:'优秀',
        asTime:1462765734379
      },
      {
        id:1,
        subjectsname:'街舞',
        assessmentName:'李老师',
        score:'优秀',
        asTime:1462765734379
      },
      {
        id:2,
        subjectsname:'街舞',
        assessmentName:'李老师',
        score:'优秀',
        asTime:1462765734379
      }];
    $scope.goCheckDeatil = function(checkId){
      $state.go('checkDetails',{checkId:checkId});
    }
  })
