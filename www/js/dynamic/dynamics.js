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

  .controller('dynamicCtrl',function($scope, $ionicPopup, $http){

    var getSchoolData = function(){
      var url = rootUrl + "/school_dynamic/get_list";

      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;
          data.forEach(function(item){
            item.school_head_url = "http://115.159.115.145:3000/" + item.school_head_url;
            item.pic_url_list.forEach(function(img){
              img = rootPicUrl + img;
            })
          });
          $scope.schoolDynamics = data;
        })
        .error(function(err){
          console.log("获取数据失败");
        })
    }

    var getStundetData = function(){
      var url = rootUrl + "/student_dynamic/get_all_list";

      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;
          data.forEach(function(item){
            item.pic_avatar_url = rootPicUrl + item.pic_avatar_url;
          })
          $scope.stuDynamics = data;
        })
        .error(function(err){
          console.log("获取数据失败");
        })
    }

    var getTeacherData = function(){
      var url = rootUrl + "/teacher_dynamic/get_all_list";

      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;
          data.forEach(function(item){
            item.pic_avatar_url = rootPicUrl + item.pic_avatar_url;
          })
          $scope.terDynamics = data;
        })
        .error(function(err){
          console.log("获取数据失败");
        })
    }


    $scope.objSchool = document.getElementById('school');
    $scope.objStudent = document.getElementById('student');
    $scope.objTeacher = document.getElementById('teacher');

    $scope.objSchoolClick = document.getElementById('showSchoolClick');
    $scope.objStuClick = document.getElementById('showStuClick');
    $scope.objTeacherClick = document.getElementById('showTeacherClick');


    $scope.objStuClick.style.backgroundColor = "#F96A9F";
    $scope.objStuClick.style.color = "#fff";

    //学校动态按钮
    $scope.showSchoolDynamic = function() {
      $scope.objStudent.style.display = "none";
      $scope.objTeacher.style.display = "none";
      $scope.objSchool.style.display = "";
      if($scope.objSchool.style.display == ""){

        changeColorBg("","#F96A9F","");
        changeColorFont("black","#fff","black");

      }
      getSchoolData();
    }

    //学员动态按钮
    $scope.showStudentDynamic = function() {
      $scope.objTeacher.style.display = "none";
      $scope.objSchool.style.display = "none";
      $scope.objStudent.style.display = "";
      if($scope.objStudent.style.display == ""){
        changeColorBg("#F96A9F","","");
        changeColorFont("#fff","black","black");

      }
      getStundetData();
    }

    //一开始显示学员动态


    //教师动态按钮
    $scope.showTeacherDynamic = function() {

      $scope.objSchool.style.display = "none";
      $scope.objStudent.style.display = "none";
      $scope.objTeacher.style.display = "";
      if($scope.objTeacher.style.display == ""){
        changeColorBg("","","#F96A9F");
        changeColorFont("black","black","#fff");
      }
      getTeacherData();
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

    $scope.showStudentDynamic();

    $scope.showClickSchool = function(index){
      var objClick = document.getElementById(index+'school');

      if(objClick.style.display == "none"){
        objClick.style.display = "";
      }else{
        objClick.style.display = "none";
      }


    }
    $scope.showClickStudent = function(index){
      var objClick = document.getElementById(index+'stu');
      if(objClick.style.display == "none"){
        objClick.style.display = "";
      }else if(objClick.style.display == ""){
        objClick.style.display = "none";
      }
    }
    $scope.showClickTeacher = function(index){
      var objClick = document.getElementById(index + 'teacher');
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
