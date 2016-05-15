/**
 * Created by sls on 16/5/6.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('course-detail',{
        url:'/course-introduce/:courseId',
          templateUrl: 'templates/school/course-detail.html',
          controller:'courseDetailCtrl'
      });
  })
  .controller('courseDetailCtrl',function($scope,$stateParams){
    var courses  = [
      {
        id:0,
        courseKind:'舞蹈类',
        courseDetail:[{
          _id:0,
          coverImg:'img/course/coursebk.png',
          name:'中国舞',
          content:'中国舞China classic dance作为我国舞蹈艺术中的一个类别，是在民族民间传统舞蹈的基础上，经过历代专业工作者提炼、整理、加工、创造，并经过较长期艺术实践的检验流传下来的具有一定典范意义的古典风格的特色舞蹈。古典舞创立于二十世纪五十年代，曾一度被一些人称作“戏曲舞蹈”，它本身就是介于戏曲与舞蹈之间的混合物。 戏曲和武术是建立中国古典舞训练的基础，中国古典舞的基础训练充分体现了我们中华民族鲜明的民族特色。基训中的技术、技巧有着独具一格的民族特性，与其它舞种中的技术、技巧有着很大的不同。'
        },{
          _id:1,
          coverImg:'img/course/coursebk.png',
          name:'拉丁舞',
          content:'拉丁舞China classic dance作为我国舞蹈艺术中的一个类别，是在民族民间传统舞蹈的基础上，经过历代专业工作者提炼、整理、加工、创造，并经过较长期艺术实践的检验流传下来的具有一定典范意义的古典风格的特色舞蹈。古典舞创立于二十世纪五十年代，曾一度被一些人称作“戏曲舞蹈”，它本身就是介于戏曲与舞蹈之间的混合物。 戏曲和武术是建立中国古典舞训练的基础，中国古典舞的基础训练充分体现了我们中华民族鲜明的民族特色。基训中的技术、技巧有着独具一格的民族特性，与其它舞种中的技术、技巧有着很大的不同。'
        },{
          _id:2,
          name:'街舞',
          coverImg:'img/course/coursebk.png',
          content:'街舞China classic dance作为我国舞蹈艺术中的一个类别，是在民族民间传统舞蹈的基础上，经过历代专业工作者提炼、整理、加工、创造，并经过较长期艺术实践的检验流传下来的具有一定典范意义的古典风格的特色舞蹈。古典舞创立于二十世纪五十年代，曾一度被一些人称作“戏曲舞蹈”，它本身就是介于戏曲与舞蹈之间的混合物。 戏曲和武术是建立中国古典舞训练的基础，中国古典舞的基础训练充分体现了我们中华民族鲜明的民族特色。基训中的技术、技巧有着独具一格的民族特性，与其它舞种中的技术、技巧有着很大的不同。'
        },{
          _id:3,
          name:'肚皮舞',
          coverImg:'img/course/coursebk.png',
          content:'肚皮舞China classic dance作为我国舞蹈艺术中的一个类别，是在民族民间传统舞蹈的基础上，经过历代专业工作者提炼、整理、加工、创造，并经过较长期艺术实践的检验流传下来的具有一定典范意义的古典风格的特色舞蹈。古典舞创立于二十世纪五十年代，曾一度被一些人称作“戏曲舞蹈”，它本身就是介于戏曲与舞蹈之间的混合物。 戏曲和武术是建立中国古典舞训练的基础，中国古典舞的基础训练充分体现了我们中华民族鲜明的民族特色。基训中的技术、技巧有着独具一格的民族特性，与其它舞种中的技术、技巧有着很大的不同。'
        }]
      },{
        id:1,
        courseKind:'器乐类',
        courseDetail:[
          {
            _id:0,
            name:'钢琴',
            coverImg:'img/course/coursebk.png',
            content:'钢琴China classic dance作为我国舞蹈艺术中的一个类别，是在民族民间传统舞蹈的基础上，经过历代专业工作者提炼、整理、加工、创造，并经过较长期艺术实践的检验流传下来的具有一定典范意义的古典风格的特色舞蹈。古典舞创立于二十世纪五十年代，曾一度被一些人称作“戏曲舞蹈”，它本身就是介于戏曲与舞蹈之间的混合物。 戏曲和武术是建立中国古典舞训练的基础，中国古典舞的基础训练充分体现了我们中华民族鲜明的民族特色。基训中的技术、技巧有着独具一格的民族特性，与其它舞种中的技术、技巧有着很大的不同。'
          },{
            _id:1,
            name:'古筝',
            coverImg:'img/course/coursebk.png',
            content:'古筝China classic dance作为我国舞蹈艺术中的一个类别，是在民族民间传统舞蹈的基础上，经过历代专业工作者提炼、整理、加工、创造，并经过较长期艺术实践的检验流传下来的具有一定典范意义的古典风格的特色舞蹈。古典舞创立于二十世纪五十年代，曾一度被一些人称作“戏曲舞蹈”，它本身就是介于戏曲与舞蹈之间的混合物。 戏曲和武术是建立中国古典舞训练的基础，中国古典舞的基础训练充分体现了我们中华民族鲜明的民族特色。基训中的技术、技巧有着独具一格的民族特性，与其它舞种中的技术、技巧有着很大的不同。'
          },{
            _id:2,
            name:'架子鼓',
            coverImg:'img/course/coursebk.png',
            content:'架子鼓China classic dance作为我国舞蹈艺术中的一个类别，是在民族民间传统舞蹈的基础上，经过历代专业工作者提炼、整理、加工、创造，并经过较长期艺术实践的检验流传下来的具有一定典范意义的古典风格的特色舞蹈。古典舞创立于二十世纪五十年代，曾一度被一些人称作“戏曲舞蹈”，它本身就是介于戏曲与舞蹈之间的混合物。 戏曲和武术是建立中国古典舞训练的基础，中国古典舞的基础训练充分体现了我们中华民族鲜明的民族特色。基训中的技术、技巧有着独具一格的民族特性，与其它舞种中的技术、技巧有着很大的不同。'
          },{
            _id:3,
            name:'小提琴',
            coverImg:'img/course/coursebk.png',
            content:'小提琴China classic dance作为我国舞蹈艺术中的一个类别，是在民族民间传统舞蹈的基础上，经过历代专业工作者提炼、整理、加工、创造，并经过较长期艺术实践的检验流传下来的具有一定典范意义的古典风格的特色舞蹈。古典舞创立于二十世纪五十年代，曾一度被一些人称作“戏曲舞蹈”，它本身就是介于戏曲与舞蹈之间的混合物。 戏曲和武术是建立中国古典舞训练的基础，中国古典舞的基础训练充分体现了我们中华民族鲜明的民族特色。基训中的技术、技巧有着独具一格的民族特性，与其它舞种中的技术、技巧有着很大的不同。'
          },{
            _id:4,
            name:'吉他',
            coverImg:'img/course/coursebk.png',
            content:'吉他China classic dance作为我国舞蹈艺术中的一个类别，是在民族民间传统舞蹈的基础上，经过历代专业工作者提炼、整理、加工、创造，并经过较长期艺术实践的检验流传下来的具有一定典范意义的古典风格的特色舞蹈。古典舞创立于二十世纪五十年代，曾一度被一些人称作“戏曲舞蹈”，它本身就是介于戏曲与舞蹈之间的混合物。 戏曲和武术是建立中国古典舞训练的基础，中国古典舞的基础训练充分体现了我们中华民族鲜明的民族特色。基训中的技术、技巧有着独具一格的民族特性，与其它舞种中的技术、技巧有着很大的不同。'
          },{
            _id:5,
            name:'二胡',
            coverImg:'img/course/coursebk.png',
            content:'二胡China classic dance作为我国舞蹈艺术中的一个类别，是在民族民间传统舞蹈的基础上，经过历代专业工作者提炼、整理、加工、创造，并经过较长期艺术实践的检验流传下来的具有一定典范意义的古典风格的特色舞蹈。古典舞创立于二十世纪五十年代，曾一度被一些人称作“戏曲舞蹈”，它本身就是介于戏曲与舞蹈之间的混合物。 戏曲和武术是建立中国古典舞训练的基础，中国古典舞的基础训练充分体现了我们中华民族鲜明的民族特色。基训中的技术、技巧有着独具一格的民族特性，与其它舞种中的技术、技巧有着很大的不同。'
          }]
      },{
        id:2,
        courseKind:'表演类',
        courseDetail:[{
          _id:0,
          name:'口才',
          coverImg:'img/coursebk.png',
          content:'口才China classic dance作为我国舞蹈艺术中的一个类别，是在民族民间传统舞蹈的基础上，经过历代专业工作者提炼、整理、加工、创造，并经过较长期艺术实践的检验流传下来的具有一定典范意义的古典风格的特色舞蹈。古典舞创立于二十世纪五十年代，曾一度被一些人称作“戏曲舞蹈”，它本身就是介于戏曲与舞蹈之间的混合物。 戏曲和武术是建立中国古典舞训练的基础，中国古典舞的基础训练充分体现了我们中华民族鲜明的民族特色。基训中的技术、技巧有着独具一格的民族特性，与其它舞种中的技术、技巧有着很大的不同。'
        }, {
          _id:1,
          name:'播音主持',
          coverImg:'img/course/coursebk.png',
          content:'播音主持China classic dance作为我国舞蹈艺术中的一个类别，是在民族民间传统舞蹈的基础上，经过历代专业工作者提炼、整理、加工、创造，并经过较长期艺术实践的检验流传下来的具有一定典范意义的古典风格的特色舞蹈。古典舞创立于二十世纪五十年代，曾一度被一些人称作“戏曲舞蹈”，它本身就是介于戏曲与舞蹈之间的混合物。 戏曲和武术是建立中国古典舞训练的基础，中国古典舞的基础训练充分体现了我们中华民族鲜明的民族特色。基训中的技术、技巧有着独具一格的民族特性，与其它舞种中的技术、技巧有着很大的不同。'
        },{
          _id:2,
          name:'模特表演',
          coverImg:'img/course/coursebk.png',
          content:'模特表演China classic dance作为我国舞蹈艺术中的一个类别，是在民族民间传统舞蹈的基础上，经过历代专业工作者提炼、整理、加工、创造，并经过较长期艺术实践的检验流传下来的具有一定典范意义的古典风格的特色舞蹈。古典舞创立于二十世纪五十年代，曾一度被一些人称作“戏曲舞蹈”，它本身就是介于戏曲与舞蹈之间的混合物。 戏曲和武术是建立中国古典舞训练的基础，中国古典舞的基础训练充分体现了我们中华民族鲜明的民族特色。基训中的技术、技巧有着独具一格的民族特性，与其它舞种中的技术、技巧有着很大的不同。'
        }]
      },{
        id:3,
        courseKind:'书画类',
        courseDetail:[{
          _id:0,
          name:'美术',
          coverImg:'img/course/coursebk.png',
          content:'美术China classic dance作为我国舞蹈艺术中的一个类别，是在民族民间传统舞蹈的基础上，经过历代专业工作者提炼、整理、加工、创造，并经过较长期艺术实践的检验流传下来的具有一定典范意义的古典风格的特色舞蹈。古典舞创立于二十世纪五十年代，曾一度被一些人称作“戏曲舞蹈”，它本身就是介于戏曲与舞蹈之间的混合物。 戏曲和武术是建立中国古典舞训练的基础，中国古典舞的基础训练充分体现了我们中华民族鲜明的民族特色。基训中的技术、技巧有着独具一格的民族特性，与其它舞种中的技术、技巧有着很大的不同。'
        },{
          _id:1,
          name:'国学美术',
          coverImg:'img/course/coursebk.png',
          content:'国学China classic dance作为我国舞蹈艺术中的一个类别，是在民族民间传统舞蹈的基础上，经过历代专业工作者提炼、整理、加工、创造，并经过较长期艺术实践的检验流传下来的具有一定典范意义的古典风格的特色舞蹈。古典舞创立于二十世纪五十年代，曾一度被一些人称作“戏曲舞蹈”，它本身就是介于戏曲与舞蹈之间的混合物。 戏曲和武术是建立中国古典舞训练的基础，中国古典舞的基础训练充分体现了我们中华民族鲜明的民族特色。基训中的技术、技巧有着独具一格的民族特性，与其它舞种中的技术、技巧有着很大的不同。'
        },{
          _id:2,
          name:'自主美劳',
          coverImg:'img/course/coursebk.png',
          content:'自主China classic dance作为我国舞蹈艺术中的一个类别，是在民族民间传统舞蹈的基础上，经过历代专业工作者提炼、整理、加工、创造，并经过较长期艺术实践的检验流传下来的具有一定典范意义的古典风格的特色舞蹈。古典舞创立于二十世纪五十年代，曾一度被一些人称作“戏曲舞蹈”，它本身就是介于戏曲与舞蹈之间的混合物。 戏曲和武术是建立中国古典舞训练的基础，中国古典舞的基础训练充分体现了我们中华民族鲜明的民族特色。基训中的技术、技巧有着独具一格的民族特性，与其它舞种中的技术、技巧有着很大的不同。'
        },{
          _id:3,
          name:'书法',
          coverImg:'img/course/coursebk.png',
          content:'书法China classic dance作为我国舞蹈艺术中的一个类别，是在民族民间传统舞蹈的基础上，经过历代专业工作者提炼、整理、加工、创造，并经过较长期艺术实践的检验流传下来的具有一定典范意义的古典风格的特色舞蹈。古典舞创立于二十世纪五十年代，曾一度被一些人称作“戏曲舞蹈”，它本身就是介于戏曲与舞蹈之间的混合物。 戏曲和武术是建立中国古典舞训练的基础，中国古典舞的基础训练充分体现了我们中华民族鲜明的民族特色。基训中的技术、技巧有着独具一格的民族特性，与其它舞种中的技术、技巧有着很大的不同。'
        }]
      },{
        id:4,
        courseKind:'音乐类',

        courseDetail:[
          {
          _id:0,
          name:'独唱',
            coverImg:'img/course/coursebk.png',
          content:'独唱China classic dance作为我国舞蹈艺术中的一个类别，是在民族民间传统舞蹈的基础上，经过历代专业工作者提炼、整理、加工、创造，并经过较长期艺术实践的检验流传下来的具有一定典范意义的古典风格的特色舞蹈。古典舞创立于二十世纪五十年代，曾一度被一些人称作“戏曲舞蹈”，它本身就是介于戏曲与舞蹈之间的混合物。 戏曲和武术是建立中国古典舞训练的基础，中国古典舞的基础训练充分体现了我们中华民族鲜明的民族特色。基训中的技术、技巧有着独具一格的民族特性，与其它舞种中的技术、技巧有着很大的不同。'
         },{
          _id:1,
          name:'音乐素养',
            coverImg:'img/course/coursebk.png',
          content:'音乐素养China classic dance作为我国舞蹈艺术中的一个类别，是在民族民间传统舞蹈的基础上，经过历代专业工作者提炼、整理、加工、创造，并经过较长期艺术实践的检验流传下来的具有一定典范意义的古典风格的特色舞蹈。古典舞创立于二十世纪五十年代，曾一度被一些人称作“戏曲舞蹈”，它本身就是介于戏曲与舞蹈之间的混合物。 戏曲和武术是建立中国古典舞训练的基础，中国古典舞的基础训练充分体现了我们中华民族鲜明的民族特色。基训中的技术、技巧有着独具一格的民族特性，与其它舞种中的技术、技巧有着很大的不同。'
        },{
          _id:2,
          name:'合唱',
            coverImg:'img/course/coursebk.png',
          content:'大合唱是非常好的体验'

          }]
      }];

    $scope.courseKind = courses[parseInt($stateParams.courseId/10)];
    $scope.course = $scope.courseKind.courseDetail[parseInt($stateParams.courseId%10)];

  })
