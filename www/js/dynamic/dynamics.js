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
      id:0,
      img:'img/img1.png',
      schoolName:'格林艺术培训学校',
      time:14613407993000,
      content:'1月7日和13日，我校分别在澳门和香港两地举行了2016年校董迎春座谈会,1月7日和13日，我校分别在澳门和香港两地举行了2016年校董迎春座谈',


      },{
      id:1,
      img:'img/img1.png',
      schoolName:'格林艺术培训学校',
      time:14634242424244,
      content:'1月7日'
      },{
      id:2,
      img:'img/img1.png',
      schoolName:'格林艺术培训学校',
      time:14645353453534,
      content:'5月4日，我校2014年优秀学生访澳团一行32人抵达澳门，开始了为期4天的参访之旅我校2014年优秀学生访澳团一行32人抵达澳门，开始了为期4天的参访之旅我校2014年优秀学生访澳团一行32人抵达澳门，开始了为期4天的参访之旅。'
      }];

    $scope.stuDynamics = [{
      id:0,
      time: 1462281859141,
      name: '李四',
      img: 'img/dy1.jpeg',
      content: '五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了',
    },{
      id:1,
      time: 1462081859141,
      name: '李我',
      img: 'img/img2.png',
      content: '五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了',
    }];
    $scope.terDynamics = [{
      id:0,
      time: 1462281859141,
      name: '李4四',
      img: 'img/dy1.jpeg',
      content: '五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了',
    },{
      id:1,
      time: 1462081859141,
      name: '李3我',
      img: 'img/img2.png',
      content: '五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了，五一过得真快，没感觉，就过了',
    }];


    $scope.objSchool = document.getElementById('school');
    $scope.objStudent = document.getElementById('student');
    $scope.objTeacher = document.getElementById('teacher');

    $scope.objSchoolClick = document.getElementById('showSchoolClick');
    $scope.objStuClick = document.getElementById('showStuClick');
    $scope.objTeacherClick = document.getElementById('showTeacherClick');


    $scope.objStuClick.style.backgroundColor = "#F96A9F";
    $scope.objStuClick.style.color = "#fff";
    $scope.showSchoolDynamic = function() {

      $scope.objStudent.style.display = "none";
      $scope.objTeacher.style.display = "none";
      $scope.objSchool.style.display = "";
      if($scope.objSchool.style.display == ""){

        changeColorBg("","#F96A9F","");
        changeColorFont("black","#fff","black");

      }


    }

    $scope.showStudentDynamic = function() {

      $scope.objTeacher.style.display = "none";
      $scope.objSchool.style.display = "none";
      $scope.objStudent.style.display = "";

      if($scope.objStudent.style.display == ""){
        changeColorBg("#F96A9F","","");
        changeColorFont("#fff","black","black");

      }

    }

    $scope.showTeacherDynamic = function() {

      $scope.objSchool.style.display = "none";
      $scope.objStudent.style.display = "none";
      $scope.objTeacher.style.display = "";

      if($scope.objTeacher.style.display == ""){
        changeColorBg("","","#F96A9F");
        changeColorFont("black","black","#fff");
      }


    }

    var changeColorBg = function(stu,school,teacher){
      $scope.objStuClick.style.backgroundColor = stu;
      $scope.objSchoolClick.style.backgroundColor = school;
      $scope.objTeacherClick.style.backgroundColor = teacher;
    }

    var changeColorFont = function(stu,school,teacher){
      $scope.objStuClick.style.color = stu;
      $scope.objSchoolClick.style.color = school;
      $scope.objTeacherClick.style.color = teacher;



    }

    $scope.showClickSchool = function(schoolId){
      var objClick = document.getElementById(schoolId+'school');

      if(objClick.style.display == "none"){
        objClick.style.display = "";
      }else{
        objClick.style.display = "none";
      }


    }
    $scope.showClickStudent = function(studentId){
      var objClick = document.getElementById(studentId+'stu');
      if(objClick.style.display == "none"){
        objClick.style.display = "";
      }else if(objClick.style.display == ""){
        objClick.style.display = "none";
      }
    }
    $scope.showClickTeacher = function(teacherId){
      var objClick = document.getElementById(teacherId + 'teacher');
      if(objClick.style.display == "none"){
        objClick.style.display = "";
      }else{
        objClick.style.display = "none";
      }
    }



    $scope.showContentSchool = function(schoolId){

      var objMoreContent = document.getElementById(schoolId+"moreContentSchool");
      var objContentSchool = document.getElementById(schoolId+"contentSchool");
      if(objMoreContent.style.display == "none"){
        objContentSchool.style.display = "none";
        objMoreContent.style.display = "";


      }else{
        objMoreContent.style.display = "none";
        objContentSchool.style.display = "";

      }
    }

    $scope.showContentStu = function(stuId){
      var objMoreContent = document.getElementById(stuId+"moreContentStu");
      var objContentSchool = document.getElementById(stuId+"contentStu");
      if(objMoreContent.style.display == "none"){
        objContentSchool.style.display = "none";
        objMoreContent.style.display = "";


      }else{
        objMoreContent.style.display = "none";
        objContentSchool.style.display = "";

      }
    }

    $scope.showContentTer = function(teacherId){
      var objMoreContent = document.getElementById(teacherId+"moreContentTer");
      var objContentSchool = document.getElementById(teacherId+"contentTer");
      if(objMoreContent.style.display == "none"){
        objContentSchool.style.display = "none";
        objMoreContent.style.display = "";


      }else{
        objMoreContent.style.display = "none";
        objContentSchool.style.display = "";

      }

    }




  })
