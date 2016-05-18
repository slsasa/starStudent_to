/**
 * Created by sls on 16/5/3.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('personal-style',{
        url:'/teacher-mine/personal-style',
        templateUrl:'templates/teacherstyle/personal-style.html',
        controller:'personalCtrl'

      });
  })
  .controller('personalCtrl',function($scope, $stateParams, $state, $http, userInfo,$ionicLoading){

    userInfo['teacherInfo']['StyleItem'].forEach(function (item) {
      var ls = [];
      item['PicListRef'].forEach(function (item) {
        ls.push(rootPicUrl + item['Url'])
      });
      item['PicListRef'] = ls;
    });


    $scope['Style'] = userInfo['teacherInfo']['StyleItem'][0];

    $scope.teacher = userInfo.teacherInfo;

    //userInfo.teacherInfo = '';

    var getHonorInfo = function(){
      var url = rootUrl + "/honor/get_self_list";
      $http.get(url,{params: {UserId:$scope.teacher['_id'], HonorType: 'teacher'}})
        .success(function(result){
          var data = result.data;
          $scope.teacher.honor = data;
        })
        .error(function(err){

        })
    };

    $scope.$on('$ionicView.beforeEnter',function(){
     // getSelfInfo();
      getHonorInfo();
    });

      //点赞
    $scope.like = 0;
    $scope.clickLike = function(){
        $scope.like += parseInt($scope.teacher['LikeCount']);
    };

    $scope.goImgs = function(){
      userInfo.teacherInfo = $scope.teacher;
      $state.go('style-img');
    };

   $scope.showImgLen = 0;


     $scope.goPaper = function(){
       userInfo.teacherInfo = $scope.teacher;
       $state.go('works-centre')
   }
  });
