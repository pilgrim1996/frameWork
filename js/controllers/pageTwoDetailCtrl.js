/**
 * Created by SIE-PC on 2018/8/17.
 */
var app = angular.module('appTwoDetail',['ngCookies']);
app.controller('pageTwoDetailCtrl',['$scope','$stateParams','$http','$state','$cookieStore',function($scope,$stateParams,$http,$state,$cookieStore){
    if($stateParams.id!=undefined){
        $http.get('././json/data.json').success(function(res){
            $scope.data = res.data[$stateParams.id];
            console.log($stateParams.id);
            /*if($cookieStore.get("userCookie")==undefined){
             $cookieStore.put("userCookie",$scope.userInfo)
             }
             if($stateParams.id == undefined){
             $scope.userInfo = $cookieStore.get("userCookie");
             $scope.userOrign = $cookieStore.get("userCookie");
             }else{*/
            $scope.userInfo = {
                name:$scope.data.name,
                age:$scope.data.age,
                sex:$scope.data.sex
            }
            $scope.userOrign ={
                name:$scope.data.name,
                age:$scope.data.age,
                sex:$scope.data.sex
            };
            /*}*/
            $scope.resetInfo = function () {
                $scope.userInfo = $scope.userOrign;
            }
            $scope.update = function(){
                console.log($scope.userInfo)
            }
            $scope.goback = function(){
                $state.go("PageTwo");
            }
        })
    }else{
        $scope.userInfo = {params : []}
        $scope.params= [0];
        $scope.add = function(){
            $scope.params.push(0);
        }
        $scope.delete = function(index){
            $scope.userInfo.params.splice(index,1);
            $scope.params.pop(index);
        }
        $scope.save = function(){
            console.log($scope.userInfo.params)
        }

    }

}])