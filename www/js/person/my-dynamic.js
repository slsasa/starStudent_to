/**
 * Created by sls on 16/5/10.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('my_dynamic',{
        url:'/my-dynamic',
        templateUrl: 'templates/person/my-dynamic.html',
        controller: 'myDynamicCtrl'

      });
  })
  .controller('myDynamicCtrl',function($scope){
    $scope.myDynamic = [{
      time:148620235252,
      content:'你说什么就是什么鬼东西，发动态，神经病,今天晚上是个夜光高照的页面',
      img:'img/img1.png'
    },{
      time:146620235252,
      content:'你说什么就是什么鬼东西，发动态，神经病',
      img:'img/img3.png'
    },{
      time:147620235252,
      content:'你说什么就是什么鬼东西，发动态，神经病',

    },{
      time:148620235252,
      content:'你说什么就是什么鬼东西，发动态，神经病',
      img:'img/img2.png'
    }]


  })
