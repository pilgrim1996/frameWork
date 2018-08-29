var appTwo = angular.module('appTwo', []);
appTwo.controller('pageTwoCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	$rootScope.test = "test";
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
	$scope.js = {};
	$http.get('././json/data.json')
		.success(function(res){
			$scope.js = res;
			var js = $scope.js;
			$scope.pageIndex = 1;
			$scope.pageRows = 3;
			/*$scope.pageRows = Math.floor(
			 ($(window).height()-$("footer").height())
			 /$("tr").eq(0).height());*/

			$scope.homePage = function(){
				$scope.pageIndex = 1;
			}
			$scope.prePage = function(){
				if ($scope.pageIndex>1) {
					$scope.pageIndex--;
				}
			}
			$scope.pageTotal = Math.ceil(js.data.length/$scope.pageRows);
			$scope.nextPage = function(){
				if ($scope.pageIndex<$scope.pageTotal) {
					$scope.pageIndex++;
				}

			}
			$scope.endPage = function(){
				$scope.pageIndex = $scope.pageTotal;
			}
			$scope.search = function(){
				var out = [];
				out = js.data;
				$scope.tableData = out.slice(($scope.pageIndex-1)*$scope.pageRows,$scope.pageIndex*$scope.pageRows);
			}

			$scope.$watch('pageIndex', function(){
				$scope.checked = [];
				$scope.search();
				$scope.selectAll = false;
			});
			$scope.jump = function(){

				var value = parseInt($("#keyValue").val());
				if (value<1) {
					$scope.homePage();
				}else if (value>$scope.pageTotal) {
					$scope.endPage();
				}else{
					$scope.pageIndex = value;
				}
			}
			$scope.keyJump = function(event){
				var keyCode = window.event?event.keyCode:event.which;
				if (keyCode == 13) {
					$scope.jump();
				}
			}
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
		})

}]);

appTwo.directive('myPagination',function(){
	return{
		restrict:'EA',
		replace:true,
		template:'<footer>'+
			'<ul class="pagination" >'+
				'<li><button class="btn" ng-click="homePage()">首页</button></li>'+
				'<li>当前页：{{pageIndex}}</li>'+
				'<li><button class="btn" ng-click="prePage()">上一页</button></li>'+
				'<li>跳转：<input  type="text" id="keyValue" ng-keyup="keyJump($event)" /><button class="btn" ng-click="jump()">确认</button></li>'+
				'<li><button class="btn" ng-click="nextPage()">下一页</button></li>'+
				'<li>总页数：{{pageTotal}}</li>'+
				'<li><button class="btn" ng-click="endPage()">末页</button></li>'+
			'</ul>'+
   		'</footer>'
	}

})

