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
    $scope.imgs =[
      'img/course/wd.png',
      'img/course/sh.png',
      'img/course/gq.png',
      'img/course/by.png',
      'img/course/yy.png'
    ];

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
              item.PicRef.Url = rootPicUrl + item.PicRef.Url;
            })
            item.PicRef.Url = rootPicUrl + item.PicRef.Url;
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

    $scope.goCourse = function(detail){
      userInfo.courseDetail = detail;
      $state.go('course-detail');
    }

  })
