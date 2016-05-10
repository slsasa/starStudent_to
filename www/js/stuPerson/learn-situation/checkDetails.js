/**
 * Created by apple-ty on 16-5-10.
 */

angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('checkDetails',{
        url:'/learn-situation/checkDetails:checkId',
        templateUrl: 'templates/stuPerson/learn-situation/checkDetails.html',
        controller:'checkDetailsCtrl'
      });
  })
  .controller('checkDetailsCtrl',function($scope,$stateParams){
    var  learns = [
      {
        id:0,
        coursetitle:'创意口才',
        synscore:'优',
        Speechbase:'优',
        Readskills:'优',
        etiquette:'优',
        feelings:'优',
        stageshow:'优',
        performskills:'优',
        comments:'你性格沉静,常常不拘小节,待人接物却稳重大方。平日里言语并不多,但我知道你心志高远,骨子里一种倔强和坚忍。你上进心强,刻苦钻研'
      },
      {
        id:1,
        coursetitle:'创意口才',
        synscore:'优',
        Speechbase:'优',
        Readskills:'优',
        etiquette:'优',
        feelings:'优',
        stageshow:'优',
        performskills:'优',
        comments:'你性格开朗,热与助人,待人接物却稳重大方。平日里言语并不多,但我知道你心志高远,骨子里一种倔强和坚忍。你上进心强,刻苦钻研'
      },
      {
        id:2,
        coursetitle:'创意口才',
        synscore:'优',
        Speechbase:'优',
        Readskills:'优',
        etiquette:'优',
        feelings:'优',
        stageshow:'优',
        performskills:'优',
        comments:'你的性格内向，不善于表达内心，不喜欢和别人相处。平日里言语并不多,但我知道你心志高远,骨子里一种倔强和坚忍。你上进心强,刻苦钻研'
      }];
    var getCheckDetails = function(learnId){
      for(var i = 0; i < learns.length;i++){
        if( learns[i].id == parseInt(learnId)){
          return learns[i];
        }
      }
    }
    $scope.checkdetails = getCheckDetails($stateParams.checkId);
  })
