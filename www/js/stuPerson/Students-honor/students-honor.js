/**
 * Created by apple-ty on 16-5-6.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('students-honor',{
        url:'/students-honor',
          templateUrl: 'templates/stuPerson/students-honor/students-honor.html',
          controller:'studentHonorCtrl'
      });
  })
  .controller('studentHonorCtrl',function($scope){
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
