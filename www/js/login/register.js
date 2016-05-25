/**
 * Created by apple-ty on 16-5-6.
 */
/**
 * Created by apple-ty on 16-5-6.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: 'templates/login/register.html',
        controller: 'registerCtrl'
      })
  })


  .controller('registerCtrl', function ($scope, $http, $ionicPopup, $ionicHistory, $ionicLoading) {
    $scope.user = {
      num: '',
      pwd: '',
      pwdsure: '',
      type: ''
      //numverify :''
    };
    $scope.loginbks = [
      {
        "img": "img/logo/loginLogo.png"
      }
    ];

    //提交表单 **注册**
    $scope.onSubmit = function () {
      if ($scope.user.pwdsure == $scope.user.pwd) {

        var select = document.getElementById("select");
        for(var i=0 ; i<select.options.length ; i++){
          if(select.options[i].selected){
            $scope.user.type = select.options[i].value;
          }
        }

        var data = {
          Account: $scope.user.num,
          Password: $scope.user.pwd,
          UserType: $scope.user.type
        };

        var url = rootUrl + "/user/register";
        $ionicLoading.show();
        $http.post(url, data)
          .success(function (result) {
            console.log(JSON.stringify(result));
            $ionicLoading.hide();
            if (result['ret_code'] == 0) {
              $ionicPopup.alert({
                title: '提醒',
                template: '注册成功'
              });
              console.log("haha");
              $ionicHistory.goBack(-1);
            } else if (result.ret_code == 101) {
              $ionicPopup.alert({
                title: '提醒',
                template: '该用户名已被注册'
              });
            } else {
              $ionicPopup.alert({
                title: '提醒',
                template: '注册失败'
              });
            }
          })
          .error(function (err) {
            $ionicLoading.hide();
            $ionicPopup.alert({
              title: 'err',
              template: JSON.stringify(err)
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
