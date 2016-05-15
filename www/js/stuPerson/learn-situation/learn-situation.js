/**
 * Created by apple-ty on 16-5-6.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('learn-situation',{
        url:'/learn-situation',
          templateUrl: 'templates/stuPerson/learn-situation/learn-situation.html',
          controller:'LearnSitCtrl'
      });
  })
  .controller('LearnSitCtrl',function($scope, $state, $http, userInfo){
    var update = function(){
      var url = rootUrl + "/student_situation/get_self_list?student_id=" + userInfo._id;

      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;
          $scope.learns = data;
        })
        .error(function(err){
          console.log("获取学习情况数据失败");
        })
    }

    $scope.$on('$ionicView.beforeEnter',function(){
      update();
    })

    $scope.goCheckDeatil = function(learn){
      userInfo.learnInfo = learn;
      $state.go('checkDetails');
  }


    //$scope.learns = [
    //  {
    //    id:0,
    //    subjectsname:'街舞',
    //    assessmentName:'李老师',
    //    score:'优秀',
    //    asTime:1462765734379
    //  },
    //  {
    //    id:1,
    //    subjectsname:'街舞',
    //    assessmentName:'李老师',
    //    score:'优秀',
    //    asTime:1462765734379
    //  },
    //  {
    //    id:2,
    //    subjectsname:'街舞',
    //    assessmentName:'李老师',
    //    score:'优秀',
    //    asTime:1462765734379
    //  }];
    //$scope.goCheckDeatil = function(checkId){
    //  $state.go('checkDetails',{checkId:checkId});
    //}
  })
