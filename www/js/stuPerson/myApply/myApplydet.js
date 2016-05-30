/**
 * Created by apple-ty on 16-5-10.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myApplydet',{
        url:'/myApply/myApplyDetail',
        templateUrl: 'templates/stuPerson/myApply/myApplydet.html',
        controller: 'myApplyDetailCtrl'
      });
  })
  .controller('myApplyDetailCtrl',function($scope,userInfo){

        $scope.rootPicUrl =  rootPicUrl;
        $scope.myApply = userInfo.apply;

  })
