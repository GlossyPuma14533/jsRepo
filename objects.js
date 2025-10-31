// Create an Object with an object literal (preferred)
let obj1 = {};

// Create an Object with a constructor
let obj2 = new Object();

// Populate properties on an object
obj1.firstName = "Eve";
obj1.lastName = "Mesa";
obj1.isActive = true;
obj1.startDate = new Date("February 12, 2022");
obj1.vacationDays = 12;
console.log(obj1);

// Populating an object on creation with object literal syntax
let obj3 = {
    firstName: "Eve",
    lastName: "Mesa",
    isActive: true,
    startDate: new Date("February 12,2022"),
    vacationDays: 12
};
console.log(obj3);

// Accessing properties from an object
console.log(`First Name: ${obj3.firstName}`);
console.log(`Last Name: ${obj3["lastName"]}`);

// Deleting properties from an object
delete obj3.firstName;
console.log(obj3);

// Accessing a property that doesnt exist
console.log(`Non-existent value: ${obj3.middleName}`);

// Objects are passed by reference not value
let obj4 = obj3;
obj4.lastName = "Smith";
console.log(`Last Name (obj3): ${obj3.lastName}`);
