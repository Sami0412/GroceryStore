const {EligibleEmployeeList} = require('./index');

//pass employess into tests instead of function
const employees = [
  {name: "Sami", age: 31},
   {name: "Paddy", age: 28},
   {name: "Ehsan", age: 17}, 
   {name: "Robin", age: 22},
   {name: "Charli", age: 16}
  ];

test('returns an array', () => {
  expect(typeof EligibleEmployeeList(18, employees)).toEqual("object");
});

test('returns an array containing an object', () => {
	expect(typeof EligibleEmployeeList(18, employees)[0]).toEqual("object");
  });

test('returns an array containing employees of the correct age', () => {
	const employeesList = EligibleEmployeeList(18, employees);
	employeesList.forEach(e => expect(e.age).toBeGreaterThanOrEqual(18));
  });

test('returns alphabetised list of employees over 18', () => {
  //const employees = EligibleEmployeeList(18);
  expect(EligibleEmployeeList(18, employees)).toEqual([
  { name: 'PADDY', age: 28 },
  { name: 'ROBIN', age: 22 },
  { name: 'SAMI', age: 31 }])
  });

test('returns capitalised list of employees over 18', () => {
  const employeesList = EligibleEmployeeList(18, employees); //array of objects
  function isUpper(employeesList) {
    return employeesList.map(e => e.name.toUpperCase() === e.name);
  }
  isUpper(employeesList).forEach(e => expect(e).toBe(true));
});

test('employees sorted in descending order', () => {
  const employeesList = EligibleEmployeeList(18, employees);

  let alphabetisedList = [
     {name: "PADDY", age: 28},
     {name: "ROBIN", age: 22},
     {name: "SAMI", age: 31}
    ];

  expect(employeesList).toEqual(alphabetisedList);
});