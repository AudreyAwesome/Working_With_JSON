# weatherAPIAppUsingJSON
## How to Run: 
To Run this example you need to run it on a server. To run it locally I am using the [Live Server VSC extension](https://ritwickdey.github.io/vscode-live-server/). Once installed just right-click on the index.html file and select ``` Open with Live Server ``` option. I used Chrome to see the page. 

---
## Contents
In this example I was supposed to use [Weather Underground free API](https://www.wunderground.com/weather/api), but they decided to eliminate the free API calls so I had to find a way to still be able to learn how to make API calls. So I included some of the code as you would have to use to call an actual API with an API key, except I have commented it out. Instead I am using loading a mock JSON for the weather conditions and forecast.

---
## What I learned: 
- I learned that you can first call the server to load the JSON and then you can call a function to load differenrt parts of the JSON depending on different user events, like clicking of a button.
- In this example I learned that for the onload event, I am actually passign a reference to the fnction that onload should execute when the page gets loaded an not to execute the function (with parenthesis) as soon as it reads it. 
    > `We don't use the parentheses in that code because we don't want the function to be called at the point where that code is encountered. Instead, we want to pass a reference to our function into the onload event and that event will call our function for us whenever the page loads.`
- I learned how to pass an API Key and a request parameter to the API call to make dynamic calls and get diffferent JSON values back. 

--- 
## Reference Links:
- [https://www.w3schools.com/js/js_json_objects.asp](https://www.w3schools.com/js/js_json_objects.asp)

- [AJAX - Send a Request To a Server](https://www.w3schools.com/xml/ajax_xmlhttprequest_send.asp)

- [XMLHttpRequest Object Properties](https://www.w3schools.com/xml/ajax_xmlhttprequest_create.asp)

- [HTTP Status Messages](https://www.w3schools.com/tags/ref_httpmessages.asp)

- [Can one replace xhr.onreadystatechange with xhr.onload for AJAX calls?](https://stackoverflow.com/questions/14946291/can-one-replace-xhr-onreadystatechange-with-xhr-onload-for-ajax-calls)

- [Why do we write onload() function before we write send() in XMLHttpRequest?](https://stackoverflow.com/questions/45346547/why-do-we-write-onload-function-before-we-write-send-in-xmlhttprequest)

- [Why do we call the functions without parentheses i.e. '()'?](https://teamtreehouse.com/community/why-do-we-call-the-functions-without-parentheses-ie)