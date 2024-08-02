//JavaScript Object//
//Simple object
//Example 1

//Create an object
const person = {
    Name: "John",
    age: 30,
    Gender: "male",
    Skills: "JavaScript",
    City: "New York"
}

console.log(person); //object display backend browser
document.getElementById('demo').innerHTML = person; //display result [object Object]

//...................................
//Object display properties
//Example 2
//Create an object
const data = {
    Name: "John",
    lastName: "Doe",
    age: 40,
    City: "England"
}

console.log(data); //result display backend browser
document.getElementById('id').innerHTML = data.Name + " , " + data.lastName + " , " + data.age + " , " + data.City; //Object Properties


//Example 3
//Create an object
//..Object display properties
// Create an Object
const sayname = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Build a Text
  let text = "";
  for (let x in sayname) {
    text += sayname[x] + " ";
  };
  
  // Display the Text
  console.log(sayname);
  document.getElementById("log").innerHTML = text;