function whoAmI(name, age){
	if (typeof name !== 'string' || age < 0 || typeof age !== 'number'){
	throw new Error("invalid input for whoAmI");
} else{
		console.log(`Hi, my name is ${name} and I'm ${age} years old`);
	}
	


function yearOfBirth(age){
	if (age < 0 || typeof age !== 'number') {
		throw new Error("Age must be a positive intiger");
	} else{
		const yearOfBirth = 2017-age;
		console.log(" I was born in " + yearOfBirth);

	}
	

}

try {
whoAmI('name',34);
yearOfBirth(34);
}
catch(err){
	console.log(err.message);

}