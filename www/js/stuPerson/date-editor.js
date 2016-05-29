/**
 * Created by apple-ty on 16-5-8.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('date-editor',{
        url:'/date-editor',
          templateUrl: 'templates/stuPerson/date-editor.html',
          controller: 'dateEditorCtrl'
      });
  })
  .controller('dateEditorCtrl',function($scope, $http, userInfo, $ionicLoading){

    //var update = function(){
    //  var url = rootUrl + "/student_info/get_info?student_id=" + userInfo._id;
    //
    //  $http.get(url)
    //    .success(function(result){
    //      var data = result;
    //      data.pic_entrance_id = rootPicUrl + data.pic_entrance_id;
    //
    //    })
    //    .error(function(err){
    //      console.log("获取信息失败");
    //    })
    //}


    var update = function(){
      var url = rootUrl + "/teacher_info/get_info?TeacherId=" + userInfo._id;

      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;
          $scope.teacherInfo = data;
        })
        .error(function(err){
          console.log("获取个人信息失败");
        })
    }

    $scope.$on('$ionicView.beforeEnter',function(){
      update();
    });

    var postData = function(){
      var data = {
        TeacherId: userInfo._id,
        Name: $scope.teacherInfo.Name,
        Gender: $scope.teacherInfo.Gender,
        National: $scope.teacherInfo.National,
        ProfessionName: $scope.teacherInfo.ProfessionName,
        InductionTime: $scope.teacherInfo.InductionTime,
        TeacherInfo: $scope.teacherInfo.EntranceDesc
      }

      var url = rootUrl + "/teacher_info/edit";

      $http.post(url, data)
        .success(function(result){
          console.log(JSON.stringify(result));
          console.log("修改信息成功");
          $ionicLoading.hide();
        })
        .error(function(err){
          console.log("提交数据失败");
        })
    }

    $scope.$on('$ionicView.beforeLeave',function(){
      $ionicLoading.show();
      postData();
    })
  })
