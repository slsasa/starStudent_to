/**
 * Created by sls on 16/5/17.
 */
angular.module('starter')
  .config(function($stateProvider){
    $stateProvider
      .state('student-honor',{
        url:'/student-honor',
        templateUrl:'templates/student/student-honor.html',
        controller:'stuHonorCtrl'
      })
  })
  .controller('stuHonorCtrl',function($scope){
    $scope.learns = [
      {
        id:0,
        certificateName:'广东省舞蹈专业考级比赛一等奖',
        synopsis:'王小峰同学在参加广东省教育局举报的专业级比赛中获得一等奖',
        asTime:1462765734379

      },
      {
        id:1,
        certificateName:'广东省舞蹈专业考级比赛一等奖',
        synopsis:'王小峰同学在参加广东省教育局举报的专业级比赛中获得一等奖',
        asTime:1462765734379

      }, {
        id:2,
        certificateName:'广东省舞蹈专业考级比赛一等奖',
        synopsis:'王小峰同学在参加广东省教育局举报的专业级比赛中获得一等奖',
        asTime:1462765734379
      }];
  })
