/**
 * Created by apple-ty on 16-4-28.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.home',{
        url:'/school-index',
        views:{'tabs-home':{
          templateUrl:'templates/school/school-index.html',
          controller:'homeCtrl'
        }}
      });
  })
  .controller('homeCtrl',function($scope,$state){
    //横幅
    $scope.banners =[
      {
        id:0,
        bannerImg:'img/img2.png',
        context:'擦擦',
        time:1461340799000
      },{
        id:1,
        bannerImg:'img/img3.png',
        context:'什么什么学院东东',
        time:1461340549000
      },{
        id:2,
        bannerImg:'img/img4.png',
        context:'字符串',
        time:1461240542302
      },{
        id:3,
        bannerImg:'img/img1.png',
        context:'行动的傻子，思想上的猪，嘴上的大侠',
        time:143131231331
      }];
    //学校成果
    $scope.dynamics = [
      {
        id:0,
        title:'2016年港澳校董迎春座谈会举行',
        content:'1月7日和13日，我校分别在澳门和香港两地举行了2016年校董迎春座谈会',
        time:'1461340799000'
      },{
        id:1,
        title:'澳门特区行政长官崔世安会见胡军校长',
        content:'1月7日，澳门特别行政长官，我校董事会副董事长崔世安在特区政府礼宾府会见胡军校长',
        time:'1461340799531'
      },{
        id:2,
        title:'我校优秀学子抵澳开启参访之旅',
        content:'5月4日，我校2014年优秀学生访澳团一行32人抵达澳门，开始了为期4天的参访之旅。',
        time:'1461350799000'
      }
    ];

    //跳转到学校成果
    $scope.intoSchOutcome = function(){
      $state.go('school-outcome');
    }

    //跳转到课程介绍
    $scope.intoCourseIntr = function(){
      $state.go('school-course');
    }



    //进入校园动态
    $scope.intoSchoolDynamic = function(){
      $state.go('school-dynamic');
    }

    //跳转到师质力量
    $scope.intoTeacherApti = function(){
      $state.go('school-faculty');
    }

    //跳转到荣誉区
    $scope.goHonor = function(){

      $state.go('honor-area');
    }

    //跳转到教师风采
    $scope.goTeacherStyle = function(){
      $state.go('teacher-mine')
    }
    //关于学校简介　
    $scope.goIntro = function(){
      alert('fff')
      $state.go('school-intro');
    }

  })
