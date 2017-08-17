/**
 * Created by Admin on 2017/8/17.
 */
;(function (angular) {
    var app = angular.module('app',['ui.router']);

    app.controller('appController',['$scope',function ($scope) {
        $scope.title = '每日一笑';
        $scope.titleArr = ['首页','作者','栏目','我的'];
        $scope.index = 0;
        $scope.tabChange = function (index) {
            $scope.index = index;
        }
    }]);

    app.directive('navs',function () {
        return{
            restrict:'EA',
            templateUrl:'../views/topBar_tpl.html',
            controller:['$scope',function ($scope) {

            }]
        }
    });

    app.directive('tabBar',function () {
        return{
            restrict:'EA',
            templateUrl:'../views/tabBar_tpl.html',
            controller:['$scope',function ($scope) {

            }]
        }
    });

    app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
        $stateProvider.state('home',{
            url:'/home',
            views:{
                home:{
                    template:'<h3>首页</h3>'
                },
                author:{
                    template:'<h3>author</h3>'
                },
                content:{
                    template:'<h3>content</h3>'
                },
                my:{
                    template:'<h3>mine</h3>'
                }
            }
        });
        $urlRouterProvider.otherwise('/home')
    }])
})(angular);