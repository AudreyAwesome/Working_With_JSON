# startJS
## How to Run: 
To Run, just open the index.html file in your favorite browser and open the console viewer in our browser as well. I used Chrome to test it. 

---
## Contents
In this example I print a JSON object, both in its String and Javascript Object states,  to the console.
Then I display a single level, a double level, and a third level nested JSON onto the webpage.

---
## What I learned: 
- When JSON is included in a JavaScript file, filed ending in ``` .js ```, the json needs to be surrounded with ' ' and it all needs to be in a single line, if you brake it into 2 lines, it will complain. 
- In an external file, ending in ``` .json ``` the JSON just needs to be surrounded with {} or [] - if its an array
- A JSON objects gets passed to the browser as a String
- To convert that String into a JavaScript object you need to use ``` JSON.parse(JSONString) ```
- To send a JSON back to another app or server you need to send it back as a String, to do this you use ``` JSON.stringify(JSONObject) ```
- A JSON object is composed of ``` {"property":"value", etc...} ```
- You can use a ``` for(x in myObj) ``` to loop through all the properties and values of a JSON object, to traverse nested properties see examples in my code.
--- 
## Reference Links:
- [https://www.w3schools.com/js/js_json_objects.asp](https://www.w3schools.com/js/js_json_objects.asp)



