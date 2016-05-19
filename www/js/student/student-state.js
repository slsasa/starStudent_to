/**
 * Created by sls on 16/5/17.
 */
angular.module('starter')
  .config(function($stateProvider){
    $stateProvider
      .state('student-state',{
        url:'/student-state',
        templateUrl:'templates/student/student-state.html',
        controller:'stuStateCtrl'

      })
  })


  .controller('stuStateCtrl',function($scope, $state, $http,$ionicLoading,userInfo){
    var update = function(){
      var url = rootUrl + "/student_situation/get_self_list?StudentId=" + userInfo._id;
      $ionicLoading.show();
      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;
          $scope.learns = data;
          $ionicLoading.hide();
        })
        .error(function(err){
          $ionicLoading.hide();
          $ionicPopup.alert({
            title:'err',
            template:'获取数据失败'
          })
          console.log(JSON.stringify(err));
        })
    }

    $scope.$on('$ionicView.beforeEnter',function(){
      update();
    })

    $scope.goCheckDeatil = function(learn){
      userInfo.learnInfo = learn;
      $state.go('checkDetails');
    }


  })
