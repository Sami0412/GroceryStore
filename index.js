function employeesOverEighteen(employees) {
	return employees.filter(employee => employee.age >= 18);
};

function alphabetisedEmployees(employees) {
	return employees.slice().sort((a, b) => a.name.localeCompare(b.name));
}

function capitalisedEmployees(employees) {
	return employees.map(employee => ({name : employee.name.toUpperCase(), age : employee.age}));
}

function descendingAlphabetisedEmployees(employees) {
	return employees.sort((a, b) => b.name.localeCompare(a.name));
}


module.exports = { employeesOverEighteen, alphabetisedEmployees, capitalisedEmployees, descendingAlphabetisedEmployees };