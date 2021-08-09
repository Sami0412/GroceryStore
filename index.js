function employeesOverEighteen(employees) {
	overEighteen = employees.filter(employee => employee.age >= 18);
	return overEighteen;
};

function alphabetisedEmployees(employees) {
	alphabetisedEmployeeList = employees.sort((a, b) => a.name.localeCompare(b.name));
	return alphabetisedEmployeeList;
}

function capitalisedEmployees(employees) {
	capitalisedEmployeeList = employees.map(employee => ({name : employee.name.toUpperCase(), age : employee.age}));
	return capitalisedEmployeeList;
}

function descendingAlphabetisedEmployees(employees) {
	reverseAlphabetisedEmployeeList = employees.sort((a, b) => b.name.localeCompare(a.name));
	return reverseAlphabetisedEmployeeList;
}


module.exports = { employeesOverEighteen, alphabetisedEmployees, capitalisedEmployees, descendingAlphabetisedEmployees };