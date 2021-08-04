
//separate functions

function EligibleEmployeeList(requiredAge, employees) {
	const filteredList = [];
	for(let i = 0; i < employees.length; i++){
		if (employees[i].age >= requiredAge) {
			filteredList.push(employees[i]);
		}
	}
	let alphabetisedList = filteredList.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0));
	
	alphabetisedList.forEach(e => e.name = e.name.toUpperCase());

	return alphabetisedList;
  }

  module.exports = {EligibleEmployeeList};