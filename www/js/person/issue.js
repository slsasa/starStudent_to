/**
 * Created by sls on 16/5/12.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('issue',{
        url:'/issue',
        templateUrl:'templates/person/issue.html',
        controller:'issueCtrl'
      });
  })
//<<<<<<< HEAD
//  .controller('issueCtrl',function($scope,$cordovaImagePicker,$cordovaFileTransfer){
//    $scope.contents;
//
//    $scope.photos = ['img/img2.png'];
//    $scope.img_id = [];
//    $scope.clickPhoto = function (index) {
//
//      var item = $scope.photos[index];
//      if (item != 'img/img2.png') {
//        $ionicLoading.show();
//
//
//      } else {
//        //
//        var options = {
//          maximumImagesCount: 9,
//          width: 500,
//          height: 500,
//          quality: 80
//        };
//
//        $cordovaImagePicker.getPictures(options)
//          //以下为选好图片后的方法
//          // @type: results [1, 2, 3]
//          .then(function (results) {
//
//
//            results.forEach(function (item) {
//              if (item != undefined) {
//                //$scope.imgSrc_after = item;
//                $scope.photos.push(item);
//                var fileName = item.split('/').pop();
//                var fileURL = item;
//
//                var options = {
//                  fileKey: "image",
//                  fileName: fileName,
//                  mimeType: "image/jpeg"
//                };
//
//                $cordovaFileTransfer.upload(encodeURI('http://115.159.115.145:3000/upload/'), fileURL, options)
//                  .then(function (result) {
//                    //
//                    alert(JSON.stringify(result));
//                    console.log(result);
//                    $ionicLoading.hide();
//                    $scope.img_id = result._id
//                  });
//              }
//            });
//
//          }, function (error) {
//          })
//      }
//=======
  .controller('issueCtrl',function($scope, userInfo, $http, $ionicHistory, $ionicPopup,$cordovaImagePicker,$cordovaFileTransfer,$ionicLoading){

    $scope.photos =['img/personal/FB.png']
    $scope.clickPhoto = function (index) {

      var item = $scope.photos[index];
      if (item != 'img/personal/FB.png') {
        $ionicLoading.show();
        //$http.post('http://115.159.115.145:3000/upload/', {file: item}).success(function () {
        //  $ionicLoading.hide();
        //  $scope.photos.splice(index, 1);
        //});

      } else {
        //
        var options = {
          maximumImagesCount: 9,
          width: 500,
          height: 500,
          quality: 80
        };

        $cordovaImagePicker.getPictures(options)
          //以下为选好图片后的方法
          // @type: results [1, 2, 3]
          .then(function (results) {


            results.forEach(function (item) {
              if (item != undefined) {
                //$scope.imgSrc_after = item;
                $scope.photos.push(item);
                var fileName = item.split('/').pop();
                var fileURL = item;

                var options = {
                  fileKey: "image",
                  fileName: fileName,
                  mimeType: "image/jpeg"
                };

                $cordovaFileTransfer.upload(encodeURI('http://123.206.199.94:3000/upload/'), fileURL, options)
                  .then(function (result) {
                    //
                    alert(JSON.stringify(result));
                    console.log(result);
                    $ionicLoading.hide();
                    //$scope.img_id
                  });
              }
            });

          }, function (error) {
            alert('上传失败');
            $ionicLoading.hide();
          })
      }
    }

    $scope.msg = {
      content: '',
      img: []
    }

    $scope.onSubmit = function(){
      $ionicLoading.show();
      var data = {
        IssuerId: userInfo._id,
        Content: $scope.msg.content
      }
      console.log(data);

      var url = rootUrl + "/dynamic/add";

      //if(userInfo.personType == "_stu"){
      //
      //}else if(userInfo.personType == "_teacher"){
      //
      //}


      $http.post(url, data)
        .success(function(result){

          console.log(JSON.stringify(result));
          $ionicLoading.hide();
          if(result.ret_code == 0){
            console.log(JSON.stringify(result));
            $ionicPopup.alert({
              title: '提醒',
              template: '发布成功'
            })
            $ionicHistory.goBack(-1);
          }else{
            $ionicPopup.alert({
              title: '提醒',
              template: '发布内容有问题'
            })
          }
        })
        .error(function(err){
          $ionicLoading.hide();
          $ionicPopup.alert({
            title:'err',
            template:'发布失败'
          })
          console.log(JSON.stringify(err)
          );
        })


    }

  })
