/**
 * Created by apple-ty on 16-4-29.
 */
angular.module('starter')
  .controller('dyStudentCtrl',function($scope,dyschoolService){
    $scope.postt = dyschoolService.getdy1().schpost;//说说内容
  });
