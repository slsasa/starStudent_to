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

  .controller('dynCtrl', function ($scope, $ionicPopup, $http, $ionicLoading, $ionicModal,userInfo) {

    $scope.rootPicUrl = rootPicUrl;
    //判断是在校园动态，还是学员动态还是教师动态
    $scope.flag = "student";


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
    });



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
      } else {
        $scope.stuObjClick.style.display = "none"
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
          update('student');
          update('school');
          update('teacher');

        })
        .error(function(err){
          $ionicPopup.alert({
            title:'失败',
            template:'点赞失败'+err
          });
        });
    };

    //查找对象
    var searchIndex = function(arr,Id){
       for(var i = 0; i < arr.length;i++){
         if(arr[i]._id == Id){
           return arr[i];
         }
       }
    };

    //微信分享
    var wechatShare = function(content,image){

      if(content!= '  ' || image === undefined){
        Wechat.share({
          text: content,
          scene:  Wechat.Scene.TIMELINE  // share to Timeline
        }, function () {
          $ionicPopup.alert({
            title:'提示' ,
            template:'成功'
          });
        }, function (reason) {
          $ionicPopup.alert({
            title:'提示' ,
            template:'分享失败'+reason
          });
        });
      }else{

        var message = {
          title: "This is a Title",
          description: "Sending from test application",
          //text: "分享是什么鬼 ",
          //mediaTagName: "TEST-TAG-001",
          messageExt: "这是第三方带的测试字段",
          messageAction: "<action>dotalist</action>",
          media: {
            type: Wechat.Type.IMAGE,
            image:rootPicUrl+ image
          }
        };
        Wechat.share({
          message:message,
          scene: Wechat.Scene.TIMELINE   // share to Timeline
        }, function () {
          $ionicPopup.alert({
            title:'成功',
            template:'分享成功'
          });
        }, function (reason) {
          $ionicPopup.alert({
            title:'失败',
            template:'分享失败:'+reason
          });
        });
      }
    };

    $scope.shareWeChat = function(index,Id){

      switch ($scope.flag){
        case 'school':
          $scope.schObjClick = document.getElementById(index + 'school');
          $scope.schObjClick.style.display = "none";

          var schoolDynamic = searchIndex($scope['schoolDynamics'],Id) ;
          //console.log("dynamic -> "+ JSON.stringify(schoolDynamic['PicListRef']) === '' );

          //console.log($scope['schoolDynamics']);
          isInstalleagdWeChat();
          wechatShare(schoolDynamic['Content'], undefined);


          break;
        case 'student':
          $scope.stuObjClick = document.getElementById(index + 'stu');
          $scope.stuObjClick.style.display = "none";


          var studentDynamic = searchIndex($scope['studentDynamics'],Id) ;

          isInstalleagdWeChat();
          wechatShare(studentDynamic['Content'],studentDynamic['PicListRef'][0]['Url']);
          break;
        case 'teacher':
          $scope.terObjClick = document.getElementById(index + 'teacher');
          $scope.terObjClick.style.display = "none";
          var teacherDynamic = searchIndex($scope['teacherDynamics'],Id) ;

          isInstalleagdWeChat();
          wechatShare(teacherDynamic['Content'],teacherDynamic['PicListRef'][0]['Url']);
          break;
        default :
          break;

      }
    };

    //显示大图
    var showBigImage= function(imageUrl){
      $scope.imageUrl = imageUrl;
      $scope.bigImage = true;
    };
    $scope.bigImage = false;    //初始默认大图是隐藏的
    var hideBigImage = function () {
      $scope.bigImage = false;
    };

    //显示大图选择器
    $ionicModal.fromTemplateUrl('templates/teacher/showBigImage.html',
      function(modal){
        $scope.showBigImage_star = modal;
    },{
        scope:$scope,
        animation:'slide-in-up'
      }
    );

    //打开选择器
    $scope.openBigImage_star = function(modal){
      showBigImage(modal);
      $scope.showBigImage_star.show();
    };

    //关闭选择器
    $scope.closeBigImage_hide = function(){
      hideBigImage();
      $scope.showBigImage_star.hide();
    };
  });
