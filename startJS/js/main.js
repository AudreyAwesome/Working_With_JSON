//Loading JSON Data from a javascript file onto an HTML page

// JavaScript Document
let testingJSONtoConsole = '{"favColor":"Orange","favSeason":"Fall "}';  
let singleLevelJSONData = '{"first":"Paul", "last":"Cheney" , "city":"Salem"}';
let doubleLevelJSONData = '{"Jane":{"age":"29","degree":"MFA"},"Jim":{"age":"49","degree":"MA"}}';
let tripleLevelJSONData = '{"Jane":{"age":"29","degree":{"AAS":"VMI","BA":"UVA"}},"Jim":{"age":"49","degree":"MA"}}';



// String to JSON object through parse method
let myObject = JSON.parse(testingJSONtoConsole);
console.log(myObject);
// JSON object to String through stringify method
let myString = JSON.stringify(myObject);
console.log(myString);

//Displaying single level JSON on HTML Page
myObject = JSON.parse(singleLevelJSONData);
console.log(myObject);
document.getElementById('lastName').innerHTML = myObject.last;
document.getElementById('firstName').innerHTML = myObject.first;
document.getElementById('city').innerHTML = myObject.city;

//Displaying double level JSON on HTML Page
let doubleLevelJSONObj = JSON.parse(doubleLevelJSONData);
console.log(doubleLevelJSONObj);
for (property in doubleLevelJSONObj){
    document.getElementById("placeholder").innerHTML += "<p>" + property + ": " + doubleLevelJSONObj[property] + "</p>";
    for (secondProperty in doubleLevelJSONObj[property]){
        document.getElementById("placeholder").innerHTML += "<p> ---- " + secondProperty + ": " + doubleLevelJSONObj[property][secondProperty] + "</p>";
    }
}


//Displaying double level JSON on HTML Page
let tripleLevelJSONObj = JSON.parse(tripleLevelJSONData);
console.log(tripleLevelJSONObj);
for (property in tripleLevelJSONObj){
    document.getElementById("placeholder2").innerHTML += "<p>" + property + ": " + tripleLevelJSONObj[property] + "</p>";
    for (secondProperty in tripleLevelJSONObj[property]){
        document.getElementById("placeholder2").innerHTML += "<p> ---- " + secondProperty + ": " + tripleLevelJSONObj[property][secondProperty] + "</p>";
        for (thirdProperty in tripleLevelJSONObj[property][secondProperty]){
            document.getElementById("placeholder2").innerHTML += "<p> ---- ---- " + secondProperty + ": " + tripleLevelJSONObj[property][secondProperty][thirdProperty] + "</p>";
        }
    }
}


