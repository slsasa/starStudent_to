/**
 * Created by apple-ty on 16-5-4.
 */

angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.apply',{
        url:'/apply',
        views:{'apply':{
          cache: false,
          templateUrl: 'templates/apply/apply.html',
          controller: 'ApplyCtrl'
        }}
      });
  })

  .controller('ApplyCtrl',function($scope, $state, $http,$ionicPopup,$ionicLoading,userInfo){
    $scope.rootPicUrl = rootPicUrl;
    var update = function(){
      $ionicLoading.show();
      var url = rootUrl + "/sign_up_intro/get_list";
      $http.get(url)
        .success(function(result){

          var data = result.data;

          $scope.applys = data;
          $ionicLoading.hide();
        })
        .error(function(err){
          $ionicPopup.alert({
            title:'提醒',
            template:'获取数据失败'+err
          });

        });
    };

    $scope.$on('$ionicView.beforeEnter',function(){
      update();
    });

    $scope.goApplyDetail = function(apply){
      userInfo.apply = apply;


      $state.go('applyDetail');
    }
  });
