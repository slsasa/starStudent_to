/**
 * Created by apple-ty on 16-4-28.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.home',{
        url:'/school-index',
        views:{'tabs-home':{
          cache:false,
          templateUrl:'templates/school/school-index.html',
          controller:'homeCtrl'
        }}
      });
  })
  .controller('homeCtrl',function($rootScope,$scope, $state, $http,$ionicPopup, $ionicSlideBoxDelegate,$ionicLoading ,userInfo){

    $scope.rootPicUrl = rootPicUrl;


    //学校动态
    var update = function(){
      var urlSchool = rootUrl + "/dynamic/get_all_list?DyType=school";
      var url = rootUrl + "/banner/get_list";
      var urlApply = rootUrl + "/sign_up_intro/get_list";
      $ionicLoading.show();
      //获取校园动态数据
      $http.get(urlSchool)
        .success(function(result){
          var banner_list = [];
          var data = result.data;

          data[0]['PicListRef'].forEach(function (item) {
            banner_list.push(rootPicUrl + item['Url'])
          });

          $scope.dynamics = data;
          userInfo.schoolDynamics = data;
          userInfo.banner_list = banner_list;

          $ionicSlideBoxDelegate.update();
          $ionicSlideBoxDelegate.loop(true);


        })
        .error(function(err){
          $ionicPopup.alert({
            title:'提醒',
            template:'获取数据出错:'+err
          });
        });


      //获取banner
      $http.get(url)
        .success(function(result){

          if(result.data.length > 4) {
            $scope.banners = result.data.splice(0,4);
          }else{
            $scope.banners = result.data;
          }
          $ionicSlideBoxDelegate.update();
          $ionicSlideBoxDelegate.loop(true);

          $ionicLoading.hide();
        })
        .error(function(err){
          $ionicPopup.alert({
            title:'err',
            template:'数据获取失败'+err
          });
          $ionicLoading.hide();

        });

      //只获取并截取报名信息前六个
      $ionicLoading.show();
      $http.get(urlApply)
        .success(function(result){
          var data = result.data;
          if(data.length >6){
           $scope.applys = data.slice(0,6);
          }else{
            $scope.applys = data;
          }
          $ionicSlideBoxDelegate.update();
          $ionicSlideBoxDelegate.loop(true);
          $ionicLoading.hide();
        })
        .error(function(err){
          $ionicPopup.alert({
            title:'err',
            template:'报名数据获取失败:' + err
          });
          $ionicLoading.hide();
        });
    };

    $scope.$on('$ionicView.beforeEnter',function(){
      update();
    });


    //跳转到学校成果
    $scope.intoSchOutcome = function(){
      $state.go('school-outcome');
    };

    //跳转到课程介绍
    $scope.intoCourseIntr = function(){
      $state.go('school-course');
    };

    //进入校园动态
    $scope.intoSchoolDynamic = function(){
      $state.go('school-dynamic');
    };

    //跳转到师质力量
    $scope.intoTeacherApti = function(){
      $state.go('school-faculty');
    };

    //跳转到荣誉区
    $scope.goHonor = function(){
      $state.go('honor-area');
    };

    //跳转到教师风采
    $scope.goTeacherStyle = function(){
      $state.go('teacher-mine');
    };
    //关于学校简介　
    $scope.goIntro = function(){
      $state.go('school-intro');
    };

    //放大图片
    $scope.goMagnifyImg = function(banner){
      userInfo.banner = banner;
        $state.go('magnify-img');
    };


    function scroll(){
      $(".content ul").animate({"margin-left":"-110px"},function(){
        $(".content ul li:eq(0)").appendTo($(".content ul"))
        $(".content ul").css({"margin-left":0})
      })
    }
    setInterval(scroll,10000);



  })
