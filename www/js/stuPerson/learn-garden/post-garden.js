/**
 * Created by sls on 16/5/15.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('post-garden',{
        url:'/learn-garden/post-garden',
        templateUrl: 'templates/stuPerson/learn-garden/post-garden.html',
        controller:'postGardenCtrl'

      });
  })
  .controller('postGardenCtrl',function($scope, $cordovaImagePicker, $cordovaFileTransfer, $http,$ionicLoading, userInfo){

    $scope.post_info = {
      content: '',
      photos: '',
      link: ''
    }

    $scope.photos = [];
    $scope.clickPhoto = function () {
      var options = {
        maximumImagesCount: 9,
        width: 500,
        height: 500,
        quality: 80
      };
      $cordovaImagePicker.getPictures(options)
        .then(function (results) {
          results.forEach(function (item) {
            $scope.photos.push(item);
          });
        }, function (error) {

        });
    };


    $scope.replaceImage = function (index) {

      var options = {
        maximumImagesCount: 1,
        width: 500,
        height: 500,
        quality: 80
      };
      $cordovaImagePicker.getPictures(options)
        .then(function (results) {
          $scope.photos[index] = results[0];
        }, function (error) {
          $ionicPopup.alert({
            title: '提醒',
            template: '选择出错:' + error
          });

        });
    };

    //var postData = function(){
    //  $ionicLoading.show();
    //  var url = rootUrl + "/learn_garden/add";
    //
    //  var data = {
    //    IssuerId: userInfo._id,
    //    Content: $scope.post_info.content,
    //    LinkUrl: $scope.post_info.link
    //  }
    //
    //  $http.post(url, data)
    //    .success(function(result){
    //      $ionicLoading.hide();
    //      alert("提交成功");
    //      //console.log(JSON.stringify(result));
    //    })
    //    .error(function(err){
    //      $ionicLoading.hide();
    //      alert("提交失败");
    //    })
    //
    //}

    $scope.onSubmit = function(){
      //postData();
      var async_map = function (photo_list, callback) {
        var photo_id_list = [];
        var async_count = 0;
        photo_list.forEach(function (item) {
          var fileName = item.split('/').pop();
          var options = {
            fileKey: "image",
            fileName: fileName,
            mimeType: "image/jpeg"
          };

          $cordovaFileTransfer.upload(encodeURI(rootUrl + '/upload'), item, options)
            .then(function (result) {

              result.response = JSON.parse(result.response);
              var id = result['response']['data']['_id'];
              async_count++;
              photo_id_list.push(id);

              if (async_count == photo_list.length) {
                callback(photo_id_list)

              }

            });
        });
      };
      async_map($scope.photos, function (id_list) {

        var url = rootUrl + "/learn_garden/add";

        var data = {
          IssuerId: userInfo._id,
          Content: $scope.post_info.content,
          LinkUrl: $scope.post_info.link,
          PicListRef:id_list
        }

        $http.post(url,data)
          .success(function(result){
            $ionicLoading.hide();
            console.log('上传成功'+JSON.stringify(result));
          })
          .error(function(err){
            $ionicLoading.hide();
            alert('上传失败:'+err);
          })
      });
    }
  })
