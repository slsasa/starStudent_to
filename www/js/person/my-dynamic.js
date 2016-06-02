/**
 * Created by sls on 16/5/10.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('my-dynamic', {
        url: '/my-dynamic',
        cache:false,
        templateUrl: 'templates/person/my-dynamic.html',
        controller: 'myDynamicCtrl'

      });
  })
  .controller('myDynamicCtrl', function ($scope, $ionicPopup,$state, $http, userInfo, $ionicLoading) {

    $scope.rootPicUrl =  rootPicUrl;
    $scope.type = userInfo.personType;


    var update = function () {
      $ionicLoading.show();

      var url = rootUrl + '/dynamic/get_self_list';
      var query = {UserId: userInfo._id};


      $http.get(url, {params: query})
        .success(function (result) {
          $ionicLoading.hide();

          var data = result.data;

          //console.log('mydynamic data ',JSON.stringify(data));
          $scope.terDynamics = data;
        })
        .error(function (err) {
          $ionicLoading.hide();
          //alert(JSON.stringify(err));
          $ionicPopup.alert({
            title:'提醒',
            template:'数据获取失败'+err
          });

        })

    }

    $scope.$on('$ionicView.beforeEnter', function () {
      update();
    })

    $scope.showClickTeacher = function (teacherId) {
      var objClick = document.getElementById(teacherId + 'teacher');
      if (objClick.style.display == "none") {
        objClick.style.display = "";
      } else {
        objClick.style.display = "none";
      }
    }

    $scope.showContentTer = function (teacherId) {
      var objMoreContent = document.getElementById(teacherId + "moreContentTer");
      var objContentSchool = document.getElementById(teacherId + "contentTer");
      if (objMoreContent.style.display == "none") {
        objContentSchool.style.display = "none";
        objMoreContent.style.display = "";


      } else {
        objMoreContent.style.display = "none";
        objContentSchool.style.display = "";

      }
    }


    $scope.goIssue = function () {
      $state.go('issue')
    }

  })
