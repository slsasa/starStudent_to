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

    $scope.schoolDynamics = userInfo.schoolDynamics;
    $scope.banner_list =  userInfo.banner_list;


    //var update = function(){
    //  var url = rootUrl + "/dynamic/get_all_list?DyType=school";
    //
    //
    //  $ionicLoading.show();
    //  $http.get(url)
    //    .success(function(result){
    //
    //      var banner_list = [];
    //      var data = result.data;
    //
    //      data[0]['PicListRef'].forEach(function (item) {
    //        banner_list.push(rootPicUrl + item['Url'])
    //      });
    //
    //      $scope.schoolDynamics = data;
    //      userInfo.schoolDynamics = data;
    //      $scope.banner_list = banner_list;
    //
    //      $ionicSlideBoxDelegate.update();
    //      $ionicSlideBoxDelegate.loop(true);
    //      $ionicLoading.hide()
    //    })
    //    .error(function(err){
    //      $ionicLoading.hide();
    //
    //    })
    //}
    //
    //$scope.$on('$ionicView.beforeEnter',function(){
    //  update();
    //})

    $scope.goDetail = function(dynamic){
      userInfo.dynamicDetail = dynamic;
      $state.go('school-dyncdetails');
    }
  })
