/**
 * Created by sls on 16/6/24.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('teacher-style', {
        url: '/teacher-mine/teacher-style',
        cache: true,
        templateUrl: 'templates/teacher/teacher-style.html',
        controller: 'teacherStyleCtrl'
      });
  })
  .controller('teacherStyleCtrl',function($scope,$state, $http, userInfo, $ionicLoading, $ionicPopup){

    $scope.rootPicUrl = rootPicUrl;
    var getDate = function(){
      var teacherId = userInfo.teacherInfo._id;
      var url = rootUrl + "/teacher_style/get_self_style?TeacherId=" + teacherId;
      $ionicLoading.show();
      $http.get(url)
        .success(function(result){
          var data = result.data;

          $scope.like = data['LikeListRef'].length ? data['LikeListRef'].length : 0;
          $scope.teacher = data;
          $scope.styleImg = data.StyleItem[0];
          $ionicLoading.hide();

          //获取教师荣誉
          var url = rootUrl + "/honor/get_self_list";

          var params = {
            UserId: $scope.teacher._id,
            HonorType: 'teacher'
          }

          $http.get(url, {params: params})
            .success(function (result) {
              var data = result.data;
              $scope.teacher.honor = data;
            })
            .error(function (err) {
              $ionicPopup.alert({
                title:'错误',
                template:'获取数据失败:'+err
              })
            });
        })
        .error(function(err){
          $ionicLoading.hide();
          $ionicPopup.alert({
            title:'失败',
            template:'获取数据失败:'+err
          });
        });

    };

    $scope.$on('$ionicView.beforeEnter',function(){
      getDate();
    });

    $scope.addLike = function () {
      var data = {
        UserId: userInfo._id,
        TeacherId: $scope.teacher._id
      }

      var url = rootUrl + "/teacher_style/add_like";
      $http.post(url, data)
        .success(function (result) {
          if (result.ret_code == 0) {
            getDate();
          }
          else if (result.ret_code == 11) {
            $ionicPopup.alert({
              title: '提示',
              template: '您已经点赞过了 :)'
            });
          }
        })
        .error(function (err) {
          $ionicPopup.alert({
            title: '提示',
            template: '点赞失败'+err
          });
        })
    }

    $scope.sendFlower = function () {
      var data = {
        UserId: userInfo._id,
        TeacherId: $scope.teacher._id
      }


      var url = rootUrl + "/teacher_style/add_flower";
      $http.post(url, data)
        .success(function (result) {
          if (result.ret_code == 0) {

            getDate();
          }
          else if (result.ret_code == 11) {
            $ionicPopup.alert({
              title: '提示',
              template: '您已经送过花了 '
            });
          }
        })
        .error(function (err) {
          $ionicPopup.alert({
            title: '提示',
            template: '送花失败'+err
          });
        });
    }


    $scope.goImgs = function () {
      userInfo.teacherInfo = $scope.teacher;
      $state.go('style-img');
    };


    $scope.goPaper = function () {
      userInfo.teacherInfo = $scope.teacher;
      $state.go('works-centre');
    }


  })
