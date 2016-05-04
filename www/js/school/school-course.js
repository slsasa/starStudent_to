/**
 * Created by apple-ty on 16-4-28.
 */
angular.module('starter')
  .controller('CourseCtrl',function($scope,$state,Base){
    $scope.courses = Base.allCourses();
  });
