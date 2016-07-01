/**
 * Created by sls on 16/5/10.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('my-style', {
        url: '/teacher-teacher/my-style',
        templateUrl: 'templates/teacher/my-style.html',
        cache: true,
        controller: 'myStyleCtrl'

      });
  })
  .controller('myStyleCtrl', function ($scope, $state,userInfo,$ionicPopup,$ionicModal, $http) {

    $scope.rootPicUrl = rootPicUrl;

    $scope.goAddImg = function(){
      $state.go('add-img')
    };

    var url = rootUrl + '/teacher_style/get_self_style';
    var query = {
      TeacherId: userInfo['_id']
    };

    var update = function () {
      $http.get(url, {params: query})
        .success(function (result) {
          var data = result['data'];
          $scope.styleList = data['StyleItem'];

        })
        .error(function (err) {
          console.log(err)
        });
    };

    $scope.$on('$ionicView.beforeEnter', function () {
      update();
    });

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
    };

  });
