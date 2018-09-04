/**
 * Created by SIE-PC on 2018/9/3.
 */
var appSeven = angular.module('appSeven', []);
appSeven.controller('pageSevenCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){;

}]);
appSeven.directive("parentDir",function(){
    return{
        restrict:'AE',
        replace:true,
        controller:function($scope) {
            this.name = 'angular';
            this.version = '1.4.6';
        }
    }
});
appSeven.directive("childrenDir",function(){
    return{
        restrict:"AE",
        replace:true,
        require: '^?parentDir',
        link : function(scope, element, attr, reController) {
            console.log(scope);
            console.log(attr);
            console.log(reController.name)
        }
    }
})



