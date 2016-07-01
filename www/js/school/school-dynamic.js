/**
 * Created by sls on 16/5/12.
 */
angular.module('starter')
  .config(function($stateProvider){
    $stateProvider
      .state('school-dynamic',{
        url:'/school-dynamic',
        templateUrl:'templates/school/school-dynamic.html',
        controller:'schoolDynamicCtrl'

      })
  })
  .controller('schoolDynamicCtrl',function($scope, $state, $http, $ionicSlideBoxDelegate, $ionicLoading,userInfo) {


    $scope.images = [];
    var schoolDynamics =  userInfo.schoolDynamics;
    schoolDynamics.forEach(function(item){
      $scope.images.push(rootPicUrl+item['IssuerAvatarRef']['Url']) ;

    });

    $scope.schoolDynamics = schoolDynamics;



    $scope.goDetail = function(dynamic){
      userInfo.dynamicDetail = dynamic;
      $state.go('school-dyncdetails');
    }
  })
