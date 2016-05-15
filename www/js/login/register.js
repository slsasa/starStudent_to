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
        controller:'registerCtrl'
      })
  })


  .controller('registerCtrl',function($scope, $http, $ionicPopup, $ionicHistory){
    $scope.user = {
      num:'',
      pwd:'',
      pwdsure: '',
      type:'学员',
      //numverify :''
    }
    $scope.loginbks = [
      {
        "img":"img/logobk.jpg"
      }
    ]

    //提交表单 **注册**
    $scope.onSubmit = function(){
      if($scope.user.pwdsure == $scope.user.pwd) {

        var data = {
          user_tel: $scope.user.num,
          user_pwd: $scope.user.pwd,
          user_type: '教师'
        }

        var url = rootUrl + "/user/register";

        $http.post(url, data)
          .success(function (result) {
            console.log(JSON.stringify(result));
            if (result.ret_code == 0) {
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

          })
      }else{
        $ionicPopup.alert({
          title: '提醒',
          template: '两次密码不一致'
        });
      }

    }

  })
