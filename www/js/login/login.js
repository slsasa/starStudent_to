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


  .controller('loginCtrl', function ($rootScope, $ionicPlatform,$scope,locals, $state, $ionicPopup, userInfo, $http,UserService,$ionicLoading) {
    $ionicPlatform.ready(function () {
      UserService.initDB();
    });
    //$scope.UserService = {
    //  initDB: function() {
    //    db = $cordovaSQLite.openDB({ name: "user_db" });
    //    $cordovaSQLite.execute(db,
    //      "create table if not exists t_user " +
    //      "(id integer primary key, " +
    //      " account text " +
    //      " pws text " +
    //      " checked integer)");
    //  },
    //  addUser: function(user){
    //    var query = "insert into t_user(account, pwd, check) values(?,?,?)";
    //    $cordovaSQLite.execute(db, query, [user.account, user.pwd, user.checked == undefined ? 0 : user.checked] )
    //      .then( function (res) {
    //        console.log ( "success in insert " + JSON.stringify(res));
    //      }, function(err) {
    //        console.error(err);
    //      });
    //  },
    //  getAllUsers: function(callback) {
    //    var query = "select * from t_user";
    //    $cordovaSQLite.execute(db, query, [])
    //      .then(function(res) {
    //        callback(res);
    //      }, function(err) {
    //        console.error(err);
    //      })
    //  }
    //}

    $scope.loginbks = [
      {
        "img": "img/logo/loginLogo.png"
      }
    ];

    $rootScope.user = {

      num: '',
      pwd: ''
    };

    //$ionicPlatform.ready(function () {
    //
    //});


    var update = function (url, data) {
      $http.post(url, data)
        .success(function (result) {

          if (result.ret_code == 0) {
            var user = result.data;
            var cache = {
              pwd:$rootScope.user.pwd,
              account:$rootScope.user.num,
              checked:$scope.remembers.checked? 1 : 0
            }

            //本地数据库



            //locals.set("user",user);
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
          });
        });
    };


    //提交表单 **登录**
    $scope.login = function () {
      $ionicLoading.show();
      var data = {
        Password: $rootScope.user.pwd,
        Account: $rootScope.user.num
      };
      locals.set("Password",$rootScope.user.pwd);
      var url = rootUrl + "/user/login";

      update(url, data);

    };

    //记住密码框
    $scope.remembers = {text: "记住密码" ,checked: true};

    //var remember = function(){
    //  if($scope.remembers.checked){
    //    userInfo.checked = true;
    //    }
    //
    //  }
    //}


    $scope.clickRemember = function(checked){
      $scope.remembers.checked = checked;
    };

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

    //$scope.$on('$ionicView.afterEnter',function(){
    //
    //},true);

  });
