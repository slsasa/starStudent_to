/**
 * Created by apple-ty on 16-5-4.
 */

angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('outcome-detail',{
        url:'/school-outcome/outcome:outcomeId',
          templateUrl: 'templates/school/outcome-detail.html',
          controller:'outcomeDetailCtrl'

      });
  })
  .controller('outcomeDetailCtrl',function($scope,$stateParams){


    var schOutcomes = [
      {
        id:0,
        img:'img/img1.png',
        title:'中国音乐学院、中国歌剧舞剧院批准的国家艺术水平考级点。',
        time:'1461350859000',
        content:'社会艺术教育部通过社会艺术水平考级、组织种类非学历教育、短期培训及与各界、中、外文化团体进行交流等形式，大力促进和普及艺术教育。社会艺术教育部主要工作分为考级委员会和艺术培训中心两部分。中国歌剧舞剧院考级委员会是2003年4月21日经文化部正式批准跨省的考级机构。自1997年开展考级工作以来，已有十余年的时间。十余年来,在部领导、院领导、部门领导的带领下，考级委员会全体工作人员群心群力，按照制订的工作计划，逐步规范考级工作，开拓考级市场，增加考级项目，丰富考级内涵，开展各项培训工作。'
      },{
        id:1,
        img:'img/img2.png',
        title:'连续六年被长沙市教育局评为民办教育工作先进单位。',
        time:'1471350854000',
        content:'连续六年就是这个鸟样，没错啦'
      },{
        id:2,
        img:'img/img3.png',
        title:'连续六年被评为湖南省优秀民办学校。',
        time:'14613503058000',
        content:'湖南省就是好厉害的'
      }
    ];
    var getOutcome = function(outcomeId){
      for(var i = 0; i < schOutcomes.length;i++){
        if( schOutcomes[i].id == parseInt(outcomeId)){
          return schOutcomes[i];
        }
      }
    }
    $scope.outcomeDetail = getOutcome($stateParams.outcomeId);

  })
