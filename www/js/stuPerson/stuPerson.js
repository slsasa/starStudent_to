/**
 * Created by apple-ty on 16-5-4.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.stuPerson',{
        url:'/stuPerson',
        views:{'stuPerson':{
          templateUrl: 'templates/stuPerson/stuPerson.html',
          controller: 'stuPersonCtrl'
        }}
      });
  })
  .controller('stuPersonCtrl',function($scope,$state){
    $scope.headbks = [
      {
        "img":"img/mebk.jpeg",
        "myname":"名字",
        "headimg":"img/head.jpeg"
      }
    ]

    //资料编辑
    $scope.editor = function () {
      $state.go('tabs.date-editor')
    }
    //学习情况
    $scope.learnSit = function(){
      $state.go('tabs.learn-situation')
    }
    //学员荣耀
    $scope.studentHon = function(){
      $state.go('tabs.students-honor')
    }
    //教师评语
    $scope.techerCom = function(){
      $state.go('tabs.techer-comment')
    }


    $scope.persondetails = [
      {
        "id":"0",
        "title":"学习园"
      },
      {
        "id":"1",
        "title":"我的动态"
      },
      {
        "id":"2",
        "title":"我的报名"
      },
    ];
  })
