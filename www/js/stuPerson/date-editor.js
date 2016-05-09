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
    $scope.items=["账号","昵称","姓名","性别","名族","入学年份","入学概况","所学专业"];
  })
