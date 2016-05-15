/**
 * Created by apple-ty on 16-5-8.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('date-editor',{
        url:'/date-editor',
          templateUrl: 'templates/stuPerson/date-editor.html',
          controller: 'dateEditorCtrl'
      });
  })
  .controller('dateEditorCtrl',function($scope){
    $scope.teacherPerson = {
      name:'李伟峰',
      sex:'男',
      nation:'汉族',
      entryTime:1471340799000,
      username:'李老师',
      password:'123',
      teacherMeg:'1999年参加工作，爱岗敬业，有才艺，有理想，与人为善，沟通能力强。多次获镇优秀教师称号。人生格言是：爱就是教育，没有爱便没有教育。教师讲课深入浅出，条理清楚，层层剖析，环环相扣，论证严密，结构严谨，用思维的逻辑力量吸引学生的注意力用理智控制课堂教学进程。',
      headImg:'img/img2.png',
      backImg:'img/mebk.jpeg',
      styleImg:[{
        time:1482994422123,
        imgs:['img/img2.png','img/mebk.jpeg','img/img3.png','img/apply.jpeg']
      },{
        time:1482994422123,
        imgs:['img/img1.png','img/mebk.jpeg','img/img3.png']
      },{
        time:1482994422123,
        imgs:['img/img4.png','img/mebk.jpeg','img/img3.png']
      }],
      myDetail:[{
        time:1462998886709,
        img:'img/img2.png',
        content:'学习,不可无目标;做人,不能没理想;发动态,怎么可能没图'
      },{
        time:1462998886709,
        img:'img/img2.png',
        content:'根据国家法定假期安排，元旦放假三天。假期有舞蹈疑问的可以打电话咨询我，电话15989781858'
      }],
      principalMajor:'软件技术',
      signature:'勤能补拙',
      flower:323,
      praise:324,
      share:423

    };
  })
