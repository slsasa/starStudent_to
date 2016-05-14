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


  .controller('loginCtrl',function($scope,$state,$ionicPopup){


    $scope.loginbks = [
      {
        "img":"img/logobk.jpg"
      }
    ]
    $scope.user = {
      num:'',
      pwd:'',
      type:'学生'
    }
    //进入主页面
    $scope.login = function(){
      var t;
      if($scope.user.num !=='' && $scope.user.pwd !==''){
        if($scope.user.type == '学生') {
          t = '_stu'
          $state.go('tabs.home',{type:t});
        }else{
          t = '_teacher'
          $state.go('tabs.home',{type:t});
        }
      }else{
        $ionicPopup.alert({
          title:'提醒',
          template:'请重新输入'
        });
      }

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
