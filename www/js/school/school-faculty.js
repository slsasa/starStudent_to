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
  .controller('FacultyCtrl',function($scope){
    $scope.tearcherApti  = {

      content: '在著名男高音歌唱家张天甫、著名舞蹈家罗迪强、著名钢琴教育家高乐平和资深金牌教师姚艳等名师的主导下，集合了国内外知名专家教授、海外归国人才，和一批高水平的优秀青年教师团队，培养了大量高素质高品位的艺术人才，并在海外全国及省、市各类艺术比赛中多次获奖，为专业艺术院校输送了众多艺术人才。雄厚的师资团队、完善的教学设施，高端的办学质量，在业内脱颖而出，获得社会各界的广泛关注及高度评价。',
      tearcher:[{
        id:0,
        img:'img/schFac/zhangtianpu.png',
        name:'张天甫',
        referral:'著名歌唱家'
      },{
        id:1,
        img:'img/schFac/luo.png',
        name:'罗迪强',
        referral:'著名舞蹈家'
      },{
        id:2,
        img:'img/schFac/yao.png',
        name:'姚艳',
        referral:'著名置身金牌教师'
      }]
    }
  })
