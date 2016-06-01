/**
 * Created by sls on 16/5/11.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.dynamics', {
        url: '/dynamics',
        views: {
          'dynamic': {
            cache:true,
            templateUrl: 'templates/dynamic/dynamics.html',
            controller: 'dynCtrl'
          }
        }
      });
  })

  .controller('dynCtrl', function ($scope, $ionicPopup, $http, $ionicLoading, userInfo) {

    $scope.rootPicUrl = rootPicUrl;

    var calcTime = function( timeString ) {
      var tmp = new Date().getTime() - new Date(timeString).getTime();
      tmp = tmp / (1000);
      var level = 1;

      while ( tmp > 60 ) {
        tmp /= 60;
        level += 1;
        if ( level >= 3 ) break;
      }
      if ( tmp > 24 ) {
        level += 1;
        tmp /= 24;
      }
      var difTimeRes = parseInt(tmp);
      if ( difTimeRes > 30 ) {
        difTimeRes = new Date(timeString).toLocaleDateString()
        level += 1 ;
      }
      switch ( level ) {
        case 1:
          difTimeRes += '秒前'
          break;
        case 2:
          difTimeRes += ' 分钟前'
          break;
        case 3:
          difTimeRes += ' 小时前'
          break;
        case 4:
          difTimeRes += ' 天前'
          break;
        default:
          // bu 处理
          break;
      }
      return difTimeRes;
    }


    var update = function(type){
      $ionicLoading.show();
      var url = rootUrl + "/dynamic/get_all_list";

      $http.get(url,{params:{DyType:type}})
        .success(function(result){
          var data = result['data'];

          data.forEach(function(item){
            item['IssuerAvatarRef']['Url'] = rootPicUrl + item['IssuerAvatarRef']['Url'];
            item['Time'] = calcTime(item["IssueTime"]);
          });
          $scope[type+'Dynamics'] = result['data'];
          $ionicLoading.hide();
        })
        .error(function(err){
          $ionicLoading.hide();
          $ionicPopup.alert({
            title:'提醒',
            template:'校园动态获取数据失败:'+err
          });
        });
    }

    $scope.$on('$ionicView.beforeEnter',function(){
      update('student');
      update('school');
      update('teacher');
    })


    $scope.objSchool = document.getElementById('school');
    $scope.objStudent = document.getElementById('student');
    $scope.objTeacher = document.getElementById('teacher');

    $scope.objSchoolClick = document.getElementById('showSchoolClick');
    $scope.objStuClick = document.getElementById('showStuClick');
    $scope.objTeacherClick = document.getElementById('showTeacherClick');


    $scope.objStuClick.style.backgroundColor = "#F96A9F";
    $scope.objStuClick.style.color = "#fff";

    //学校动态按钮
    $scope.showSchoolDynamic = function () {

      $scope.flag = "school";
      $scope.objStudent.style.display = "none";
      $scope.objTeacher.style.display = "none";
      $scope.objSchool.style.display = "";
      if ($scope.objSchool.style.display == "") {

        changeColorBg("", "#F96A9F", "");
        changeColorFont("black", "#fff", "black");

      }

    };

    //学员动态按钮
    $scope.showStudentDynamic = function () {

      $scope.flag = "student";
      $scope.objTeacher.style.display = "none";
      $scope.objSchool.style.display = "none";
      $scope.objStudent.style.display = "";
      if ($scope.objStudent.style.display == "") {
        changeColorBg("#F96A9F", "", "");
        changeColorFont("#fff", "black", "black");

      }


    };

    //教师动态按钮
    $scope.showTeacherDynamic = function () {

      $scope.flag = "teacher";
      $scope.objSchool.style.display = "none";
      $scope.objStudent.style.display = "none";
      $scope.objTeacher.style.display = "";
      if ($scope.objTeacher.style.display == "") {
        changeColorBg("", "", "#F96A9F");
        changeColorFont("black", "black", "#fff");
      }


    };

    var changeColorBg = function (stu, school, teacher) {
      $scope.objStuClick.style.backgroundColor = stu;
      $scope.objSchoolClick.style.backgroundColor = school;
      $scope.objTeacherClick.style.backgroundColor = teacher;
    };

    var changeColorFont = function (stu, school, teacher) {
      $scope.objStuClick.style.color = stu;
      $scope.objSchoolClick.style.color = school;
      $scope.objTeacherClick.style.color = teacher;
    };


    $scope.showClickSchool = function (index) {
      var objClick = document.getElementById(index + 'school');

      if (objClick.style.display == "none") {
        objClick.style.display = "";
      } else {
        objClick.style.display = "none";
      }
    };

    $scope.showClickStudent = function (index) {
      var objClick = document.getElementById(index + 'stu');
      if (objClick.style.display == "none") {
        objClick.style.display = "";
      } else if (objClick.style.display == "") {
        objClick.style.display = "none";
      }
    };

    $scope.showClickTeacher = function (index) {
      var objClick = document.getElementById(index + 'teacher');
      if (objClick.style.display == "none") {
        objClick.style.display = "";
      } else {
        objClick.style.display = "none";
      }
    };

    $scope.showContentSchool = function (schoolId) {
      var objMoreContent = document.getElementById(schoolId + "moreContentSchool");
      var objContentSchool = document.getElementById(schoolId + "contentSchool");
      if (objMoreContent.style.display == "none") {
        objContentSchool.style.display = "none";
        objMoreContent.style.display = "";
      } else {
        objMoreContent.style.display = "none";
        objContentSchool.style.display = "";
      }
    };

    $scope.showContentStu = function (stuId) {
      var objMoreContent = document.getElementById(stuId + "moreContentStu");
      var objContentSchool = document.getElementById(stuId + "contentStu");
      if (objMoreContent.style.display == "none") {
        objContentSchool.style.display = "none";
        objMoreContent.style.display = "";
      } else {
        objMoreContent.style.display = "none";
        objContentSchool.style.display = "";
      }
    };

    $scope.showContentTer = function (teacherId) {
      var objMoreContent = document.getElementById(teacherId + "moreContentTer");
      var objContentSchool = document.getElementById(teacherId + "contentTer");
      if (objMoreContent.style.display == "none") {
        objContentSchool.style.display = "none";
        objMoreContent.style.display = "";
      } else {
        objMoreContent.style.display = "none";
        objContentSchool.style.display = "";
      }
    }



    //点赞
    //判断是在校园动态，还是学员动态还是教师动态
    $scope.flag = "";
    $scope.addLike = function ($index) {

      switch ($scope.flag) {
        case 'school':
          var dynamicId = $scope['schoolDynamics'][$index]._id;
          break;
        case 'student':
          var dynamicId = $scope['studentDynamics'][$index]._id;
          break;
        case 'teacher':
          var dynamicId = $scope['teacherDynamics'][$index]._id;
          break;
        default :
          break;
      }

      var data = {
        UserId: userInfo._id,
        DynamicId: dynamicId
      }

      var url = rootUrl + "/dynamic/add_like";

      $http.post(url, data)
        .success(function(result){
          $ionicPopup.alert({
            title:'success',
            template:'点赞成功'
          })

        })
        .error(function(err){

        })
    }
  });
