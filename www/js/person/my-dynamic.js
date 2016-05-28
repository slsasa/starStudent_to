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

    $scope.rootPicUrl =  rootPicUrl;

    var calcTime = function(timeString){
      var tmp = new Date().getTime() - new Date(timeString).getTime();
      tmp = tmp/(1000);
      var level = 1;

      while(tmp >60){
        tmp /= 60;
        level += 1;
        if(level >=3) break;
      }
      if(tmp > 24){
        level += 1;
        tmp /=24;
      }

      var difTimeRes = parseInt(tmp);
      if(difTimeRes >30){
        difTimeRes = new Date(timeString).toLocaleDateString()
        level += 1 ;
      }
      switch ( level ) {
        case 1:
          difTimeRes += ' 秒前';
          break;
        case 2:
          difTimeRes += ' 分钟前';
          break;
        case 3:
          difTimeRes += ' 小时前';
          break;
        case 4:
          difTimeRes += ' 天前';
          break;
        default:
          // bu 处理
          break;
      }
      return difTimeRes;
    }


    var update = function () {
      $ionicLoading.show();

      var url = rootUrl + '/dynamic/get_self_list';
      var query = {UserId: userInfo._id};


      $http.get(url, {params: query})
        .success(function (result) {
          $ionicLoading.hide();

          var data = result.data;
          data.forEach(function(item){
            item['Time'] = calcTime(item["IssueTime"]);
          })
          console.log('mydynamic data ',JSON.stringify(data));
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
