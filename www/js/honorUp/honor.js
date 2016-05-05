/**
 * Created by apple-ty on 16-4-29.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.honor-tabs.honor-wall',{
        url:'/honor-wall',
        views:{'honor':{
          templateUrl: 'templates/honorUp/honor.html',
          controller:'honorWallCtrl'
        }}
      });
  })
  .controller('honorWallCtrl',function($scope){
    $scope.honorWall = [{
      id:0,
      name:'李德老师',
      img:'img/img1.png',
      honorDetail:'荣获湖南省教育局舞蹈类比赛拉丁舞的冠军'
    },{
      id:1,
      name:'彭而老师',
      img:'img/img2.png',
      honorDetail:'荣获全国书法比赛一等奖'
    },{
      id:2,
      name:'吴杜尔老师',
      img:'img/img3.png',
      honorDetail:'大专学历,小学一级教师。1999年参加工作,爱岗敬业,有才艺,有理想,。'
    },{
      id:3,
      name:'李老师',
      img:'img/img4.png',
      honorDetail:'大专学历,小学一级教师。1999年参加工作,爱岗敬业,有才艺,有理想,。'
    }];
  })
