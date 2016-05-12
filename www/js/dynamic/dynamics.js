/**
 * Created by sls on 16/5/11.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.dynamics',{
        url:'/dynamics',
        views:{'dynamic':{
          templateUrl: 'templates/dynamic/dynamics.html',
          controller:'dynamicCtrl'
        }}
      });
  })

  .controller('dynamicCtrl',function($scope){

    $scope.schoolDynamics =[{
      img:'img/img1.png',
      schoolName:'格林艺术培训学校',
      time:14613407993000,
      content:'1月7日和13日，我校分别在澳门和香港两地举行了2016年校董迎春座谈会',
      },{
      img:'img/img1.png',
      schoolName:'格林艺术培训学校',
      time:14634242424244,
      content:'1月7日，澳门特别行政长官，我校董事会副董事长崔世安在特区政府礼宾府会见胡军校长'
      },{
      img:'img/img1.png',
      schoolName:'格林艺术培训学校',
      time:14645353453534,
      content:'5月4日，我校2014年优秀学生访澳团一行32人抵达澳门，开始了为期4天的参访之旅。'
      }];

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
    }];
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
    }];


    $scope.objSchool = document.getElementById('school');
    $scope.objStudent = document.getElementById('student');
    $scope.objTeacher = document.getElementById('teacher');
    $scope.showSchoolDynamic = function() {
        $scope.objStudent.style.display = "none";
        $scope.objTeacher.style.display = "none";
        $scope.objSchool.style.display = "";

    }

    $scope.showStudentDynamic = function() {

      $scope.objTeacher.style.display = "none";

      $scope.objSchool.style.display = "none";
      $scope.objStudent.style.display = "";

    }

    $scope.showTeacherDynamic = function() {

      $scope.objSchool.style.display = "none";
      $scope.objStudent.style.display = "none";
      $scope.objTeacher.style.display = "";



    }

    $scope.test = function(){
      alert('aa');
    }

  })
