/**
 * Created by apple-ty on 16-4-29.
 */
angular.module('starter')
  .controller('dySchoolCtrl',function($scope,$ionicActionSheet,$timeout,dystutentService){
    $scope.schposts = dystutentService.getdystu1().stupost;//说说内容
   $scope.share = function(){
// Show the action sheet
     var hideSheet = $ionicActionSheet.show({
       titleText: "操作当前文章",
       buttons: [
         { text: "我的动态" },
         { text: "新浪微博" },
         { text: "微信" }
       ],
       buttonClicked: function(index) {
         return true;
       },
       cancelText: "取消",
       cancel: function() {
         // add cancel code..
       }

     });

     // For example's sake, hide the sheet after two seconds
     $timeout(function() {
       //	hideSheet();
     }, 2000);

   }
  });
