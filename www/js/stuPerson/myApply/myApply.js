/**
 * Created by apple-ty on 16-5-9.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myApply',{
        url:'/myApply',
          templateUrl: 'templates/stuPerson/myApply/myApply.html',
          controller: 'myApplyCtrl'
      });
  })
  .controller('myApplyCtrl',function($scope, $state, userInfo, $http,$ionicPopup,$ionicLoading){

    $scope.rootPicUrl = rootPicUrl;

    var update = function(){
      $ionicLoading.show();
      var url = rootUrl + "/student_sign_up/get_list?StudentId=" + userInfo._id;
      $http.get(url)
        .success(function(result){
          console.log(' my apply------------>',JSON.stringify(result));
          var data = result.data;
          $scope.applys = data;
          $ionicLoading.hide();
        })
        .error(function(err){
          $ionicLoading.hide();
          $ionicPopup.alert({
            title:'err',
            template:err
          })
        })

    }

    $scope.$on('$ionicView.beforeEnter',function(){
      update();
    })

    $scope.myApplyDeatil = function(apply){
      userInfo.apply = apply;
      $state.go('myApplydet');
    }
  })
