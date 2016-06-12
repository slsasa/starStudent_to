/**
 * Created by sls on 16/5/10.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('my-style', {
        url: '/teacher-teacher/my-style',
        templateUrl: 'templates/teacher/my-style.html',
        cache: true,
        controller: 'myStyleCtrl'

      });
  })
  .controller('myStyleCtrl', function ($scope, $state,userInfo, $http) {

    $scope.goAddImg = function(){
      $state.go('add-img')
    }

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
              console.log('item2 url '+ item2['Url'])
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