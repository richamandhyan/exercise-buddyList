buddyListApp.factory('buddyListService', [function () {
  var factory = {};

  factory.getContacts = function () {
    return contactList;
  }

  // Mock data
  var contactList = [
  {
    "id": 0,
    "name": 'John Doe',
	"username":'Johnny',
	"status": 'Available',
    "email": 'JohnDoe@yahoomail.com',
    "dob": 'January 1,1980',
    "sign": 'March 14,2016',
    "notes": 'Love reading,writing and sketching'
  },
  {
    "id": 1,
    "name": 'Jane Doe',
	"username":'Jenny',
	"status": 'Busy',
    "email": 'Jane_Doe@gmail.com',
    "dob": 'February 2,1985',
   "sign": 'March 13,2016',
    "notes": 'Reluctant to pay the price of the hour.'
  },
  {
    "id": 2,
    "name": 'Ray Romano',
	"username":'Raymond',
	"status": 'Idle',
    "email": 'ray@elr.com',
     "dob": 'March 3,1990',
    "sign": 'March 12,2016',
    "notes": 'In love with my wife Debrah!'
  },
  {
    "id": 3,
    "name": 'Jack Doe',
	"username":'JackD',
	"status": 'Offline',
    "email": 'jdoe@gmail.com',
      "dob": 'April 4,1995',
   "sign": 'March 11,2016',
    "notes": 'Knows nothing about nothing.Do You?'
  },
  {
    "id": 4,
    "name": 'James Doe',
	"username":'JaD',
	"status": 'Available',
    "email": 'James.Doe@gmail.com',
      "dob": 'May 5,2000',
  "sign": 'March 10,2016',
    "notes": 'Has a list of names under perjury.'
  },
  {
    "id": 5,
    "name": 'Jen Doe',
	"username":'Jennifer',
	"status": 'Busy',
    "email": 'jennifer@gmail.com',
     "dob": 'June 6,2005',
   "sign": 'March 9,2016',
    "notes": 'Loves Shopping.'
  },
  {
    "id": 6,
    "name": 'Stephanie Joe',
	"username":'Stephanie',
	"status": 'Idle',
    "email": 'steffie@gmail.com',
     "dob": 'July 7,2010',
   "sign": 'March 8,2016',
    "notes": 'Currently drunk on love.'
  },
  {
    "id": 7,
    "name": 'Victoria Doe',
	  "username":'iamthevic',
	"status": 'Offline',
    "email": 'iamthevic@fmail.com',
     "dob": 'August 8,1981',
   "sign": 'March 7,2016',
    "notes": 'Nobody expects the unexpected.'
  },
  {
    "id": 8,
    "name": 'Dean Winchester',
	  "username":'Deano',
	"status": 'Available',
    "email": 'deanW@supernatural.com',
     "dob": 'September 9,1984',
    "sign": 'March 6,2016',
    "notes": 'DoubleCheeseburger? Beer... Old Fashioned!'
  },
  {
    "id": 9,
    "name": 'Sam Winchester',
	  "username":'Moose',
	"status": 'Busy',
    "email": 'sam.winchester@supernatural.com',
     "dob": 'October 10,1988',
   "sign": 'March 5,2016',
    "notes": 'Lucifer was in me.'
  },
  {
    "id": 10,
    "name": 'Henry Winchester',
	"username":'HenryW',
	"status": 'Idle',
    "email": 'menoflettersofficial@supernatural.com',
      "dob": 'November 11,1989',
    "sign": 'March 4,2016',
    "notes": 'No demons in the door.'
  }
  	];
  
  return factory;
}]);