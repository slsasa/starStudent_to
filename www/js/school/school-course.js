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
  .controller('introduceCtrl',function($rootScope,$scope,$state, $http){
    var update = function(){

      var url = rootUrl + "/school_professional/get_list";

      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;

          data.forEach(function (item) {
            var i = 0;
            item['course'].forEach(function(item){
              item['detail_id'] = i;
              i++;
            })
          })

          console.log(data);
          $scope.courses = data;
        })
        .error(function(err){
          console.log("获取数据失败");
        })
    }

    $scope.$on('$ionicView.beforeEnter',function(){
      update();
    })

    $scope.goCourse = function(course){
      //alert(JSON.stringify(course));
      $rootScope.courseDetail = course;
      $state.go('course-detail');
    }

  })
