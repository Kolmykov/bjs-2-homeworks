function compareArrays(arr1, arr2) {
	return arr1.every((item, index) => arr1.length === arr2.length && item === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
	let result = users.filter(user => user.gender === gender).reduce((averAge, userAge, index, array) => averAge + userAge.age / array.length, 0);
	return result
}