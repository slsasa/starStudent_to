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
        "img":"img/mebk.jpeg"
      }
    ]
    $scope.user = {
      num:'',
      pwd:'',
      type:''
    }
    //进入主页面
    $scope.login = function(){

      if($scope.user.num !=='' && $scope.user.pwd !==''){

        $state.go('tabs.home');
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
