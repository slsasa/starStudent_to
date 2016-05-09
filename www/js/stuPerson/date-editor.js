/**
 * Created by apple-ty on 16-5-8.
 */
angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tabs.date-editor',{
        url:'/date-editor',
        views:{'stuPerson':{
          templateUrl: 'templates/stuPerson/date-editor.html',
          controller: 'dateEditorCtrl'
        }}
      });
  })
  .controller('dateEditorCtrl',function($scope){

  })
