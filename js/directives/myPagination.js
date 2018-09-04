/**
 * Created by SIE-PC on 2018/8/31.
 */
app.directive('myPagination',function($http){
    return{
        restrict:'EA',
        scope:false,
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
        '</footer>',
        controller:function($scope,$http){
            $scope.dataUrl = $('table').attr('data-url');
            $http.get($scope.dataUrl)
                .success(function(res){
                    $scope.js = res;
                    $scope.pageRows = Math.floor(
                     ($(window).height()-$("header").height()-$("section h3").eq(1).height()-$("section tr").eq(0).height()-75)
                     /$("section tr").eq(0).height());

                    var js = $scope.js;
                    var sortAgeFlag = 0;
                    $scope.sortAge = function(){
                        console.log("in")
                        for(var i=0;i<js.data.length;i++) {
                            for(var j=0;j<js.data.length-1;j++){
                                if (js.data[j].age < js.data[j + 1].age) {
                                    var t = js.data[j];
                                    js.data[j] = js.data[j + 1];
                                    js.data[j + 1] = t;
                                }
                            }
                        }
                        if(sortAgeFlag==0){
                            $scope.search();
                            sortAgeFlag = 1;
                        }else{
                            js.data.reverse();
                            $scope.search();
                            sortAgeFlag = 0;
                        }

                    }
                    $scope.searchName = function () {
                        if($("#searchName").val()!=" "){
                            console.log("in")
                            for(var i=0;i<js.data.length;i++){
                                if(js.data[i].name == $("#searchName").val()){
                                    $scope.tableData = [];
                                    $scope.tableData.push(js.data[i]);
                                    console.log( $scope.tableData)
                                    $scope.pageTotal = 1;
                                    break;
                                }
                            }
                        }
                    }
                    $scope.pageIndex = 1;
                   /* $scope.pageRows = 3;*/
                    $scope.searchAll = function(){

                        console.log(js)
                        $scope.pageTotal = Math.ceil(js.data.length/$scope.pageRows);
                        $scope.search();
                    }
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

                })
        },
    }
})