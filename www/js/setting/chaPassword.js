/**
 * Created by apple-ty on 16-5-10.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('chaPassword',{
        url:'/chaPassword',
        templateUrl: 'templates/setting/chaPassword.html',
        controller: 'chaPasswordCtrl'
      });
  })
  .controller('chaPasswordCtrl',function($scope){



  })
