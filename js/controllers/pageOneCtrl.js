/**
 * Created by SIE-PC on 2018/8/13.
 */
var appOne = angular.module('oneApp',[]);
appOne.controller('pageOneCtrl', ['$scope',
    function($scope) {
       $scope.message = "hello angular";
    }
]);
appOne.controller('GreetCtrl',function($scope,$rootScope){
    $scope.name = "zhangsan";
    $rootScope.department = "sie";
})
appOne.controller('ListCtrl',function($scope){
    $scope.names = ["lisi","wangwu","zhaoliu"]
})
appOne.controller("EventCtrl",function($scope){
    $scope.count = 0;
    $scope.$on('MyEvent',function(){
        $scope.count++;
    })
})