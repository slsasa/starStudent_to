/**
 * Created by apple-ty on 16-5-10.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('setting',{
        url:'/setting',
        templateUrl: 'templates/setting/setting.html',
        controller: 'settingCtrl'
      });
  })
  .controller('settingCtrl',function($scope){
$scope.settings = [

  {
    id:0,
    title:'检验更新'
  },
  {
    id:1,
    title:'关于我们'
  },
]
  })
