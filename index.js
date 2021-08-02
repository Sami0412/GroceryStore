const employees = [
{name: "Sami", age: 31},
 {name: "Paddy", age: 28},
 {name: "Ehsan", age: 17}, 
 {name: "Robin", age: 22},
 {name: "Charli", age: 16}
]


function EligibleEmployeeList(requiredAge) {
	const filteredList = [];
	for(let i = 0; i < employees.length; i++){
		if (employees[i].age >= requiredAge) {
			filteredList.push(employees[i]);
		}
	}
	let alphabetisedList = filteredList.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0));
	
	//console.log(alphabetisedList);

	return alphabetisedList;
	//return employees.filter(e => e.age >= requiredAge)
  }

  EligibleEmployeeList(18);
  module.exports = {EligibleEmployeeList};