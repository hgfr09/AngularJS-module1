(function () {
        'use strict';

        angular.module('LunchCheck', [])
                .controller('LunchCheckController', LunchCheckController);
        LunchCheckController.$inject = ['$scope'];

        //Controller
        function LunchCheckController($scope) {
                $scope.dishes = '';

                $scope.check = function () {
                        var check = checkList($scope.dishes);
                        $scope.displayMessage = display(check);
                };

                function checkList(str) {
                        if (str.trim() === '') {
                                return 0;
                        }
                        var list = str.trim().split(',');                       
                        for (var i = 0; i < list.length; i++) {                             
                                if (list[i].trim() === '') {
                                        list.splice(i, 1);
                                        i--;
                                }
                        }                     
                        if (list.length <= 3) {
                                return 1;
                        } else {
                                return 2;
                        }
                }

                function display(val) {
                        if (val === 0) {
                                $scope.style = 'text-danger';
                                $scope.formStyle = 'has-error';
                                return "Please enter data first!";
                        } else {
                                $scope.formStyle = 'has-success';
                                $scope.style = 'text-success';
                                if (val === 1) {
                                        return  "Enjoy!";
                                }
                                if (val === 2) {
                                        return "Too much!";
                                }

                        }
                }


        }



})();

