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


  .controller('loginCtrl', function ($rootScope, $ionicPlatform,$scope,locals, $state, $ionicPopup, userInfo, $http, $ionicLoading,UserService) {

    var vm = this;

    //Initialize the database
    $ionicPlatform.ready(function(){

      UserService.initDB();

      UserService.getAllUsers().then(function(users){
        vm.users = users;
      });
      console.log('------------------------>initialize the database');
    });
    $scope.loginbks = [
      {
        "img": "img/logo/loginLogo.png"
      }
    ];

    $rootScope.user = {

      num: userInfo.userNum,
      pwd: userInfo.userPwd
    };


    var update = function (url, data) {
      $http.post(url, data)
        .success(function (result) {

          if (result.ret_code == 0) {
            var user = result.data;

            var cache = {
              pwd:$rootScope.user.pwd,
              account:$rootScope.user.num
            }



            UserService.addUser(cache);
            tmp = UserService.getAllUsers();
            console.log("allUser ---> " + JSON.stringify(tmp));

            tmp = tmp.$$state.value;
            tmp = tmp[tmp.length-1];
            console.log("->>>> obj" + JSON.stringify(tmp) );



            //UserService.deleteUser(tmp);
            //tmp = UserService.getAllUsers();
            //console.log('-------------deleted User',tmp)

            //for ( var a in tmp ) {
            //  UserService.deleteUser(a);
            //}
            //UserService.addUser(cache);
            //console.log('tmp valuse------------->',tmp);
            locals.set("user",user);
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
      locals.set("Password",$rootScope.user.pwd);
      var url = rootUrl + "/user/login";

      update(url, data);

    };

    //记住密码框
    $scope.remembers = {text: "记住密码" ,checked: true};

    var remember = function(){
      if($scope.remembers.checked == true){
        userInfo.checked = true;



        //locals.setState("checked",true);
        //userInfo.userNum = locals.get("user","").num;
        //userInfo.userPwd  = locals.get("Password","");
        //UserService.initDB().then(function(){
        //  console.log("then init DB ->>>>>>>>>>>>>>>>>>>>>>")
        //  tmp = UserService.getAllUsers();
        //  console.log("initialize ->>>>> " + JSON.stringify(tmp) );
        //
        //  user = UserService.getAllUsers();
        //  if ( user.$$state.status === '0' ) return;
        //  user = user.$$state.value;
        //  if ( user != undefined && user.length > 0 ) {
        //    user = user[user.length-1];
        //    userInfo.userNum = user.account;
        //    userInfo.userPwd = user.pwd;
        //  }
        //});


      }
    }

    remember();

    $scope.clickRemember = function(checked){
      if(checked == false){
        userInfo.checked = false;
        locals.setState("checked",'');
      }
    }




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
