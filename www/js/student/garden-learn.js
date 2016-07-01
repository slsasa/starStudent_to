/**
 * Created by sls on 16/6/4.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('garden-learn', {
        url: '/garden-learn',
        cache:true,
        templateUrl: 'templates/student/garden-learn.html',
        controller: 'learnGardenCtrl'

      });
  })
  .controller('learnGardenCtrl',function($scope, $ionicPopup,$state, $http, userInfo, $ionicLoading,$ionicModal){

    $scope.rootPicUrl = rootPicUrl;

    var update = function(){
      var url = rootUrl +'/learn_garden/get_list';
      $ionicLoading.show();
      $http.get(url)
        .success(function(result){

           $scope.learns = result['data'];
          $ionicLoading.hide();
        })
        .error(function(err){
          $ionicLoading.hide();
          $ionicPopup.alert({
            title:'err',
            template:'获取数据出错:'+err
          });
        })
    };

    $scope.$on('$ionicView.beforeEnter',function(){
      update();
    });


    $scope.goAddGarden = function(){
      $state.go('post-garden');
    };

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


    $scope.showMoreContent = function(index){
      var objContent = document.getElementById(index+'contentLearn');
      var objMoreContent = document.getElementById(index+'moreContentLearn');
      var objContentState = document.getElementById(index+'state');
      if(objContent.style.display == "none"){
        objMoreContent.style.display = "none";
        objContent.style.display = "";
        objContentState.innerHTML = '全文';
      }else{
        objContent.style.display = "none";
        objMoreContent.style.display = "";
        objContentState.innerHTML = '收起'
      }

    };
  })
