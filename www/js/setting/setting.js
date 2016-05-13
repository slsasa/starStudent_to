/**
 * Created by apple-ty on 16-5-10.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('setting',{
        url:'/setting:type',
        templateUrl: 'templates/setting/setting.html',
        controller: 'settingCtrl'
      });
  })
  .controller('settingCtrl',function($scope,$stateParams){
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
        $scope.type = $stateParams.type;

  })
