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

  .controller('issueCtrl',function($scope, userInfo, $http, $ionicHistory, $ionicPopup,$cordovaImagePicker,$cordovaFileTransfer,$ionicLoading){

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
              if($scope.photos.length < 9) {
                $scope.photos.push(item);
              }
            });
          }, function (error) {

          });
    }

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
    }

    $scope.msg = {
      content: '',
      img: []
    }

    $scope.onSubmit = function(){
      $ionicLoading.show();

    //post图片
      var async_map = function(photo_list,callback){
        var photo_id_list = [];
        var async_count = 0;
        photo_list.forEach(function(item){
          var fileName = item.split('/').pop();
          var options = {
            fileKey: "image",
            fileName: fileName,
            mimeType: "image/jpeg"
          };

          $cordovaFileTransfer.upload(encodeURI(rootUrl+'/upload'), item, options)
            .then(function (result) {

              result.response = JSON.parse(result.response);
              var id = result['response']['data']['_id'];
              async_count++;
              photo_id_list.push(id);
              if(async_count == photo_list.length){
                callback(photo_id_list)
              }
            });
        })
      };
      async_map($scope.photos, function (id_list) {
        var url = rootUrl + "/dynamic/add";
        var data = {
          IssuerId: userInfo._id,
          Content: $scope.msg.content,
          PicListRef:id_list
        }

        $http.post(url, data)
          .success(function(result){

            $ionicLoading.hide();
              console.log(JSON.stringify(result));
              $ionicPopup.alert({
                title: '提醒',
                template: '发布成功'
              })
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

      });
    }

  })
