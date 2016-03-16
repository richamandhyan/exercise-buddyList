// list of controllers

//Navigation controller
buddyListApp.controller('navCtrl', ['$scope',function ($scope) {
  $scope.nav = {
    	navItems: ['Home', 'Add'],
	  	selectedIndex: 0,
    	navClick: function ($index) {
				$scope.nav.selectedIndex = $index;
			}
  		};
}]);

//Main controller to view and remove contacts
buddyListApp.controller('homeCtrl', ['$scope','$window','$location','buddyListService',function ($scope, $window, $location, buddyListService){
  
	$scope.submit = function () {
		$location.path('/Add');
	};
	
	
	$scope.contacts = buddyListService.getContacts();

	$scope.removeContact = function (item) {
	  
	  var deleteUser = $window.confirm('Are you absolutely sure you want to delete?');  
	  
	  if(deleteUser){
    	var index = $scope.contacts.indexOf(item);
		  $scope.contacts.splice(index, 1);
		  $scope.removed = 'Contact successfully removed.';
	  		}  
	};		
}]);

//To get the information 
buddyListApp.controller('contactInfoCtrl', ['$scope','$routeParams', function ($scope, $routeParams){
  var index = $routeParams.contact_index;
  $scope.currentContact = $scope.contacts[index];
}]);


//To add the contacts
buddyListApp.controller('addContactCtrl', ['$scope','$location', function ($scope, $location) {
 
  $scope.path = $location.path();

  $scope.addContact = function () {
    var contact = $scope.currentContact;
    contact.id = $scope.contacts.length;
    $scope.contacts.push(contact);
  };

}])

//To make changes in the information
buddyListApp.controller('editContactCtrl',[ '$scope', '$routeParams', function ($scope, $routeParams){
  	$scope.index = $routeParams.contact_index;
	$scope.currentContact = $scope.contacts[$scope.index];
}]);




