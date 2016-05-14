/**
 * Created by apple-ty on 16-4-28.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('school-outcome',{
        url:'/school-outcome',
        templateUrl:'templates/school/school-outcome.html',
        controller:'outcomeCtrl'
      });
  })
  .controller('outcomeCtrl',function($scope){

    //学校成果
    $scope.schOutcomes = [
      {
        id:0,
        img:'img/img1.png',
        title:'中国音乐学院、中国歌剧舞剧院批准的国家艺术水平考级点。',
        time:'1461350859000'

      },{
        id:1,
        img:'img/img2.png',
        title:'连续六年被长沙市教育局评为民办教育工作先进单位。',
        time:'1471350854000'
      },{
        id:2,
        img:'img/img3.png',
        title:'连续六年被评为湖南省优秀民办学校。',
        time:'14613503058000'
      }
    ];

  })
