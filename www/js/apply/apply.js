/**
 * Created by apple-ty on 16-5-4.
 */

angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.apply',{
        url:'/apply',
        views:{'apply':{
          templateUrl: 'templates/apply/apply.html',
          controller: 'ApplyCtrl'
        }}
      });
  })

  .controller('ApplyCtrl',function($scope){
    $scope.applys = [
      {
        "id":'0',
        "title": "好好学习，天天向上",
        "application":"报名费：100"
      },
      {
        "id":'1',
        "title": "好好学习，天天向上",
        "application":"报名费：100"
      },
      {
        "id":'2',
        "title": "好好学习，天天向上",
        "application":"报名费：100"
      },
    ]
  });
