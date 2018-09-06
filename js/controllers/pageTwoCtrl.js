var appTwo = angular.module('appTwo', []);
appTwo.filter("pageJump",function(){
	return function(input,pageIndex,pageRow){
		if(!input)
			return ;
		var arr=[];
		var start = ( pageIndex - 1 ) * pageRow
		var end = pageIndex*pageRow-1
		for(var i=start;i<end;i++){
			if(input.data.length>i){
				arr.push(input.data[i])
			}else{
				break;
			}
		}
		return arr;
	}
})
appTwo.controller('pageTwoCtrl',['$scope','$http','$filter',function($scope,$http,$filter){
	$scope.dataUrl = $("table").attr("data-url")
	$scope.searchAll = function () {
		$http.post($scope.dataUrl)
			.success(function (res) {
				$scope.tableData = res;
				$scope.init();
				$scope.focus();
			});
	}
	$scope.searchAll();
	var sortAgeFlag = false;
	$scope.sortAge = function () {
		$scope.tableData.data = $filter('orderBy')($scope.tableData.data,["age","name"],!sortAgeFlag)
		sortAgeFlag = !sortAgeFlag
	}

	$scope.searchName = function () {
		var searchName = $('#searchName').val();
		$http.post($scope.dataUrl)
			.success(function (res) {
				$scope.tableData = res;
				$scope.tableData.data = $filter('filter')($scope.tableData.data,{"name":searchName})
				$scope.init();
				$scope.focus();
			});
	}

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
			for(var i = 0;i<$scope.tableData.data.length;i++){
				$scope.checked.push(i);
			}
		}else{
			$scope.checked = []
		}
	}
	$scope.print = function(){
		$scope.printData = [];
		for(var i=0;i<$scope.checked.length;i++){
			$scope.printData.push($scope.tableData.data[$scope.checked[i]]);
		}
		console.log($scope.printData)
	}


	$scope.pageRows = Math.floor(
		($(window).height() - $("header").height() - $("section h3").height() - $("section tr").eq(0).height() - 150)
		/ $("section tr").eq(0).height());

	$scope.init = function(){
		$scope.pageIndex = 1;
		$scope.tableData.pageIndex = $scope.pageIndex;
		$scope.tableData.pageRows = $scope.pageRows
		$scope.pageTotal = Math.ceil($scope.tableData.data.length / $scope.pageRows);
	}
	$scope.focus = function(){
		$scope.$watch('pageIndex',function(){
			$scope.tableData.pageIndex = $scope.pageIndex;
		})
	}

}]);



