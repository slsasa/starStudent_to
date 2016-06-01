/**
 * Created by apple-ty on 16-4-28.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('school-faculty',{
        url:'/school-faculty',
        templateUrl: 'templates/school/school-faculty.html',
        controller: 'FacultyCtrl'

      });
  })
  .controller('FacultyCtrl',function($scope, $http,$ionicPopup){
    $scope.rootPicUrl = rootPicUrl;

    var updata = function(){
      var url = rootUrl + "/school_faculty/get_list";

      $http.get(url)
        .success(function(result){
          //console.log(JSON.stringify(result));
          var data = result.data;
          $scope.tearcherApti = data;
        })
        .error(function(err){
          $ionicPopup.alert({
            title:'err',
            template:"获取数据失败"+err
          });
        });
    };

    $scope.$on('$ionicView.beforeEnter',function(){
      updata();
    });

  })
