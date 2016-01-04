var phonecatApp = angular.module('phonecatApp', ['ngRoute', 'phonecatControllers', 'phonecatFilters']);

phonecatApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/phones', {
		templateUrl: 'partials/phone-list.html',
		controller: 'PhoneListCtrl'
	}).when('/phones/:RPphoneId', {
		templateUrl: 'partials/phone-detail.html',
		controller: 'PhoneDetailCtrl'
	}).otherwise({
		redirectTo: '/phones'
	});
}]);