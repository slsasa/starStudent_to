/**
 * Created by apple-ty on 16-5-4.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('applySubmit',{
        url:'/applyDetail:applyId/submit',
          templateUrl: 'templates/apply/submit-apply.html',
          controller: 'applySubmitCtrl'
      });
  })
  .controller('applySubmitCtrl',function($scope,$stateParams, userInfo, $http, $ionicPopup, $ionicHistory){
    $scope.apply = userInfo.apply;

    $scope.user = {
      apply_id: $scope.apply._id,
      user_id: userInfo._id,
      name: '',
      tel: ''
    }

    $scope.onSubmit = function(){
      var data = {
        student_id: $scope.user.user_id,
        sign_project_id: $scope.user.apply_id,
        name: $scope.user.name,
        tel: $scope.user.tel
      }
      console.log(data)

      var url = rootUrl + "/student_sign_up/add";


      $http.post(url, data)
        .success(function(result){
          console.log(JSON.stringify(result));
          if(result.ret_code == 0){
            $ionicPopup.alert({
              title: '消息',
              template: '报名成功'
            })
            $ionicHistory.goBack(-1);
          }else{
            $ionicPopup.alert({
              title: '提醒',
              template: '提交表单失败'
            })
          }
        })
        .error(function(err){

        })

    }

  })
