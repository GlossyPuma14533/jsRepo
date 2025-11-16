//   JavaScript Object
let employee = {
    firstName: "Jane",
    lastName: "Smith",
    birthDate: new Date("July 26, 2005"),
    numYearsEmployment: 7,
    department: "Engineering",
    title: "CTO",
    isActive: true,
    salary: 100000,
};


// Convert to JSON String
let jsonValue = JSON.stringify(employee);
console.log(jsonValue);
jsonValue = JSON.stringify(employee, null, 2);
console.log(jsonValue);

// Convert Value Back to Object
let newEmployee = JSON.parse(jsonValue);
console.log(newEmployee);

// Writing JSON Directly
let jsonString = `{
    "firstName": "Elenor",
    "lastName": "Wayne"
}`;
let obj = JSON.parse(jsonString);
console.log(obj);

// Improperply formatted JSON
let notJSON = "hello";
let newObj = JSON.parse(notJSON);