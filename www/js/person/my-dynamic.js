/**
 * Created by sls on 16/5/10.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('my-dynamic', {
        url: '/my-dynamic_:type',
        templateUrl: 'templates/person/my-dynamic.html',
        controller: 'myDynamicCtrl'

      });
  })
  .controller('myDynamicCtrl', function ($scope, $stateParams, $state, $http, userInfo, $ionicLoading) {

    var update = function () {
      $ionicLoading.show();

      var url = rootUrl + '/dynamic/get_self_list';
      var query = {UserId: userInfo._id};

      $http.get(url, {params: query})
        .success(function (result) {
          $ionicLoading.hide();
          console.log('dynamic >>>>', JSON.stringify(result));
          var data = result.data;
          data.forEach(function (item) {

            var data2 = [];
            item['PicListRef'].forEach(function (img) {
              data2.push(rootPicUrl + img)
            });

            item['PicListRef'] = data2;
            console.log('PicListRef >>>', item['PicListRef'])

          });

          $scope.terDynamics = data;
        })
        .error(function (err) {
          $ionicLoading.hide();
          alert(JSON.stringify(err));
          console.log("获取数据错误")
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

    $scope.type = $stateParams.type;

    $scope.goIssue = function () {
      $state.go('issue')
    }

  })
