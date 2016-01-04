var phonecatControllers = angular.module('phonecatControllers', []);
phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http){
	//the url is relative to our index.html file
	$http.get('phones/phones.json').success(function(data){		
		$scope.phones = data;
	});
	/*
	$scope.phones = [
		 {'name': 'Nexus S', 'snippet': 'Fast just got faster with Nexus S.', 'age': 4},
		 {'name': 'Motorola XOOM™ with Wi-Fi', 'snippet': 'The Next, Next Generation tablet.', 'age': 2},
		 {'name': 'MOTOROLA XOOM™', 'snippet': 'The Next, Next Generation tablet.', 'age': 3},
		 {'name': 'Terrence Device', 'snippet': 'The Best Next Generation Device.', 'age': 1}
	];
	*/
	$scope.staticname = 'Terrence First Angular World~';
	$scope.orderProp = 'age';
	//$scope.query = 'Terrence';
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
	$http.get('phones/' + $routeParams.RPphoneId + '.json').success(function(data){
		$scope.phone = data;
	});
	
	$scope.phoneId = $routeParams.RPphoneId;
}]);