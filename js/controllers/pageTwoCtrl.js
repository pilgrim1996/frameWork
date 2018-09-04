var appTwo = angular.module('appTwo', []);
appTwo.controller('pageTwoCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){;
	$scope.array=[1,2,3,4,5];
	/*var js = {"data":[
						{"name":"liuyi","age":"14","sex":"man"},
						{"name":"chener","age":"15","sex":"man"},
						{"name":"zhangsan","age":"16","sex":"man"},
						{"name":"lisi","age":"17","sex":"man"},
						{"name":"wangwu","age":"18","sex":"man"},
						{"name":"zhaoliu","age":"19","sex":"man"},
						{"name":"xuqi","age":"20","sex":"man"}
				]}*/
	$scope.checked = [];

	$scope.updateChecked = function(id){
		if($scope.checked.indexOf(id)==-1){
			$scope.checked.push(id)
		}
		else if($scope.checked.indexOf(id)!=-1){
			$scope.checked.splice($scope.checked.indexOf(id),1)
		}
	}
	$scope.selectAllCheck = function(){
		$scope.checked = [];
		if($scope.selectAll){
			for(var i = 0;i<$scope.tableData.length;i++){
				$scope.checked.push(i);
			}
		}else{
			$scope.checked = []
		}
	}
	$scope.print = function(){

		$scope.printData = [];
		for(var i=0;i<$scope.checked.length;i++){
			$scope.printData.push($scope.tableData[$scope.checked[i]]);
		}
		console.log($scope.printData)
	}
}]);



