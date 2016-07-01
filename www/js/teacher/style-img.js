/**
 * Created by sls on 16/5/9.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('style-img',{
        url:'/style-img',
        cache: true,
        templateUrl:'templates/teacher/style-img.html',
        controller:'styleImgCtrl',
      });
  })

  .controller('styleImgCtrl',function($scope, $ionicModal,userInfo){

    $scope.teacher = userInfo.teacherInfo;
    $scope.rootPicUrl = rootPicUrl;

    //显示大图
    var showBigImage= function(imageUrl){
      $scope.imageUrl = imageUrl;
      $scope.bigImage = true;
    };
    $scope.bigImage = false;    //初始默认大图是隐藏的
    var hideBigImage = function () {
      $scope.bigImage = false;
    };

    //显示大图选择器
    $ionicModal.fromTemplateUrl('templates/teacher/showBigImage.html',
      function(modal){
        $scope.showBigImage_star = modal;
      },{
        scope:$scope,
        animation:'slide-in-up'
      }
    );

    //打开选择器
    $scope.openBigImage_star = function(modal){
      showBigImage(modal);
      $scope.showBigImage_star.show();
    };

    //关闭选择器
    $scope.closeBigImage_hide = function(){
      hideBigImage();
      $scope.showBigImage_star.hide();
    }


  })
