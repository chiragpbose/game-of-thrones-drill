//const { houses } = require("./data");
let got = require("./data.js");

function countAllPeople() {
	// your code goes here
	let houses = got.houses;
	let noOfPeople = houses.reduce((sum, house) => {
		sum += house.people.length;
		return sum;
	}, 0);
	//console.log(noOfPeople);
	return noOfPeople;
}
function peopleByHouses() {
	let houses = got.houses;
	// your code goes here

	//let outputObj={};
	let outputObj = houses.reduce((obj, house) => {
		let name = house.name;
		obj[name] = house.people.length;
		return obj;
	}, {});

	let arr = Object.entries(outputObj);
	arr.sort();

	return Object.fromEntries(arr);
}

function everyone() {
	// your code goes here
	let houses = got.houses;

	let outputArrOfNames = houses.reduce((arr, house) => {
		let people = house.people;
		people.forEach((person) => {
			arr.push(person.name);
		});
		return arr;
	}, []);
	return outputArrOfNames;
}

function nameWithS() {
	// your code goes here
	let namesWithS = [];
	everyone().forEach((name) => {
		if (name.split("").includes("s") || name.split("").includes("S")) {
			namesWithS.push(name);
		}
	});
	return namesWithS;
}

function nameWithA() {
	// your code goes here
	let namesWithA = [];
	everyone().forEach((name) => {
		if (name.split("").includes("a") || name.split("").includes("A")) {
			namesWithA.push(name);
		}
	});
	return namesWithA;
}

function surnameWithS() {
	// your code goes here
	let surnamesStartingWithS = [];
	everyone().forEach((name) => {
		if (
			name.split(" ")[1].charAt(0) === "s" ||
			name.split(" ")[1].charAt(0) === "S"
		) {
			surnamesStartingWithS.push(name);
		}
	});
	return surnamesStartingWithS;
}

function surnameWithA() {
	// your code goes here
	let surnamesStartingWithA = [];
	everyone().forEach((name) => {
		if (
			name.split(" ")[1].charAt(0) === "a" ||
			name.split(" ")[1].charAt(0) === "A"
		) {
			surnamesStartingWithA.push(name);
		}
	});
	return surnamesStartingWithA;
}

function peopleNameOfAllHouses() {
	// your code goes here
	let houses = got.houses;
	let outputObj = {};
	houses.forEach((house) => {
		let houseName = house.name;
		outputObj[houseName] = [];
		house.people.forEach((person) => {
			return outputObj[houseName].push(person.name);
		});
	});
	return outputObj;
}

// Testing your result after writing your function
//console.log(countAllPeople(got));
// Output should be 33

//console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

//console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

//console.log(nameWithS(), "with s");
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

//console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

//console.log(surnameWithS(), "surname with s");
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

//console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
