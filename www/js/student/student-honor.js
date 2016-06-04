/**
 * Created by sls on 16/5/17.
 */
angular.module('starter')
  .config(function($stateProvider){
    $stateProvider
      .state('student-honor',{
        url:'/student-honor',
        templateUrl:'templates/student/student-honor.html',
        controller:'stuHonorCtrl'
      })
  })
  .controller('stuHonorCtrl',function($scope,$http,$state,$ionicLoading,userInfo,$ionicPopup){

    var update = function()
    {
      var url = rootUrl +'/honor/get_self_list';
      var query = {
        HonorType:'student',
        UserId: userInfo._id
      };
      $ionicLoading.show();
      $http.get(url,{params:query})
        .success(function (result) {
          $scope.learns = result.data;
          $ionicLoading.hide();

          console.log('honor--------------',JSON.stringify(result));
        })
        .error(function (err) {
          $ionicPopup.alert({
            title:'err',
            template:JSON.stringify(err)
          })
          $ionicLoading.hide();
        });
    }
    $scope.$on('$ionicView.beforeEnter',function(){
      update();
    });

    $scope.goHonorDetail = function(leran){
      userInfo.learn = leran;
      $state.go('stuHonorDetail');

    }

  })
