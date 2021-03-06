/**
 * Created by apple-ty on 16-4-28.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('school-course',{
        url:'/school-course',
          templateUrl: 'templates/school/school-course.html',
          controller:'introduceCtrl'
      });
  })
  .controller('introduceCtrl',function($scope,$state, $http, $ionicLoading,userInfo){

    $scope.rootPicUrl = rootPicUrl;

    $ionicLoading.show();

    var update = function(){

      var url = rootUrl + "/school_professional/get_list";


      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;

          data.forEach(function (item) {
            var i = 0;
            item['Course'].forEach(function(item){
              item['_id'] = i;
              i++;
            });

          })
          $scope.courses = data;
          $ionicLoading.hide();
        })
        .error(function(err){
          $ionicLoading.hide();
          console.log(JSON.stringify(err));
        })
    }

    $scope.$on('$ionicView.beforeEnter',function(){
      update();
    })

    $scope.goCourse = function(course,detail){

      userInfo.course = course;
      userInfo.courseDetail = detail;
      $state.go('course-detail');
    }

  })
