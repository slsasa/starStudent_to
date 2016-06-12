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
    //判断是在校园动态，还是学员动态还是教师动态
    $scope.flag = "student";



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
          console.log('data----------->>>dynamic',data);



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
    });


    //初始化获得页面元素
    var initDoc = function() {
      //获取school ,student,teacher三个div
      $scope.objSchool = document.getElementById('school');
      $scope.objStudent = document.getElementById('student');
      $scope.objTeacher = document.getElementById('teacher');

      //获取页面上方 school ,student,teacher按钮，并初始化按钮状态
      $scope.objSchoolClick = document.getElementById('showSchoolClick');
      $scope.objStuClick = document.getElementById('showStudentClick');
      $scope.objTeacherClick = document.getElementById('showTeacherClick');

      $scope.objStuClick.style.backgroundColor = "#F96A9F";
      $scope.objStuClick.style.color = "#fff";
    }
    initDoc();

    //学校动态按钮,显示学校动态内容，并改变学校动态按钮状态
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

    //学员动态按钮,显示学员动态内容，并改变学员动态按钮状态
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

    //教师动态按钮,显示教师动态内容，并改变教师动态按钮状态
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

    //改变按钮背景颜色
    var changeColorBg = function (stu, school, teacher) {
      $scope.objStuClick.style.backgroundColor = stu;
      $scope.objSchoolClick.style.backgroundColor = school;
      $scope.objTeacherClick.style.backgroundColor = teacher;
    };
    //改变按钮字体颜色
    var changeColorFont = function (stu, school, teacher) {
      $scope.objStuClick.style.color = stu;
      $scope.objSchoolClick.style.color = school;
      $scope.objTeacherClick.style.color = teacher;
    };


    //点赞分享按钮组合显示
    $scope.showComBtnSchool = function (index) {
     $scope.schObjClick = document.getElementById(index + 'school');

      if ( $scope.schObjClick.style.display == "none") {
        $scope.schObjClick.style.display = "";
      } else {
        $scope.schObjClick.style.display = "none";
      }
    };

    $scope.showComBtnStudent = function (index) {
      $scope.stuObjClick = document.getElementById(index + 'stu');
      if ($scope.stuObjClick.style.display == "none") {
        $scope.stuObjClick.style.display = "";
      } else if ($scope.$scope.stuObjClick.style.display == "") {
        $scope.stuObjClick.style.display = "none";
      }
    };

    $scope.showComBtnTeacher = function (index) {
      $scope.terObjClick = document.getElementById(index + 'teacher');
      if ($scope.terObjClick.style.display == "none") {
        $scope.terObjClick.style.display = "";
      } else {
        $scope.terObjClick.style.display = "none";
      }
    };


    //动态内容全部显示



    $scope.showContentSchool = function (schoolId) {
      var objStateContent = document.getElementById(schoolId+'stateSch');
      var objMoreContent = document.getElementById(schoolId + "moreContentSchool");
      var objContentSchool = document.getElementById(schoolId + "contentSchool");
      if (objMoreContent.style.display == "none") {
        objContentSchool.style.display = "none";
        objMoreContent.style.display = "";
        objStateContent.innerHTML = '收起';

      } else {
        objMoreContent.style.display = "none";
        objContentSchool.style.display = "";
        objStateContent.innerHTML = '全文';

      }
    };

    $scope.showContentStu = function (stuId) {
      var objMoreContent = document.getElementById(stuId + "moreContentStu");
      var objContentSchool = document.getElementById(stuId + "contentStu");
      var objStateContent = document.getElementById(stuId+'stateStu');

      if (objMoreContent.style.display == "none") {
        objContentSchool.style.display = "none";
        objMoreContent.style.display = "";
        objStateContent.innerHTML = '收起';
      } else {
        objMoreContent.style.display = "none";
        objContentSchool.style.display = "";
        objStateContent.innerHTML = '全文';
      }
    };

    $scope.showContentTer = function (teacherId) {
      var objMoreContent = document.getElementById(teacherId + "moreContentTer");
      var objContentSchool = document.getElementById(teacherId + "contentTer");
      var objContentState = document.getElementById(teacherId + 'stateTer');
      if (objMoreContent.style.display == "none") {
        objContentSchool.style.display = "none";
        objMoreContent.style.display = "";
        objContentState.innerHTML = '收起';
      } else {
        objMoreContent.style.display = "none";
        objContentSchool.style.display = "";
        objContentState.innerHTML = '全文';
      }
    };



    //点赞

    $scope.addLike = function ($index,Id) {

      switch ($scope.flag) {
        case 'school':
          $scope.schObjClick = document.getElementById($index + 'school');
          $scope.schObjClick.style.display = "none";
          break;
        case 'student':

          $scope.stuObjClick = document.getElementById($index + 'stu');
          $scope.stuObjClick.style.display = "none";
          break;
        case 'teacher':

          $scope.terObjClick = document.getElementById($index + 'teacher');
          $scope.terObjClick.style.display = "none";
          break;
        default :
          break;
      }

      var data = {
        UserId: userInfo._id,
        DynamicId: Id
      }

      var url = rootUrl + "/dynamic/add_like";

      $http.post(url, data)
        .success(function(result){
          $ionicPopup.alert({
            title:'成功',
            template:'点赞成功'
          });

        })
        .error(function(err){
          $ionicPopup.alert({
            title:'失败',
            template:'点赞失败'+err
          });
        });
    };

    var searchIndex = function(arr,Id){
       for(var i = 0; i < arr.length;i++){
         if(arr[i]._id == Id){
           return arr[i];
         }
       }
    }

    $scope.shareWeChat = function(index,Id){

      switch ($scope.flag){
        case 'school':
          $scope.schObjClick = document.getElementById(index + 'school');
          $scope.schObjClick.style.display = "none";

          var schoolDynamic = searchIndex($scope['schoolDynamics'],Id) ;

          isInstalleagdWeChat();
          Wechat.share({
            text: schoolDynamic['Content'],
            scene:  Wechat.Scene.TIMELINE  // share to Timeline
          }, function () {
            $ionicPopup.alert({
              title:'提示' ,
              template:'成功'
            });
          }, function (reason) {
            $ionicPopup.alert({
              title:'Failed:' ,
              template:reason
            });

          });
          //Wechat.share({
          //  message: {
          //    title: "",
          //    description: schoolDynamic['Content'],
          //    thumb:rootPicUrl + schoolDynamic['PicListRef'][0]['Url'],
          //    mediaTagName: "TEST-TAG-001",
          //    messageExt: "这是第三方带的测试字段",
          //    messageAction: "<action>dotalist</action>",
          //    media: "YOUR_MEDIA_OBJECT_HERE"
          //  },
          //  scene: Wechat.Scene.TIMELINE   // share to Timeline
          //}, function () {
          //  alert("Success");
          //}, function (reason) {
          //  alert("Failed: " + reason);
          //});
          break;
        case 'student':
          $scope.stuObjClick = document.getElementById(index + 'stu');
          $scope.stuObjClick.style.display = "none";


          var studentDynamic = searchIndex($scope['studentDynamics'],Id) ;

          isInstalleagdWeChat();
          Wechat.share({
            text:  studentDynamic['Content'],
            scene: Wechat.Scene.TIMELINE // share to Timeline
          }, function () {
            $ionicPopup.alert({
              title:'提示' ,
              template:'成功'
            });
          }, function (reason) {
            $ionicPopup.alert({
              title:'Failed:' ,
              template:reason
            });
          });
          break;
        case 'teacher':
          $scope.terObjClick = document.getElementById(index + 'teacher');
          $scope.terObjClick.style.display = "none";
          var teacherDynamic = searchIndex($scope['teacherDynamics'],Id) ;


          isInstalleagdWeChat();
          Wechat.share({
            text: teacherDynamic['Content'],
            scene:  Wechat.Scene.TIMELINE  // share to Timeline
          }, function () {
            $ionicPopup.alert({
              title:'提示' ,
              template:'成功'
            });
          }, function (reason) {
            $ionicPopup.alert({
              title:'Failed:' ,
              template:reason
            });
          });
          break;
        default :
          break;

      }
    }
  });
