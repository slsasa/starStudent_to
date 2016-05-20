/**
 * Created by apple-ty on 16-4-28.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.home',{
        url:'/school-index',
        views:{'tabs-home':{
          templateUrl:'templates/school/school-index.html',
          controller:'homeCtrl'
        }}
      });
  })
  .controller('homeCtrl',function($scope, $state, $http, userInfo, $ionicSlideBoxDelegate,$ionicLoading){

    var update = function(){

      $ionicLoading.show();
      var url = rootUrl + "/banner/get_list";

      $http.get(url)
        .success(function(result){

          var data = result.data.splice(0,5);
          data.forEach(function(item){
            item.bannerImg = rootPicUrl + item['Url'];
          });
          //console.log(data);
          $scope.banners = data;
          $ionicSlideBoxDelegate.update();
          $ionicSlideBoxDelegate.loop(true);

          $ionicLoading.hide();
        })
        .error(function(err){
          $ionicLoading.hide();
          //console.log(err);
        })
    }

    $scope.$on('$ionicView.beforeEnter',function(){
      update();
    })


    //跳转到学校成果
    $scope.intoSchOutcome = function(){
      $state.go('school-outcome');
    }

    //跳转到课程介绍
    $scope.intoCourseIntr = function(){
      $state.go('school-course');
    }



    //进入校园动态
    $scope.intoSchoolDynamic = function(){
      $state.go('school-dynamic');
    }

    //跳转到师质力量
    $scope.intoTeacherApti = function(){
      $state.go('school-faculty');
    }

    //跳转到荣誉区
    $scope.goHonor = function(){

      $state.go('honor-area');
    }

    //跳转到教师风采
    $scope.goTeacherStyle = function(){
      $state.go('teacher-mine')
    }
    //关于学校简介　
    $scope.goIntro = function(){

      $state.go('school-intro');
    }

    //放大图片
    $scope.goMagnifyImg = function(banner){
      userInfo.banner = banner;
      console.log('->>>>>>>>>>>>banner',userInfo.banner);
      userInfo.img = userInfo.banner.bannerImg;
        $state.go('magnify-img');
    }

  })
