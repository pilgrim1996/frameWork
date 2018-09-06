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

            $scope.homePage = function () {
                $scope.pageIndex = 1;
            }
            $scope.prePage = function () {
                if ($scope.pageIndex > 1) {
                    $scope.pageIndex--;
                }
            }

            $scope.nextPage = function () {
                if ($scope.pageIndex < $scope.pageTotal) {
                    $scope.pageIndex++;
                }
            }
            $scope.endPage = function () {
                $scope.pageIndex = $scope.pageTotal;
            }
            $scope.jump = function () {
                var value = parseInt($("#keyValue").val());
                if (value < 1) {
                    $scope.homePage();
                } else if (value > $scope.pageTotal) {
                    $scope.endPage();
                } else {
                    $scope.pageIndex = value;
                }
            }
            $scope.keyJump = function (event) {
                var keyCode = window.event ? event.keyCode : event.which;
                if (keyCode == 13) {
                    $scope.jump();
                }
            }
        },
    }
})