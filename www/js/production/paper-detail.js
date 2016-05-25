/**
 * Created by sls on 16/5/9.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('paper-detail', {
        url: '/paper-detail',
        templateUrl: 'templates/production/paper-detail.html',
        controller: 'paperDetailCtrl'
      });
  })
  .controller('paperDetailCtrl', function ($scope,$http,userInfo) {

     $scope['teacher'] = userInfo['teacherInfo'];
     $scope['paper'] = userInfo.paper;
     userInfo['teacherInfo'] = {};

     $scope['likeCont'] = function(){

       var url = rootUrl +'/teacher_article/add_like';
       $http.post(url,{UserId:userInfo['_id'],ArticleId:$scope['paper']['_id']})
         .success(function(result){

         })
         .error(function(err){


         });

     }

  });

