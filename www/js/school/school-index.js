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
  .controller('homeCtrl',function($rootScope,$scope, $state, $http,$ionicPopup, $ionicSlideBoxDelegate,$ionicLoading ,userInfo){

    //学校动态
    var schoolUpdate = function(){
      var url = rootUrl + "/dynamic/get_all_list?DyType=school";

      $http.get(url)
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
        })

    }

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

        })
    }

    $scope.$on('$ionicView.beforeEnter',function(){
      update();
      schoolUpdate();
    });


    ////无缝滚动条
    //$(document).ready(function(){
    //  huandeng()
    //})
    //
    //function huandeng(){
    //
    //  var speed=20; //数字越大速度越慢
    //  var tab=document.getElementById("demo");
    //  var tab1=document.getElementById("demo1");
    //  var tab2=document.getElementById("demo2");
    //  tab2.innerHTML=tab1.innerHTML;
    //  function Marquee(){
    //    if(tab2.offsetWidth-tab.scrollLeft<=0)
    //      tab.scrollLeft-=tab1.offsetWidth
    //    else{
    //      tab.scrollLeft++;
    //    }
    //  }
    //  var MyMar=setInterval(Marquee,speed);
    //  tab.onmouseover=function() {clearInterval(MyMar)};
    //  tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};
    //}





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

      userInfo.img = userInfo.banner.bannerImg;
        $state.go('magnify-img');
    };

    //滚动图片
    //var speed=20;
    //var demo = $("#demo");
    //var demo1 = $("#demo1");
    //var demo2 = $("#demo2");
    //demo2.html(demo1.html());   //把demo1的内容插入demo2
    //function Marquee(){
    //  if( //如果demo1的宽度[demo1.width()]小于滚动条到外部框左侧的距离[demo.scrollLeft()]，重置demo的位置实现显示效果的循环
    //    demo.scrollLeft()>=demo1.width())
    //    demo.scrollLeft(0);
    //  else{  //如果demo1的宽度大于外部边框宽度，则进行滚动
    //    demo.scrollLeft(demo.scrollLeft()+1);
    //  }
    //}
    //var MyMar=setInterval(Marquee,speed)
    //demo.mouseover(function() {
    //  clearInterval(MyMar);
    //} )
    //demo.mouseout(function() {
    //  MyMar=setInterval(Marquee,speed);
    //} )

    function scroll(){
      $(".content ul").animate({"margin-left":"-110px"},function(){
        $(".content ul li:eq(0)").appendTo($(".content ul"))
        $(".content ul").css({"margin-left":0})
      })
    }
    setInterval(scroll,2000)

  })
