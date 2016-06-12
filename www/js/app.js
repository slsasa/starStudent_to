
//var rootUrl = "http://localhost:3000";
var rootUrl = "http://112.124.118.133:3000";
//var rootPicUrl = "http://localhost:3000/";

//var rootUrl = "http://172.16.41.169:3000";
var rootPicUrl = "http://112.124.118.133:3000/";

var isInstalleagdWeChat = function(){
  //share Wechat 检测用户是否安装了微信
  Wechat.isInstalled(function (installed,$ionicPopup) {
    $ionicPopup.alert({
      title:'检测安装微信',
      template:installed ? "yes" : "No"
    });

  }, function (reason) {
    $ionicPopup.alert({
      title:'检测安装微信',
      template:reason
    });
  });

}



// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js


angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

  .run(function ($ionicPlatform, $ionicHistory,$ionicPopup, $location,locals,userInfo,$rootScope) {

    $rootScope.user = {

      num: '',
      pwd: ''
    };

    $ionicPlatform.ready(function () {

      userInfo.checked = true;
      var user = locals.getObject("user");
      $rootScope.user.num = user.account;
      var checked = user.checked;
      if(checked ==true){
        userInfo.checked = checked;
        $rootScope.user.pwd = user.pwd;

      }else if(checked ==false){
        userInfo.checked = checked;
        $rootScope.user.pwd = '';

      }

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);


      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        //StatusBar.styleDefault();
        StatusBar.styleLightContent();
      }


    })
    //返回键处理
    //主页面显示退出提示框
    $ionicPlatform.registerBackButtonAction(function (e) {
      e.preventDefault();
      function showConfirm() {
        var confirmPopup = $ionicPopup.confirm({
          title: '<strong>退出应用?</strong>',
          template: '你确定要退出应用吗?',
          okText: '退出',
          cancelText: '取消'
        });
        confirmPopup.then(function (res) {
          if (res) {
            ionic.Platform.exitApp();
          } else {

          }
        });
      }

      if ($location.path() == '/index.html#/login') {
        showConfirm();
      } else if ($ionicHistory.backView()) {
        $ionicHistory.goBack();
      } else {
        showConfirm();
      }
      return false;
    }, 101);

  })
  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
    $ionicConfigProvider.backButton.text("");
    $ionicConfigProvider.backButton.previousTitleText(true);
    $ionicConfigProvider.tabs.position('bottom');

  })
  .filter('ifMore', function () {
    return function (input) {
      input = input || [];
      if (input.length > 23) {
        return input.slice(0, 23);
      } else {
        return input;
      }
    }
  })
  .filter('ifContentMore',function(){
    return function(input){
      input = input || [];
      if(input.length > 64){
        return input.slice(0,64);
      }else{
        return input;
      }
    }
  })

  .factory('userInfo', function () {
    var service = {
      id: ''
    }
    return service;
  })
