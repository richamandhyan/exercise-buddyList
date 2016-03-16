//routing of pages depending on the end points.

buddyListApp.config(function ($routeProvider, $locationProvider){

	$routeProvider
		.when('/Home', {
		templateUrl: '/templates/default.html'
	})
		.when('/contact-info/:contact_index', {
		templateUrl: '/views/contacts-info.html',
		controller: 'contactInfoCtrl'
	})
		.when('/Add', {
		templateUrl: '/views/contacts-form.html',
		controller: 'addContactCtrl'
	})
		.when('/edit/:contact_index', {
		templateUrl: '/views/contacts-form.html',
		controller: 'editContactCtrl'
	})
		.otherwise({redirectTo: '/Home'});
})