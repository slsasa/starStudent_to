/**
 * Created by apple-ty on 16-5-9.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('myApply',{
        url:'/myApply',
          templateUrl: 'templates/stuPerson/myApply/myApply.html',
          controller: 'myApplyCtrl'
      });
  })
  .controller('myApplyCtrl',function($scope, $state, userInfo, $http){

    $scope.rootPicUrl = rootPicUrl;

    var update = function(){
      var url = rootUrl + "/student_sign_up/get_list?StudentId=" + userInfo._id;
      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;
          $scope.applys = data;
        })
        .error(function(err){
          console.log("获取我已报名的数据");
        })

    }

    $scope.$on('$ionicView.beforeEnter',function(){
      update();
    })

    $scope.myApplyDeatil = function(apply){
      userInfo.apply = apply;
      $state.go('myApplydet');
    }
  })
