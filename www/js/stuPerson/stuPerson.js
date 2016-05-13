/**
 * Created by apple-ty on 16-5-4.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.person_stu',{
        url:'/person_stu',
        views:{'person':{
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
      $state.go('date-editor')
    }
    //学习情况
    $scope.learnSit = function(){
      $state.go('learn-situation')
    }
    //学员荣耀
    $scope.studentHon = function(){
      $state.go('students-honor')
    }
    //教师评语
    $scope.techerCom = function(){
      $state.go('techer-comment')
    }

    $scope.goStuSetting = function(stu){
      $state.go('setting',{type:stu});
    }

    $scope.goDynamic = function(type){
      $state.go('my-dynamic',{type:type})
    }

  })
