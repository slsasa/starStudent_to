/**
 * Created by sls on 16/5/12.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('my-works',{
        url:'/works',
        templateUrl:'templates/person/my-works.html',
        controller:'worksCtrl'

      });
  })
  .controller('worksCtrl',function($scope,$state,$ionicModal,$cordovaImagePicker, $cordovaFileTransfer,$ionicLoading, $filter,$ionicPopup){
    $scope.teacher = {
      id: 0,
      name: '李老师',
      longevity: '大专学历,小学一级教师。1999年参加工作,爱岗敬业,有才艺,有理想,。',
      honor: [{
        time: 146131131331,
        reward: '广东省舞蹈比赛一等奖',
        rewardDetail: '在2016年的广东省教育局组织的拉丁舞比赛中荣获一等奖'
      }, {
        time: 146121131331,
        reward: '全国街舞比赛优秀奖',
        rewardDetail: '全部自由街舞竞技中国荣获优秀奖'
      }],
      Detail: '网络工程技术专业工学博士，计算机工程技术学院教授。软件技术与工程中心副主任。中国计算机学会高级会员，IEEE会员。广东省科技咨询专家库专家，广东省综合评标专家库专家，珠海市政府采购评审专家，广东企业科技特派员。',
      headImg: 'img/img1.png',
      imgs: [{
        time: 146131231331,
        img: 'img/img1.png'
      }, {
        time: 146131231331,
        img: 'img/img2.png'
      }],
      tearchingLog: [{
        title: '主型智能网络磁盘存储系统',
        content: '全自主型智能网络磁盘存储系统的存储管理方法研究，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
        type: '教学日志',
        time: 146131231331
      }, {
        title: '全自主型智能网络磁盘存储系统',
        content: '全自主型智能网络磁盘存储系统的存储管理方法研究，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
        type: '教学日志',
        time: 146775554442
      }],
      thesis: [{
        title: '这是个论文',
        content: '我们探讨理方法研究，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
        type: '学术论文',
        time: 146131231331
      }, {
        title: '还是论文',
        content: '探讨怎样不挂科盘存储系统的存储管理方法研究，主要研究方向为计算机系统结构、网络存储、移动计算与云计算等',
        type: '学术论文',
        time: 146775554442
      }],
      flower:10,
      praise:32,
      share:311
    }
    $scope.goLogsDetail = function(index){
      $state.go('myLogs-detail',{index:index});
    }



    //提交文章选择器
    $ionicModal.fromTemplateUrl('templates/person/submit-log.html',
      function(modal){
        $scope.editmodal_star = modal;
      },{
        scope:$scope,
        animation:'slide-in-up'
      }
    );

    //打开选择器
    $scope.openModel_start = function(){
      $scope.editmodal_star.show();
    }

    $scope.close = function(){
      $scope.editmodal_star.hide();
    }

    $scope.articleType = '教学日志';

    $scope.closeEditModal = function(article,articleContent){
      if(article){
        $scope.editmodal_star.hide();

        $scope.articleType = article;
        $scope.articleContent= articleContent;
        alert($scope.articleType+":"+$scope.articleContent);
      }
    }

    $scope.goPaperDetail = function(index){
      $state.go('myPapers-detail',{index:index})
    }

    $scope.showLog = function(){
      var objLog = document.getElementById('log');
      var objPaper = document.getElementById('paper');
      if(objLog.style.display == "none"){
        objPaper.style.display = "none";
        objLog.style.display = "";
      }
    }
    $scope.showPaper = function() {
      var objLog = document.getElementById('log');
      var objPaper = document.getElementById('paper');
      if (objPaper.style.display == "none") {
        objLog.style.display = "none";
        objPaper.style.display = "";
      }
    }

    $scope.photos =['img/img1.png'];
    $scope.clickPhoto = function (index) {
      //
      var item = $scope.photos[index];
      if (item != "img/img1.png") {
        $ionicLoading.show();
        $http.post(serverAddr + '/delete_message_file', {file: item}).success(function () {
          $ionicLoading.hide();
          $scope.photos.splice(index, 9);
        });
      } else {
        //
        var options = {
          maximumImagesCount: 9,
          width: 800,
          height: 800,
          quality: 80
        };
        $cordovaImagePicker.getPictures(options)
          //以下为选好图片后的方法
          .then(function (results) {
            if (results[0] !== undefined) {
              //message.photos.push({src:results[0]});
              // $scope.openModal(i = 2);
              $ionicLoading.show();


              $scope.imgSrc_after = results[0];
              var fileName = $scope.imgSrc_after.split('/').pop();
              var fileURL = $scope.imgSrc_after;
              var options = {
                fileKey: "file",
                fileName: fileName,
                mimeType: "image/jpeg"
              };
              $cordovaFileTransfer.upload(encodeURI(serverAddr + "/message_file"), fileURL, options)
                .then(function (data) {
                  //
                  $ionicLoading.hide();
                  $scope.photos.splice($scope.photos.length - 1, 0, fileName);
                  //
                });
            }
          }, function (error) {
          });
      }

    };

  })
