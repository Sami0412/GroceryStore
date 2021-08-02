const {EligibleEmployeeList} = require('./index');

test('returns an array', () => {
  expect(typeof EligibleEmployeeList(18)).toEqual("object");
});

test('returns an array containing an object', () => {
	expect(typeof EligibleEmployeeList(18)[0]).toEqual("object");
  });

test('returns an array containing employees of the correct age', () => {
	const employees = EligibleEmployeeList(18);
	employees.forEach(e => expect(e.age).toBeGreaterThanOrEqual(18));
  });

test('returns alphabetised list of employees over 18', () => {
  //const employees = EligibleEmployeeList(18);
  expect(EligibleEmployeeList(18)).toEqual([
  { name: 'Paddy', age: 28 },
  { name: 'Robin', age: 22 },
  { name: 'Sami', age: 31 }])
  });

test('returns capitalised list of employees over 18', () => {
  const employees = EligibleEmployeeList(18); //array of objects
  function isUpper(employees) {
    return employees.map(e => e.name.toUpperCase() === e.name);
  }
  console.log(isUpper(employees));
  isUpper(employees).forEach(e => expect(e).toBe(true));
});