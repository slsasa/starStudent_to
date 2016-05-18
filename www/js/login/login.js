/**
 * Created by apple-ty on 16-5-6.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login/login.html',
        controller: 'loginCtrl'
      })
  })


  .controller('loginCtrl', function ($rootScope, $scope, $state, $ionicPopup, userInfo, $http, $ionicLoading) {


    $scope.loginbks = [
      {
        "img": "img/logobk.jpg"
      }
    ];

    $rootScope.user = {
      num: '123',
      pwd: '000',
      type: 'student'
    };


    var update = function (url, data) {
      $http.post(url, data)
        .success(function (result) {

          console.log(JSON.stringify(result));
          userInfo._id = result.data._id;
          console.log(userInfo.id);

          if (result.ret_code == 0) {
            var user = result.data;
            if (user.type == '学员') {
              t = '_stu';
              userInfo.personType = '_stu';
              $state.go('tabs.home', {type: t});
            } else {
              t = '_teacher';
              userInfo.personType = '_teacher';
              $state.go('tabs.home', {type: t})
            }
          } else if (result.ret_code == 101) {
            $ionicPopup.alert({
              title: '提醒',
              template: '账号或密码错误'
            });
            console.log(result.msg);
          } else {
            $ionicPopup.alert({
              title: '提醒',
              template: '登录异常'
            });
          }
          $ionicLoading.hide();

        })
        .error(function (err) {
          $ionicLoading.hide();
          $ionicPopup.alert({
            title: 'err',
            template: JSON.stringify(err)
          })
          console.log("err>>>" + JSON.stringify(err));
        })
    }


    //提交表单 **登录**
    $scope.login = function () {
      var t;
      $ionicLoading.show();
      var data = {
        Password: $rootScope.user.pwd,
        Account: $rootScope.user.num
      };

      var url = rootUrl + "/user/login";
      update(url, data);

    };


    //进入注册页面
    $scope.register = function () {
      $state.go('register');
    };
    //进入找回密码
    $scope.Forgotpw = function () {
      $state.go('forgotpw');
    }
  })
