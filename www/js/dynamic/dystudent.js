/**
 * Created by apple-ty on 16-4-29.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.dynamic-tabs.stu-dynamic',{
        url:'/stu-dynamic',
        views:{'dystudent':{
          templateUrl: 'templates/dynamic/dystudent.html',
          controller:'stuDynamicCtrl'
        }}
      });
  })
  .controller('stuDynamicCtrl',function($scope) {
    $scope.stuDynamics = [{
      time: 1462281859141,
      name: '李四',
      img: 'img/dy1.jpeg',
      content: '五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了',
    },{
      time: 1462081859141,
      name: '李我',
      img: 'img/img2.png',
      content: '五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了',
    }]
  })
