/**
 * Created by sls on 16/5/9.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('personage-msg',{
        url:'/person-teacher/personage-msg',
        templateUrl: 'templates/person/personage-msg.html',
        controller: 'personageMsgCtrl'

      });
  })
  .controller('personageMsgCtrl',function($scope, $http, userInfo, $ionicLoading,$ionicPopup){

    var update = function(){
      $ionicLoading.show();
      var url = rootUrl + "/student_info/get_info?StudentId=" + userInfo._id;

      $http.get(url)
        .success(function(result){
          //console.log(JSON.stringify(result));
          var data = result.data;
          $scope.studentInfo = data;
          $ionicLoading.hide();
        })
        .error(function(err){
          $ionicLoading.hide();
          $ionicPopup.alert({
            title:'err',
            template:'获取数据出错'+err
          })
          //alert(JSON.stringify(err));
          ////console.log("获取个人信息失败");
        })
    }

    $scope.$on('$ionicView.beforeEnter',function(){
      update();
    });

    var postData = function(){
      var data = {
        StudentId: userInfo._id,
        Name: $scope.studentInfo.Name,
        Gender: $scope.studentInfo.Gender,
        National: $scope.studentInfo.National,
        EntranceDesc: $scope.studentInfo.EntranceDesc
      }

      var url = rootUrl + "/student_info/edit";

      $http.post(url, data)
        .success(function(result){
          console.log(JSON.stringify(result));
          console.log("修改信息成功");
          $ionicLoading.hide();
        })
        .error(function(err){
          console.log("提交数据失败");
        })
    }

    $scope.$on('$ionicView.beforeLeave',function(){
      $ionicLoading.show();
      postData();
    })

  })
