// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

    //动态圈部分
  .state('tab.dongtai', {  //动态圈
    url: '/dongtai',
      abstract: true,
      views: {
      'dynamic': {
        templateUrl: 'templates/dongtai/dynamic.html',
        controller: 'DynamicCtrl'
      }
    }
  })
    .state('tab.dongtai.dyschool', {  //学校动态
      url: '/dyschool',
      views: {
        'dyschool': {
          templateUrl: 'templates/dongtai/dyschool.html',
          controller: 'dySchoolCtrl'
        }
      }
    })

    .state('tab.dongtai.dystudent', {  //学员动态
      url: '/dystudent',
      views: {
        'dystudent': {
          templateUrl: 'templates/dongtai/dystudent.html',
          controller: 'dyStudentCtrl'
        }
      }
    })

    .state('tab.dongtai.dyteacher', {  //教师动态
      url: '/dyteacher',
      views: {
        'dyteacher': {
          templateUrl: 'templates/dongtai/dyteacher.html',
          controller: 'dyTeacherCtrl'
        }
      }
    })
    //首页部分
    .state('tab.school-resume', {
      url: '/school-resume',
      views: {
        'school-resume': {
          templateUrl: 'templates/school/school-index.html',
          controller: 'ResumeCtrl'
        }
      }
    })
    .state('tab.school-outcome', {
      url: '/school-outcome',
      views: {
        'school-resume': {
          templateUrl: 'templates/school/school-outcome.html',
          controller: 'OutcomeCtrl'
        }
      }
    })
    .state('tab.outcome-detail', {
      url: '/school-outcome/outcome:outcomeId',
      views: {
        'school-resume': {
          templateUrl: 'templates/school/outcome-detail.html',
          controller: 'outcomeDetailCtrl'
        }
      }
    })
    .state('tab.school-course', {
      url: '/school-course',
      views: {
        'school-resume': {
          templateUrl: 'templates/school/school-course.html',
          controller: 'CourseCtrl'
        }
      }
    })
    .state('tab.school-faculty', {
      url: '/school-faculty',
      views: {
        'school-resume': {
          templateUrl: 'templates/school/school-faculty.html',
          controller: 'FacultyCtrl'
        }
      }
    })
    .state('tab.schProfile', {
      url: '/schProfile',
      views: {
        'school-resume': {
          templateUrl: 'templates/school/schProfile.html',
          controller: 'schProfileCtrl'
        }
      }
    })
    .state('tab.honorUp', {  //教师风采
      url: '/honorUp',
      abstract: true,
      views: {
        'school-resume': {
          templateUrl: 'templates/honorUp/school-honor.html',
          controller: 'HonorCtrl'
        }
      }
    })

    .state('tab.honorUp.star', {  //明星榜
      url: '/star',
      views: {
        'star': {
          templateUrl: 'templates/honorUp/star.html',
          controller: 'StarupCtrl'
        }
      }
    })
    .state('tab.honorUp.honor', {    //荣誉墙
      url: '/honor',
      views: {
        'honor': {
          templateUrl: 'templates/honorUp/honor.html',
          controller: 'HonorupCtrl'
        }
      }
    })
    .state('tab.school-teachermien', {
      url: '/school-teachermien',
      views: {
        'school-resume': {
          templateUrl: 'templates/school/school-teachermien.html',
          controller: 'TeachermienCtrl'
        }
      }
    })
    .state('tab.resume-mone', {
      url: '/resume-mone',
      views: {
        'school-resume': {
          templateUrl: 'templates/school/resume-mone.html',
          controller: 'resumeMoneCtrl'
        }
      }
    })

    .state('tab.apply', {
      url: '/apply',
      views: {
        'apply': {
          templateUrl: 'templates/apply.html',
          controller: 'ChatsCtrl'
        }
      }
    })


  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/school-resume');

});
