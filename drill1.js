function whoAmi(name, age){
	console.log(`Hi, my name is ${name} and I'm ${age} years old`);
}



function yearOfBirth(age){
	try{
		if (age < 0){
			throw new Error("Age can not be negative");
		} else {
			const yearOfBirth = 2017-age;
			console.log(" I was born in " + yearOfBirth);
		}
	}
	catch(err){
		console.log(err.message);

	}
}


whoAmi('name','34');
yearOfBirth(34);