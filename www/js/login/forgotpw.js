/**
 * Created by apple-ty on 16-5-6.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('findPwd', {
        url: '/forgotpw',
        templateUrl: 'templates/login/forgotpw.html',
        controller: 'forgotpwCtrl'
      })
  })


  .controller('forgotpwCtrl', function ($scope, $http, $ionicPopup, $ionicHistory, $ionicLoading) {
    $scope.loginbks = [
      {
        "img": "img/logo/loginLogo.png"
      }
    ];

    $scope.user = {
      num: '',
      numverify: '',//验证码
      pwd: '',
      pwdsure: ''
    };

    //提交表单 **修改密码**
    $scope.onSubmit = function () {
      if ($scope.user.pwdsure == $scope.user.pwd) {

        var data = {
          Account: $scope.user.num,
          NewPassword: $scope.user.pwd
        };

        console.log(data);

        var url = rootUrl + "/user/reset_pwd";
        $ionicLoading.show();
        $http.post(url, data)
          .success(function (result) {

            $ionicLoading.hide();
            if (result.ret_code == 0) {
              console.log("haha");
              $ionicPopup.alert({
                title: '提醒',
                template: '修改密码成功'
              });
              $ionicHistory.goBack(-1);
            } else {
              $ionicPopup.alert({
                title: '提醒',
                template: '修改密码失败'
              });
            }
          })
          .error(function (err) {
            $ionicLoading.hide();
            $ionicPopup.alert({
              title: '提醒',
              template:'出错'+err
            })
          })
      } else {
        $ionicPopup.alert({
          title: '提醒',
          template: '两次密码不一致'
        });
      }

    }

  });
