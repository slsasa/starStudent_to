/**
 * Created by sls on 16/5/9.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('style-img',{
        url:'/personal-style:teacherId/style-img',
        templateUrl:'templates/teacherstyle/style-img.html',
        controller:'styleImgCtrl'
      });
  })

  .controller('styleImgCtrl',function($scope, $stateParams, userInfo, $http){

    $scope.teacher = userInfo.teacherInfo;
    userInfo.teacherInfo = '';


    var getSelfInfo = function(){
      var data_arr = [];

      $scope.teacher.style_item.forEach(function(item){
        var url = rootUrl + "/teacher_style/get_style_item?style_item_id=" + item;
        $http.get(url)
          .success(function(result){
            var data = result.data;
            var pic_arr = [];
            data.pic_url_list.forEach(function(item){
              pic_arr.push(rootPicUrl + item);
            })
            data.pic_url_list = pic_arr;
            data_arr.push(data);
          })
          .error(function(err){
            console.log("获取照片数据失败");
          })
      })

      $scope.Imgs = data_arr;
      console.log($scope.Imgs);

    }

    $scope.$on('$ionicView.beforeEnter',function(){
      getSelfInfo();
    })






  })
