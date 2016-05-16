/**
 * Created by sls on 16/5/6.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('course-detail',{
        url:'/course-detail',
          templateUrl: 'templates/school/course-detail.html',
          controller:'courseDetailCtrl'
      });
  })
  .controller('courseDetailCtrl',function($rootScope,$scope){

    $scope.course = $rootScope.courseDetail;




  })
