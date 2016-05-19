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
            templateUrl: 'templates/dynamic/dynamics.html',
            controller: 'dynamicCtrl'
          }
        }
      });
  })

  .controller('dynamicCtrl', function ($scope, $ionicPopup, $http, $ionicLoading) {

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
          difTimeRes += ' 秒前'
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


    $ionicLoading.show();

    var getSchoolData = function () {
      var url = rootUrl + "/dynamic/get_all_list";

      $http.get(url, {params: {DyType: 'school'}})
        .success(function (result) {

          var data = result['data'];

          data.forEach(function (item) {
            item['IssuerAvatarRef']['Url'] = rootPicUrl + item['IssuerAvatarRef']['Url'];
            item['Time'] = calcTime(item["IssueTime"])

          });

          $scope.schoolDynamics = result['data'];
          $ionicLoading.hide();
        })
        .error(function (err) {
          $ionicLoading.hide();
          $ionicPopup.alert({
            title: 'err',
            template: '数据加载失败'
          });
          console.log(err);
        })
    };

    var getStudentData = function () {
      var url = rootUrl + "/dynamic/get_all_list";

      $http.get(url, {params: {DyType: 'student'}})
        .success(function (result) {
          var data = result.data;

          data.forEach(function (item) {
            item['IssuerAvatarRef']['Url'] = rootPicUrl + item['IssuerAvatarRef']['Url'];
            item.Time = calcTime(item["IssueTime"]);
          });

          $scope.stuDynamics = data;
          $ionicLoading.hide();
        })
        .error(function (err) {
          $ionicLoading.hide();
          //console.log(err);
        })
    };

    var getTeacherData = function () {
      var url = rootUrl + "/dynamic/get_all_list";

      $http.get(url, {params: {DyType: 'teacher'}})
        .success(function (result) {

          var data = result.data;
          data.forEach(function (item) {

            item['IssuerAvatarRef']['Url'] = rootPicUrl + item['IssuerAvatarRef']['Url'];
            item.Time = calcTime(item['IssueTime']);

          });

          $scope.terDynamics = data;
          $ionicLoading.hide();
        })
        .error(function (err) {
          $ionicLoading.hide();
          console.log("获取数据失败");
        })
    };


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
      $scope.objStudent.style.display = "none";
      $scope.objTeacher.style.display = "none";
      $scope.objSchool.style.display = "";
      if ($scope.objSchool.style.display == "") {

        changeColorBg("", "#F96A9F", "");
        changeColorFont("black", "#fff", "black");

      }
      getSchoolData();
    };

    //学员动态按钮
    $scope.showStudentDynamic = function () {
      $scope.objTeacher.style.display = "none";
      $scope.objSchool.style.display = "none";
      $scope.objStudent.style.display = "";
      if ($scope.objStudent.style.display == "") {
        changeColorBg("#F96A9F", "", "");
        changeColorFont("#fff", "black", "black");

      }
      getStudentData();
    };

    //教师动态按钮
    $scope.showTeacherDynamic = function () {

      $scope.objSchool.style.display = "none";
      $scope.objStudent.style.display = "none";
      $scope.objTeacher.style.display = "";
      if ($scope.objTeacher.style.display == "") {
        changeColorBg("", "", "#F96A9F");
        changeColorFont("black", "black", "#fff");
      }
      getTeacherData();
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

    $scope.showStudentDynamic();

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
  });
