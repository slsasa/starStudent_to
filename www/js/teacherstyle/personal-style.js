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
    $scope.like = 0;

    $scope.teacher = userInfo.teacherInfo;
    userInfo.teacherInfo = '';
    console.log($scope.teacher);

    $ionicLoading.show();
    var getSelfInfo = function(){
      var url = rootUrl + "/teacher_style/get_style_item?style_item_id=" + $scope.teacher.style_item[0];
      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;
          var pic_arr = [];
          data.pic_url_list.forEach(function(item){
            pic_arr.push(rootPicUrl + item);
          });
          data.pic_url_list = pic_arr;
          $scope.teacher.info = data;
          $ionicLoading.hide();
        })
        .error(function(err){
          $ionicLoading.hide();
          $ionicPopup.alert({
            title:'err',
            template:'获取数据失败'
          })
          console.log(JSON.stringify(err));
        })
    }

    var getHonorInfo = function(){
      var url = rootUrl + "/teacher_honor/get_self_list?teacher_id=" +  $scope.teacher._id;
      $http.get(url)
        .success(function(result){
          console.log(JSON.stringify(result));
          var data = result.data;
          $scope.teacher.honor = data;
        })
        .error(function(err){
          console.log("获取教师数据失败");
        })
    }

    $scope.$on('$ionicView.beforeEnter',function(){
      getSelfInfo();
      getHonorInfo();
    })

      //点赞
    $scope.clickLike = function(){
        $scope.like += 1;
    }

    $scope.goImgs = function(){
      userInfo.teacherInfo = $scope.teacher;
      $state.go('style-img');
    }

   $scope.showImgLen = 0;

    $scope.indexR = 1;
     $scope.goPaper = function(){
     $state.go('works-centre',{index:$scope.indexR})
   }



  })
