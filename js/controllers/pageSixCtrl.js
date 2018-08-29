/**
 * Created by SIE-PC on 2018/8/27.
 */
var appSix = angular.module('appSix',[]);
appSix.controller('pageSixCtrl', ['$scope',function($scope){
    $scope.legend = ["beijing", "shanghai",'guangzhou'];
    $scope.item = ['Jan', 'Feb', 'Mar', 'Apr', 'Mar', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    $scope.data = [
        [-1, 1, 3, 7, 13, 16, 18, 16, 15, 9, 4, 2],	//Berlin
        [0, 1, 4, 7, 12, 15, 16, 15, 15, 10, 6, 5],	//London
        [4, 4, 5, 10, 16, 22, 26, 24, 20, 14, 9, 3],	//New York
    ];
}]);
appSix.directive('line', function() {
    return {
        scope: {
            id: "@",
            legend: "=",
            item: "=",
            data: "="
        },
        restrict: 'E',
        template: '<div style="height:500px;"></div>',
        replace: true,
        link: function ($scope, element, attrs, controller) {
            var option = {
                // 提示框，鼠标悬浮交互时的信息提示
                tooltip: {
                    show: true,
                    trigger: 'axis'
                },

                // 图例
                legend: {
                    data: $scope.legend
                },
                // 横轴坐标轴
                xAxis: [{
                    type: 'category',
                    data: $scope.item,
                    boundaryGap : false,
                }],
                // 纵轴坐标轴
                yAxis: [{
                    type: 'value'
                }],
                // 数据内容数组
                series: function () {
                    var serie = [];
                    for (var i = 0; i < $scope.legend.length; i++) {
                        var item = {
                            name: $scope.legend[i],
                            type: 'line',
                            data: $scope.data[i],
                            smooth: true
                        };
                        serie.push(item);
                    }''
                    return serie;
                }()
            };
            var myChart = echarts.init(document.getElementById($scope.id), 'macarons');
            myChart.setOption(option);
        }
    };
});

