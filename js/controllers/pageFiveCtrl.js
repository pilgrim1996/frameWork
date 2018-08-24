/**
 * Created by SIE-PC on 2018/8/21.
 */
var appFive = angular.module('appFive',[]);
appFive.controller('pageFiveCtrl',['$scope','$http',function($scope,$http,$stateScope){
    $http.get("././json/bookTypeList.json").success(function(res){
        $scope.BookTypedata = res.data;
    })
    /*$scope.statement.bookTypeJson = $stateScope.bookTypeJson;
    $scope.$watch('statement.bookTypeJson',function(){
        $scope.findBookTypeList($stateScope.bookTypeJson);
    })*/

    $scope.findBookTypeList = function(index){
        $http.get("././json/bookTypeList.json").success(function(res){
            $scope.BookTypeUrl = res.data[index].jsonUrl;
                $http.get("././"+$scope.BookTypeUrl).success(function(res){
                    $scope.BookTypeListData = res.data;
                })
            })


    }
    $scope.findBookTypeList(0);

}])