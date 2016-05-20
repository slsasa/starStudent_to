/**
 * Created by apple-ty on 16-5-6.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        cache: false,
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
      num: '321',
      pwd: '000',
    };


    var update = function (url, data) {
      $http.post(url, data)
        .success(function (result) {

          console.log(JSON.stringify(result));
          userInfo._id = result.data._id;
          console.log(userInfo._id);

          if (result.ret_code == 0) {
            var user = result.data;
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

          //console.log('userData >>>>>:',JSON.stringify(result.data ));
          $ionicLoading.hide();

        })
        .error(function (err) {
          $ionicLoading.hide();
          $ionicPopup.alert({
            title: 'err',
            template: '请等会登录'

          })
          console.log("err>>>" + JSON.stringify(err));
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
      $state.go('forgotpw');
    }
  });
