/**
 * Created by SIE-PC on 2018/8/14.
 */
var appThree = angular.module('appThree', []);
appThree.controller('pageThreeCtrl',['$scope','$rootScope', function($scope,$rootScope){
    console.log($rootScope.test);
    $scope.userInfo = {
        name:"zhangsan",
        password:"123456",
        email:"872114985@qq.com"
    }
    $scope.getFromData = function(){
        $scope.bindInfo = $scope.userInfo;
    }
    $scope.setFromData = function(){
        $scope.userInfo  = {
            name:"wuqiqi",
            password:"jfisjjvkahsjisj",
            email:"18814383440@163.com"
        }
    }
    $scope.resetFromData = function(){
        $scope.userInfo = {
            name:"zhangsan",
            password:"123456",
            email:"872114985@qq.com"
        }
        $scope.bindInfo = null;
    }
    $scope.isRed = false;
    $scope.isGreen = false;
    $scope.setRed = function(){
        $scope.isRed = true;
        $scope.isGreen = false;
    }
    $scope.setGreen = function(){
        $scope.isRed = false;
        $scope.isGreen = true;
    }
    $scope.toggleFlag = false;
    $scope.toggleContent = function(){
        $scope.toggleFlag = !$scope.toggleFlag;
    }
}])