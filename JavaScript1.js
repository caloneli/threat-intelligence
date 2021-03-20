

var input ;

let username = '9c41c813-28ab-4983-8b41-b7952d47294f';
let password = 'ecca6627-8b67-4f0f-9e29-a1349bd54aea';

let headers = new Headers();

//headers.append('Content-Type', 'text/json');
headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));






function pretraziIP() {
    var x = document.getElementById("Text1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function pretraziFile() {
    var x = document.getElementById("File1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function pretraziDomain() {
    var x = document.getElementById("Domain1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function pretraziHash() {
    var x = document.getElementById("Hash1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function Search(){  
   // input =select('#Text1');
   // var api = 'https://exchange.xforce.ibmcloud.com/api/ipr/'
   // var url = api + input.value ;
   //fetch(url, {method:'GET', 
     fetch( 'https://exchange.xforce.ibmcloud.com/api/ipr/178.220.106.135', {method : 'GET',
        headers: headers,
       })
  .then(response => response.json())
  .then(data => console.log(data));
}

function myFunction() {
    document.getElementById("demo").style.color = "red";
}

