/**
 * Created by sls on 16/5/6.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('works-detail',{
        url:'/works-detail',
        templateUrl:'templates/production/works-detail.html',
        controller:'logDetailCtrl'
      });
  })

  .controller('logDetailCtrl', function ($scope,$stateParams,userInfo,$http,$ionicPopup) {

    $scope.teacher  = userInfo.teacherInfo;
    $scope.tearchingLog = userInfo.log;


    $scope['linkClick'] = function () {
      var url = rootUrl + '/teacher_article/add_like';
      $http.post(url, {UserId: userInfo['_id'], ArticleId: $scope['tearchingLog']['_id']})
        .success(function (result) {
          $ionicPopup.alert({
            title:'success',
            template:'点赞成功'
          })
        })
        .error(function (err) {
          //console.log(JSON.stringify(err));
          $ionicPopup.alert({
            title:'err',
            template:'点赞失败'+err
          })
        });
    }


  })
