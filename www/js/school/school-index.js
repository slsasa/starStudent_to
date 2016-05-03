/**
 * Created by apple-ty on 16-4-28.
 */
angular.module('starter')
  .controller('ResumeCtrl', function($scope,$state,$ionicSlideBoxDelegate,resumeService) {
    $scope.resumess = resumeService.getR().Resume;

    $(document).ready(function () {
      $(".yd-slide").click(function () {
        $("#hid").slideToggle();
      });
    });

    $scope.schooloutcome = function () { //学校成果跳转
      $state.go('tab.school-outcome')
    };
    $scope.course = function () { //课程介绍
      $state.go('tab.school-course')
    };
    $scope.faculty = function () { //课程介绍
      $state.go('tab.school-faculty')
    };

    $scope.teachermien = function () { //课程介绍
      $state.go('tab.school-teachermien')
    };


    $scope.resumeMome = function () {
      $state.go('tab.resume-mone')
    };



    $scope.model = {
      activeIndex:0
    };

//此事件对应的是pager-click属性，当显示图片是有对应数量的小圆点，这是小圆点的点击事件
    $scope.pageClick = function(index){
      //alert(index);

      $scope.model.activeIndex = 2;
    };

//当图片切换后，触发此事件，注意参数
    $scope.slideHasChanged = function($index){
      //alert($index);

    };
    //这是属性delegate-handle的验证使用的，其实没必要重定义，直接使用$ionicSlideBoxDelegate就可以
    $scope.delegateHandle = $ionicSlideBoxDelegate;

    var speed=20
    gpic2.innerHTML=gpic1.innerHTML
    function Marquee(){
      if(gpic2.offsetWidth-gpic.scrollLeft<=0)
        gpic.scrollLeft-=gpic1.offsetWidth
      else{
        gpic.scrollLeft++
      }
    }
    var MyMar=setInterval(Marquee,speed)
    gpic.onmouseover=function() {clearInterval(MyMar)}
    gpic.onmouseout=function() {MyMar=setInterval(Marquee,speed)}
  })
