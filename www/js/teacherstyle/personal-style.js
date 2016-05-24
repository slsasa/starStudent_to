/**
 * Created by sls on 16/5/3.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('personal-style', {
        url: '/teacher-mine/personal-style',
        cache: false,
        templateUrl: 'templates/teacherstyle/personal-style.html',
        controller: 'personalCtrl'

      });
  })
  .controller('personalCtrl', function ($scope, $stateParams, $state, $http, userInfo, $ionicLoading, $ionicPopup) {

    //根据返回的教师id，获取教师的信息
    var updata = function(){
      console.log(JSON.stringify(userInfo.teacherInfo));
      var teacherId = userInfo.teacherInfo._id;

      var url = rootUrl + "/teacher_style/get_self_style?TeacherId=" + teacherId;

      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;
          //转换一下头像地址

          data.TeacherAvatarRef.Url = rootPicUrl + data.TeacherAvatarRef.Url;

          //转换所有图片
          data.StyleItem.forEach(function (item) {
            var ls = [];
            item.PicListRef.forEach(function (item) {
              ls.push(rootPicUrl + item['Url'])
            });
            item.PicListRef = ls;
          });

          $scope.Style = data.StyleItem[0];
          $scope.teacher = data;
          console.log('>>>>>>>>>>>>>teacher', JSON.stringify($scope.teacher));

          //获取教师荣誉
          var url = rootUrl + "/honor/get_self_list";

          var params = {
            UserId: $scope.teacher._id,
            HonorType: 'teacher'
          }
          console.log(params);
          $http.get(url, {params: params})
            .success(function (result) {
              console.log(JSON.stringify(result));
              var data = result.data;
              $scope.teacher.honor = data;
            })
            .error(function (err) {

            })
        })
        .error(function(err){

        })


    }



    //var update = function () {
    //  //遍历图片，加上地址
    //  userInfo['teacherInfo']['StyleItem'].forEach(function (item) {
    //    var ls = [];
    //    item['PicListRef'].forEach(function (item) {
    //      ls.push(rootPicUrl + item['Url'])
    //    });
    //    item['PicListRef'] = ls;
    //  });
    //
    //
    //  $scope['Style'] = userInfo['teacherInfo']['StyleItem'][0];
    //
    //  $scope.teacher = userInfo.teacherInfo;
    //  console.log('>>>>>>>>>>>>>teacher', JSON.stringify($scope.teacher));
    //  //userInfo.teacherInfo = '';
    //}

    //var getHonorInfo = function () {
    //  var url = rootUrl + "/honor/get_self_list";
    //
    //  var params = {
    //    UserId: $scope.teacher._id,
    //    HonorType: 'teacher'
    //  }
    //  $http.get(url, {params: params})
    //    .success(function (result) {
    //      console.log(JSON.stringify(result));
    //      var data = result.data;
    //      $scope.teacher.honor = data;
    //    })
    //    .error(function (err) {
    //
    //    })
    //};

    $scope.$on('$ionicView.beforeEnter', function () {
      updata();
    });

    $scope.goImgs = function () {
      userInfo.teacherInfo = $scope.teacher;
      $state.go('style-img');
    };


    $scope.goPaper = function () {
      userInfo.teacherInfo = $scope.teacher;
      $state.go('works-centre')
    }

    $scope.addLike = function () {
      var data = {
        UserId: userInfo._id,
        TeacherId: $scope.teacher._id
      }
      console.log(data);

      var url = rootUrl + "/teacher_style/add_like";

      $http.post(url, data)
        .success(function (result) {
          if (result.ret_code == 0) {
            console.log(JSON.stringify(result));
            updata();
          }
          else if (result.ret_code == 11) {
            $ionicPopup.alert({
              title: '提示',
              template: '您已经点赞过了 :)'
            })
          }
        })
        .error(function (err) {
          console.log("点赞失败", err);
        })
    }

    $scope.sendFlower = function () {
      var data = {
        UserId: userInfo._id,
        TeacherId: $scope.teacher._id
      }
      console.log(data);

      var url = rootUrl + "/teacher_style/add_flower";

      $http.post(url, data)
        .success(function (result) {
          if (result.ret_code == 0) {
            console.log(JSON.stringify(result));
            updata();
          }
          else if (result.ret_code == 11) {
            $ionicPopup.alert({
              title: '提示',
              template: '您已经送过花了 :)'
            })
          }
        })
        .error(function (err) {
          console.log("送花失败", err);
        })
    }


  })
;
