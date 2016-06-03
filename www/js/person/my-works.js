/**
 * Created by sls on 16/5/12.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('my-works', {
        url: '/works',
        templateUrl: 'templates/person/my-works.html',
        controller: 'myWorksCtrl'

      });
  })
  .controller('myWorksCtrl', function ($scope, $state, $ionicModal, $cordovaImagePicker, $cordovaFileTransfer, $ionicLoading, $http, $filter, $ionicPopup, userInfo) {


    var getLogInfo = function () {
      $ionicLoading.show();
      var url = rootUrl + "/teacher_article/get_self_list";

      $http.get(url, {params: {TeacherId: userInfo._id, ArticleType: 'log'}})
        .success(function (result) {
          var data = result.data;
          $scope.logs = data;
          $ionicLoading.hide();
        })
        .error(function (err) {
          $ionicLoading.hide();
          $ionicPopup.alert({
            title:'err',
            template:err
          });
        });
    };

    $scope.$on('$ionicView.beforeEnter',function(){
      getLogInfo();
    });
    //论文
    //var getPaperInfo = function () {
    //  $scope.teacher = userInfo.teacherInfo;
    //  var url = rootUrl + "/teacher_article/get_self_list";
    //  $http.get(url, {params: {TeacherId: userInfo._id, ArticleType: 'paper'}})
    //    .success(function (result) {
    //      var data = result.data;
    //      $scope.papers = data;
    //    })
    //    .error(function (err) {
    //      console.log("获取作品失败");
    //    })
    //};

    $scope.goLogsDetail = function (log) {
      userInfo.mgLog = log;
      $state.go('myLogs-detail');
    };

    //$scope.goPaperDetail = function (paper) {
    //  userInfo.myPaper = paper;
    //  $state.go('myPapers-detail');
    //};

    //提交文章选择器
    $ionicModal.fromTemplateUrl('templates/person/submit-log.html',
      function (modal) {
        $scope.editmodal_star = modal;
      }, {
        scope: $scope,
        animation: 'slide-in-up'
      }
    );

    //打开选择器
    $scope.openModel_start = function () {
      $scope.editmodal_star.show();
    };

    $scope.close = function () {
      $scope.editmodal_star.hide();
    };

    $scope.articleType = '教学日志';

    ////按钮状态
    //var changeClickLogBgColor = function (log, paper) {
    //  $scope.objLogClick.style.backgroundColor = log;
    //  $scope.objPaperClick.style.backgroundColor = paper;
    //};
    //
    //var changeClickFontColor = function (log, paper) {
    //  $scope.objLogClick.style.color = log;
    //  $scope.objPaperClick.style.color = paper;
    //};

    //$scope.objLog = document.getElementById('log');
    //$scope.objPaper = document.getElementById('paper');
    //$scope.objLogClick = document.getElementById('logClick');
    //$scope.objPaperClick = document.getElementById('paperClick');
    //
    //$scope.objLogClick.style.backgroundColor = "#f96a9f";
    //$scope.objLogClick.style.color = '#fff';
    //$scope.showLog = function () {
    //  $scope.objPaper.style.display = "none";
    //  $scope.objLog.style.display = "";

    //  if ($scope.objLog.style.display == "") {
    //    changeClickLogBgColor("#f96a9f", "");
    //    changeClickFontColor("#fff", "black");
    //  }
    //};

    //$scope.showPaper = function () {
    //  $scope.objLog.style.display = "none";
    //  $scope.objPaper.style.display = "";
    //  getPaperInfo();
    //  if ($scope.objPaper.style.display == "") {
    //    changeClickLogBgColor("", "#f96a9f");
    //    changeClickFontColor("black", "#fff");
    //  }
    //};

    //$scope.showLog();

    $scope.photos = [];
    $scope['articleContent'] = '';
    $scope['articleType'] ='教学日志';
    $scope['articleTitle'] = '';

    $scope.onSubmitWorks = function (articleType,articleTitle,articleContent) {
      $ionicLoading.show();
      if(articleType =='教学日志'){
        articleType = 'log';
      }else{
        articleType = 'paper';
      }

      if($scope.photos.length!=0 ||  $scope['articleContent'] ||  $scope['articleTitle'] != '标题') {
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
                //alert(JSON.stringify(result));
                //result = JSON.parse(result);
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

          var url = rootUrl + '/teacher_article/add';
          var data = {
            Content: articleContent,
            Title: articleTitle,
            TeacherId: userInfo._id,
            ArticleType: articleType,
            PicListRef: id_list
          }

          $http.post(url, data)
            .success(function (result) {
              $ionicLoading.hide();
              $scope.photos = [];
              $scope['articleContent'] = '';
              $scope['articleTitle'] = '';
              $ionicPopup.alert({
                title: '成功',
                template: '上传成功'
              });

            })
            .error(function (err) {
              $ionicLoading.hide();
              $ionicPopup.alert({
                title: '失败',
                template: '上传失败' + err
              })
            })
        });
      } else{
        $ionicLoading.hide();
        $ionicPopup.alert({
          title:'提醒',
          template:'无内容可发送'
        })
      }
    };


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
    }

  });
