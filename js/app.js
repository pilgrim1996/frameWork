/**
 * Created by SIE-PC on 2018/8/10.
 */
var app = angular.module("app",["ui.router","oc.lazyLoad","ngAnimate","ui.bootstrap"]);

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when("","page_one");
    $stateProvider
        .state("PageOne",{
            url:"/page_one",
            templateUrl:"templates/page_one.html",
            controller:"pageOneCtrl",

            resolve:{
                loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name:"appOne",
                        files:["js/controllers/pageOneCtrl.js"]
                        })
                }]
            }
        })
        .state("PageTwo",{
            url:"/page_two",
            templateUrl:"templates/page_two.html",
            controller:"pageTwoCtrl",
            resolve:{
                loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name:"appTwo",
                        files:["js/controllers/pageTwoCtrl.js"]
                    })
                }]
            }
        })
        /*.state("PageTwo.PageTwoDetail",{
            url:"/page_two_detail",
            templateUrl:"templates/page_two_detail.html",
            controller:"pageTwoCtrl",
            resolve:{
                loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name:"appTwo",
                        files:["js/controllers/pageTwoCtrl.js"]
                    })
                }]
            }
        })*/
        .state("PageTwoAddition",{
            url:"/page_two_addition",
            templateUrl:"templates/page_two_addition.html",
            controller:"pageTwoDetailCtrl",
            resolve:{
                loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name:"appTwoDetail",
                        files:["js/controllers/pageTwoDetailCtrl.js"]
                    })
                }]
            }
        })
        .state("PageTwoDetail",{
            url:"/page_two_detail?id",
            templateUrl:"templates/page_two_detail.html",
            controller:"pageTwoDetailCtrl",
            resolve:{
                loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name:"appTwoDetail",
                        files:["js/controllers/pageTwoDetailCtrl.js"]
                    })
                }]
            }
        })
        .state("PageThree",{
            url:"/page_three",
            templateUrl:"templates/page_three.html",
            controller:"pageThreeCtrl",
            resolve:{
                loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name:"appThree",
                        files:["js/controllers/pageThreeCtrl.js"]
                    })
                }]
            }
        })
        .state("PageFour",{
            url:"/page_four",
            templateUrl:"templates/page_four.html",
            controller:"pageFourCtrl",
            resolve:{
                loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){
                    return $ocLazyLoad.load({
                        name:"appFour",
                        files:["js/controllers/pageFourCtrl.js"]
                    })
                }]
            }
        })
        .state("PageFive",{
            url:"/page_five?bookTypeJson",

            resolve:{
                loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){
                    return $ocLazyLoad.load({
                        name:"appFive",
                        files:["js/controllers/pageFiveCtrl.js"]
                    })
                }]
            },
            views:{
                "":{
                    templateUrl:"templates/page_five.html",
                    controller:"pageFiveCtrl"
                },
                "header@PageFive":{
                    templateUrl: 'templates/page_five_header.html'
                },
                "footer@PageFive":{
                    templateUrl: 'templates/page_five_footer.html'
                }
            }



        })

})
app.constant("startTime", new Date().toLocaleString());
app.run(function($rootScope,startTime){
    $rootScope.LoginTime = startTime;
})
