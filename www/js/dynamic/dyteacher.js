/**
 * Created by apple-ty on 16-4-29.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.dynamic-tabs.ter-dynamic',{
        url:'/teacher-dynamic',
        views:{'dyteacher':{
          templateUrl: 'templates/dynamic/dyteacher.html',
          controller:'terDynamicCtrl'
        }}
      });
  })
  .controller('terDynamicCtrl',function($scope) {
    $scope.terDynamics = [{
      time: 1462281859141,
      name: '李4四',
      img: 'img/dy1.jpeg',
      content: '五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了',
    },{
      time: 1462081859141,
      name: '李3我',
      img: 'img/img2.png',
      content: '五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了',
    }]
  })
