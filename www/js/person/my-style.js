/**
 * Created by sls on 16/5/10.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('my-style', {
        url: '/person-teacher/my-style',
        templateUrl: 'templates/person/my-style.html',
        controller: 'myStyleCtrl'

      });
  })
  .controller('myStyleCtrl', function ($scope, userInfo, $http) {

    var url = rootUrl + '/teacher_style/get_self_style';
    var query = {
      TeacherId: userInfo['_id']
    };

    var update = function () {
      $http.get(url, {params: query})
        .success(function (result) {
          var data = result['data'];
          var StyleItemList = data['StyleItem'];

          StyleItemList.forEach(function (item1) {
            item1['PicListRef'].forEach(function (item2) {
              item2['Url'] = rootPicUrl + item2['Url'];
            })
          });

          $scope.StyleItemList = StyleItemList;
        })
        .error(function (err) {
          console.log(err)
        });
    };

    update();
  });
