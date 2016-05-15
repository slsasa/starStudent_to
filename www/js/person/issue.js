/**
 * Created by sls on 16/5/12.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('issue',{
        url:'/issue',
        templateUrl:'templates/person/issue.html',
        controller:'issueCtrl'
      });
  })
  .controller('issueCtrl',function($scope, userInfo, $http, $ionicHistory, $ionicPopup){
    $scope.msg = {
      content: '',
      img: []
    }

    $scope.onSubmit = function(){

      var data = {
        issuer_id: userInfo._id,
        content: $scope.msg.content
      }
      console.log(data);

      if(userInfo.personType == "_stu"){
        var url = rootUrl + "/student_dynamic/add";
      }else if(userInfo.personType == "_teacher"){
        var url = rootUrl + "/teacher_dynamic/add";
      }

      $http.post(url, data)
        .success(function(result){
          console.log(JSON.stringify(result));

          if(result.ret_code == 0){
            console.log(JSON.stringify(result));
            $ionicPopup.alert({
              title: '提醒',
              template: '发布成功'
            })
            $ionicHistory.goBack(-1);
          }
        })
        .error(function(err){
          console.log("提交表单错误");
        })

    }
  })
