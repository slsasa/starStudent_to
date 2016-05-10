/**
 * Created by apple-ty on 16-5-10.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('aboutUs',{
        url:'/aboutUs',
        templateUrl: 'templates/setting/aboutUs.html',
        controller: 'aboutUsCtrl'
      });
  })
  .controller('aboutUsCtrl',function($scope,$stateParams){



  })
