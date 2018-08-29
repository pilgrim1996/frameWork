/**
 * Created by SIE-PC on 2018/8/15.
 */
var appFour = angular.module("appFour",['ui.bootstrap',"ngAnimate"]);
appFour.factory("myFirstService",function($http){
    var service = {};
    service.name = "zhang san";
    service.printA  = function(message){
        return "print A "+message;
    }
    return service;
})
appFour.controller('pageFourCtrl',['$scope','myFirstService', function($scope,$rootScope,$http,myFirstService){
    $scope.message1 = "@ test";
    $scope.message2 = "= test";
    $scope.times = 0;
    $scope.reset = function(){
        console.log("重置次数"+(++$scope.times));
        $scope.message1 = "@ test";
        $scope.message2 = "= test";
    }
    $scope.userInfo = {
        userName : "",
        userPassword : ""
    }
    $scope.save = function () {
        console.log($scope.userInfo)
    }
    $scope.oneAtATime = true;
    $scope.groups = [{
        title: 'Dynamic Group Header - 1',
        content: 'Dynamic Group Body - 1'
    }, {
        title: 'Dynamic Group Header - 2',
        content: 'Dynamic Group Body - 2'
    }];
    $scope.serviceInput = "输出undefined";

    $scope.doing = function(){
        console.log( myFirstService.name)
    }
    $scope.activities =
    {data:
        [{ id: 1, name: "Writing code" },
            { id: 2,name: "Testing code" },
            { id: 3,name: "Fixing bugs" },
            { id: 4,name: "Dancing" }]
    };
    $scope.engineer = {
        currentActivity: $scope.activities.data[0]
    };


}])
appFour.directive("restrictTest",function(){
    return{
        restrict:"AEMC",
        transclude:true,
        template:"<p>restrict测试 <span ng-transclude></span></p>"
    }
})
appFour.directive("lotion",function(){
    return{

        restrict:"AE",
        scope:{},
        controller:function($scope){
            $scope.level = [];
            this.addHP = function(){
                $scope.level.push("HP")
            }
            this.addMP = function(){
                $scope.level.push("MP")
            }
            this.addEXP = function () {
                $scope.level.push("EXP")
            }
            this.addCE = function(){
                $scope.level.push("CE")
            }
        },
        link:function(scope,element,attrs){
            element.addClass("btn btn-primary");
            element.bind("mouseover",function(){
                console.log(scope.level)
            })
        }
    }
})
appFour.directive("hp",function(){
    return{
        require:'^lotion',
        link:function(scope,element,attrs,lotionCtrl){
                lotionCtrl.addHP()
        }
    }
})
appFour.directive("mp",function(){
    return{
        require:'^lotion',
        link:function(scope,element,attrs,lotionCtrl){
                lotionCtrl.addMP();
        }
    }
})
appFour.directive("ce",function(){
    return{
        require:'^lotion',
        link:function(scope,element,attrs,lotionCtrl){
            lotionCtrl.addCE();
        }
    }
})
appFour.directive("exp",function(){
    return{
        require:'^lotion',
        link:function(scope,element,attrs,lotionCtrl){
            lotionCtrl.addEXP();
        }
    }
})

appFour.directive('transmissionTest',function(){
    return{
        restrict:'AE',
        scope:
        {
            transmission:'@'
        },
        template:"<input type='text' class='input' ng-model='transmission'/>"
    }
})
appFour.directive('transmissionTest2',function(){
    return{
        restrict:'AE',
        scope:
        {
            transmission2:'='
        },
        template:"<input type='text' class='input' ng-model='transmission2'/>"
    }
})
appFour.directive('transmissionTest3',function(){
    return{
        restrict:'AE',
        scope:
        {
            transmission3:'&'
        },
        template:"<button class='btn btn-default' ng-click='transmission3()'>reset</button>"
    }
})


