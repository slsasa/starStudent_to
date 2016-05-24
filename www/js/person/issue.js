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
            $scope.photos.push(item);
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
      var data = {
        IssuerId: userInfo._id,
        Content: $scope.msg.content
      }
      //console.log(data);

      var url = rootUrl + "/dynamic/add";


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

          $cordovaFileTransfer.upload(encodeURI('http://123.206.199.94:3000/upload'), item, options)
            .then(function (result) {
              var id = result['response']['data']['_id'];
              async_count++;
              photo_id_list.push(id);
              if(async_count == photo_id_list.length){
                callback(photo_id_list)
              }
            });
        })
      };
      async_map($scope.photos, function (id_list) {
        alert('Id List >>> ' + JSON.stringify(id_list))
      });
    }

  })
