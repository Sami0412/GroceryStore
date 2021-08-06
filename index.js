
//separate functions

// function EligibleEmployeeList(requiredAge, employees) {
// 	const filteredList = [];
// 	for(let i = 0; i < employees.length; i++){
// 		if (employees[i].age >= requiredAge) {
// 			filteredList.push(employees[i]);
// 		}
// 	}
// 	let alphabetisedList = filteredList.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0));
	
// 	alphabetisedList.forEach(e => e.name = e.name.toUpperCase());

// 	return alphabetisedList;
//   }


function employeesOverEighteen(employees) {
	overEighteen = employees.filter(employee => employee.age >= 18);
	return overEighteen;
};

function alphabetisedEmployees(employees) {
	alphabetisedEmployeeList = employees.sort((a, b) => a.name.localeCompare(b.name));
	return alphabetisedEmployeeList;
}

function capitalisedEmployees(employees) {
	return employees.forEach(employee => employee.name = employee.name.toUpperCase());
}

function descendingAlphabetisedEmployees(employees) {
	reverseAlphabetisedEmployeeList = employees.sort((a, b) => b.name.localeCompare(a.name));
	return reverseAlphabetisedEmployeeList;
}

module.exports = { employeesOverEighteen, alphabetisedEmployees, capitalisedEmployees, descendingAlphabetisedEmployees };