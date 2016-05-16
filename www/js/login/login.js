/**
 * Created by apple-ty on 16-5-6.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login/login.html',
        controller:'loginCtrl'
      })
  })


  .controller('loginCtrl',function($scope, $state, $ionicPopup, userInfo, $http){


    $scope.loginbks = [
      {
        "img":"img/logobk.jpg"
      }
    ]
    $scope.user = {
      num:'',
      pwd:'',
      type:''
      //numverify :''
    }






    //提交表单 **登录**
    $scope.login = function(){
      var t;

      var data = {
        user_pwd: $scope.user.pwd,
        user_tel: $scope.user.num
      }

      var url = rootUrl + "/user/login";

      $http.post(url, data)
        .success(function(result){
          console.log(JSON.stringify(result));
          userInfo._id = result.data._id;
          console.log(userInfo.id);

          if(result.ret_code == 0) {
            var user = result.data;
            if(user.type == '学员') {
              t = '_stu';
              userInfo.personType = '_stu';
              $state.go('tabs.home', {type:t});
            }else{
              t = '_teacher';
              userInfo.personType = '_teacher';
              $state.go('tabs.home', {type:t})
            }
          }else if(result.ret_code == 101){
            $ionicPopup.alert({
              title: '提醒',
              template: '账号或密码错误'
            });
            console.log(result.msg);
          }else{
            $ionicPopup.alert({
              title: '提醒',
              template: '登录异常'
            });
          }

        })
        .error(function(err){

        })
    }


    //进入注册页面
    $scope.register = function(){
      $state.go('register');
    }
      //进入找回密码
      $scope.Forgotpw = function(){
        $state.go('forgotpw');
      }
  })
