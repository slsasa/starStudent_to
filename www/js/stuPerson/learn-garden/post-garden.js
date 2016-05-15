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
  .controller('postGardenCtrl',function($scope,$cordovaImagePicker,$cordovaFileTransfer){

    $scope.photos = ['img/img2.png']
    $scope.clickImg = function (index) {

      var item = $scope.photos[index];
      if (item != 'img/img2.png') {
        $ionicLoading.show();


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

                $cordovaFileTransfer.upload(encodeURI('http://115.159.115.145:3000/upload/'), fileURL, options)
                  .then(function (result) {
                    //
                    alert(JSON.stringify(result));
                    console.log(result);
                    $ionicLoading.hide();
                    $scope.img_id = result._id
                  });
              }
            });

          }, function (error) {
          })
      }
    }
  })
