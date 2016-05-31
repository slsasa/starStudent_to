/**
 * Created by apple-ty on 16-5-6.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        cache: true,
        templateUrl: 'templates/login/login.html',
        controller: 'loginCtrl'
      })
  })


  .controller('loginCtrl', function ($rootScope, $scope, $state, $ionicPopup, userInfo, $http, $ionicLoading) {


    $scope.loginbks = [
      {
        "img": "img/logo/loginLogo.png"
      }
    ];

    $rootScope.user = {

      num: '',
      pwd: ''
    };


    var update = function (url, data) {
      $http.post(url, data)
        .success(function (result) {

          if (result.ret_code == 0) {
            var user = result.data;
            userInfo._id = user._id;
            if (user.UserType == 'student') {

              userInfo.personType = '_stu';
              console.log(userInfo.personType);
              $state.go('tabs.home', {type: userInfo.personType});
            } else {

              userInfo.personType = '_teacher';
              console.log(userInfo.personType);
              $state.go('tabs.home', {type: userInfo.personType})
            }
          } else if (result.ret_code == 101) {
            console.log(result.msg);
            $ionicPopup.alert({
              title: '提醒',
              template: '账号或密码错误'
            });
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
            template: '请等会登录'

          })

        })
    }


    //提交表单 **登录**
    $scope.login = function () {
      $ionicLoading.show();
      var data = {
        Password: $rootScope.user.pwd,
        Account: $rootScope.user.num
      };
      console.log(data);

      var url = rootUrl + "/user/login";
      update(url, data);

    };

    //记住密码框
    $scope.remembers =  [
      {label: "记住密码" ,selected: true}
    ]



    //进入注册页面
    $scope.register = function () {
      $state.go('register');
    };
    //进入找回密码
    $scope.Forgotpw = function () {
      $state.go('findPwd');
    }


    $(document).ready(function(){
      $("a").animate({bottom:'215px'});
    });

  });
