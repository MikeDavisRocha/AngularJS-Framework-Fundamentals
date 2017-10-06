app.controller('menuController', [
    '$scope', function($scope) {
        $scope.model = {title: 'Our Menu'};

        $scope.$watch('model.mainDish', function(newValue, oldValue) {
            if (newValue === 'BBQ Chicken Pizza') {
                alert('You have selected the BBQ Chicken Pizza!');
            }
        });

        $scope.changeMainDish = function(dishName, dishPrice) {
            $scope.model.mainDish = {name: dishName, price: dishPrice };
        }
    }
]);