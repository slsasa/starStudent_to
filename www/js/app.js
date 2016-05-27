
//var rootUrl = "http://localhost:3000";
//var rootUrl = "http://112.124.118.133:3000";
//var rootPicUrl = "http://localhost:3000/";

var rootUrl = "http://172.16.41.169:3000";
var rootPicUrl = "http://172.16.41.169:3000/";



// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

  .run(function ($rootScope,$ionicPlatform, $ionicHistory, $ionicPopup, $location, $cordovaToast,$cordovaKeyboard) {


    //$ionicPlatform.registerBackButtonAction(function (e) {
    //  //判断处于哪个页面时双击退出
    //  if ($location.path() == '/login' || $location.path() == '/school-index') {
    //    if ($rootScope.backButtonPressedOnceToExit) {
    //      ionic.Platform.exitApp();
    //    } else {
    //      $rootScope.backButtonPressedOnceToExit = true;
    //      $cordovaToast.showShortBottom('再按一次退出系统');
    //      setTimeout(function () {
    //        $rootScope.backButtonPressedOnceToExit = false;
    //      }, 2000);
    //    }
    //  }else if ($ionicHistory.backView()) {
    //    if ($cordovaKeyboard.isVisible()) {
    //      $cordovaKeyboard.close();
    //    } else {
    //      $ionicHistory.goBack();
    //    }
    //  }
    //  else {
    //    $rootScope.backButtonPressedOnceToExit = true;
    //    $cordovaToast.showShortBottom('再按一次退出系统');
    //    setTimeout(function () {
    //      $rootScope.backButtonPressedOnceToExit = false;
    //    }, 2000);
    //  }
    //  e.preventDefault();
    //  return false;
    //}, 101);


    $ionicPlatform.ready(function () {
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

      if ($location.path() == '/home/homeInfo') {
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


      .state('apply/apply-details', {
        url: '/apply/apply:applyId',
        templateUrl: 'templates/apply/apply-details.html',
        controller: 'ApplydetaCtrl'
      })
      .state('submit-apply', {
        url: '/submit-apply',
        templateUrl: 'templates/apply/submit-apply.html',
        controller: 'submitApplyCtrl'
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
    $ionicConfigProvider.backButton.text("");
    $ionicConfigProvider.backButton.previousTitleText(true);
    $ionicConfigProvider.tabs.position('bottom');

  })
  .filter('ifMore', function () {
    return function (input) {
      input = input || [];
      if (input.length > 33) {
        return input.slice(0, 33);
      } else {
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
