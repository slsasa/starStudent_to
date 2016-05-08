/**
 * Created by apple-ty on 16-5-6.
 */
angular.module('starter')
    .config(function ($stateProvider) {
        $stateProvider
            .state('forgotpw', {
                url: '/forgotpw',
                templateUrl: 'templates/login/forgotpw.html',
                controller:'forgotpwCtrl'
            })
    })


    .controller('forgotpwCtrl',function($scope){

    })
