// JavaScript Document
let xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json', true);
xhr.responseType = 'text';

//This is only for visual explanation and not necessary
xhr.onreadystatechange = function() { 
    console.log(xhr.readyState);
    console.log(xhr.status);
    console.log(xhr.statusText);
}// End Function


// sucessfully loaded a JSON Object usign AJAX
xhr.onload = function() {
    if(xhr.status===200){
        var myStuff = JSON.parse(xhr.responseText);
        console.log(myStuff);
    }
} // end onload function

xhr.send();
