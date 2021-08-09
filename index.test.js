const { employeesOverEighteen, alphabetisedEmployees, capitalisedEmployees, descendingAlphabetisedEmployees } = require('./index');

const employees = [
  {name: "Sami", age: 31},
   {name: "Paddy", age: 28},
   {name: "Ehsan", age: 17}, 
   {name: "Robin", age: 22},
   {name: "Charli", age: 16}
];

test('returns an array', () => {
  expect(typeof employeesOverEighteen(employees)).toEqual("object");
});

test('returns an array containing an object', () => {
	expect(typeof employeesOverEighteen(employees)[0]).toEqual("object");
});

test('returns an array containing only employees who are over 18', () => {
	expect(employeesOverEighteen(employees)).toEqual([
    { name: 'Sami', age: 31 },
    { name: 'Paddy', age: 28 },
    { name: 'Robin', age: 22 }])
});

test('returns alphabetised list of employees', () => {
  expect(alphabetisedEmployees(employees)).toEqual([
    {name: "Charli", age: 16},
    {name: "Ehsan", age: 17},
    {name: "Paddy", age: 28},
    {name: "Robin", age: 22},
    {name: "Sami", age: 31}])
});

test('returns capitalised list of employees', () => {
  expect(capitalisedEmployees(employees)).toEqual([
    {name: "SAMI", age: 31},
     {name: "PADDY", age: 28},
     {name: "EHSAN", age: 17}, 
     {name: "ROBIN", age: 22},
     {name: "CHARLI", age: 16}
  ])
});

test('returns descending alphabetised list of employees', () => {
  expect(descendingAlphabetisedEmployees(employees)).toEqual([
  {name: "Sami", age: 31},
  {name: "Robin", age: 22},
  {name: "Paddy", age: 28},
  {name: "Ehsan", age: 17},
  {name: "Charli", age: 16}])
});



