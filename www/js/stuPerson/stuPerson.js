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
  .controller('stuPersonCtrl',function($rootScope,$scope,$state,$ionicPopup){
    $scope.headbks = [
      {
        "img":"img/stuperson/stubk.png",
        "myname":"名字",
        "headimg":"img/stuperson/stuh.png"
      }
    ]

    //资料编辑
    $scope.editor = function () {
      $state.go('personage-msg');
    }
    //学习情况
    $scope.learnSits = function(){
      $state.go('student-state');
      //$state.go('learn-situation');
    }
    //学员荣耀
    $scope.studentHons = function(){
      $state.go('student-honor');
    }
    //教师评语
    $scope.techerCom = function(){
      $state.go('techer-comment');
    }

    $scope.goStuSetting = function(stu){
      $state.go('setting',{type:stu});
    }

    $scope.goStuMyDynamic = function(type){
      $state.go('my-dynamic',{type:type});
    }

    $scope.outlogin = function(){
      $ionicPopup.confirm({
        title: "退出当前账号",
        template: "退出账号将收不到任何信息，是否继续？",
        buttons:[
          {
            text:"是",
            onTap:function(e){
              $rootScope.user = {};
              $state.go('login');
            }
          },
          {text:"否"}
        ]
      })

    }

  })
