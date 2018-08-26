# loadingExternalJSONData
## How to Run: 
To Run this example you need to run it on a server. To run it locally I am using the [Live Server VSC extension](https://ritwickdey.github.io/vscode-live-server/). Once installed just right-click on the index.html file and select ``` Open with Live Server ``` option. I used Chrome to see the page. 

---
## Contents
In this example I am using AJAX calls to print `XMLHttpRequest Object Properties` to the console and also to print the external JSON file onto the console as a JavaScript Object.

---
## What I learned: 
- I learned how to make an AJAX call and set it up so that it processes the JSON object only when the return status was 200.
- I learned how to make an AJAX call and set it up so that it processes the JSON object only when the return status was 200.
- I learned about the different ``` XMLHttpRequest Object Properties ``` such as: 
    - `onreadystatechange` - Defines a function to be called when the readyState property changes
    - `readyState` - Holds the status of the XMLHttpRequest. 1 - 4, with 4 meaning finshed.
    - `responseText` - Returns the response data as a string
    - `status` - Returns the status-number of a request. 200 for `OK`, 404 for `Not Found`, etc...
- I learned that to make an AJAX call you need to:
    - create an `new XMLHttpRequest()` object first
    - Then open the asynchronous connection, by setting the 3rd parameter in the `open(HTTPRequestMethod, urlToJSONData, WetherCallBeAsynchronous)` method to true.
    - Then specifying what response type you will accept, `text` in this case since JSON will come in String form.
    - Then you specify the `onload` function. Where the actual code will run.
    - And finally you call the `send()` method.
- I learned that there was XMLHttpRequest 1 & 2, in 1 you use `onreadystatechange` to load the function in 2 you use `onload` to load the function. 

--- 
## Reference Links:
- [https://www.w3schools.com/js/js_json_objects.asp](https://www.w3schools.com/js/js_json_objects.asp)

- [AJAX - Send a Request To a Server](https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp)

- [XMLHttpRequest Object Properties](https://www.w3schools.com/xml/ajax_xmlhttprequest_create.asp)

- [HTTP Status Messages](https://www.w3schools.com/tags/ref_httpmessages.asp)

- [Can one replace xhr.onreadystatechange with xhr.onload for AJAX calls?](https://stackoverflow.com/questions/14946291/can-one-replace-xhr-onreadystatechange-with-xhr-onload-for-ajax-calls)

- [Why do we write onload() function before we write send() in XMLHttpRequest?](https://stackoverflow.com/questions/45346547/why-do-we-write-onload-function-before-we-write-send-in-xmlhttprequest)