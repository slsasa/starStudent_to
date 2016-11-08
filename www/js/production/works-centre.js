/**
 * Created by sls on 16/5/11.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('works-centre', {
        url: '/works-centre',
        templateUrl: 'templates/production/works-centre.html',
        controller: 'worksCentreCtrl'

      });
  })
  .controller('worksCentreCtrl', function ($scope, $state, $stateParams, userInfo, $http,$ionicPopup) {


    var url = rootUrl + '/teacher_article/get_self_list';

    $scope.teacher = userInfo.teacherInfo;
    //userInfo['TeacherRef']
    var update = function () {
      $http.get(url, {params: {TeacherId: $scope.teacher['_id'], ArticleType: 'log'}})
        .success(function (result) {
          var data = result['data'];

          $scope.TeacherLogList = data;
        })
        .error(function (err) {
          $ionicPopup.alert({
            title:'err',
            template:'获取数据失败'+ err
          });
        });


    };

    update();

    $scope['goLogDetail'] = function (log) {
      userInfo.log = log;
      $state.go('works-detail');
    }

  });
