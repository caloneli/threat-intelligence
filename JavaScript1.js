



let username = '9c41c813-28ab-4983-8b41-b7952d47294f';
let password = 'ecca6627-8b67-4f0f-9e29-a1349bd54aea';

let headers = new Headers();

//headers.append('Content-Type', 'text/json');
headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

var ip = document.getElementById("Text1");
var file =document.getElementById("File1");
var domain = document.getElementById("Domanin1");
var hash = document.getElementById("Hash1");
ip.style.display="none";
file.style.display="none";
domain.style.display="none";
hash.style.display="none";

function pretraziIP() {
    
    if (ip.style.display == "none") {
        ip.style.display = "block";
    } else {
        ip.style.display = "none";
    }
}

function pretraziFile() {
    
    if (file.style.display == "none") {
        file.style.display = "block";
    } else {
        file.style.display = "none";
    }
}
function pretraziDomain() {
    
    if (domain.style.display == "none") {
        domain.style.display = "block";
    } else {
        domain.style.display = "none";
    }
}
function pretraziHash() {
    
    if (hash.style.display == "none") {
        hash.style.display = "block";
    } else {
        hash.style.display = "none";
    }
}
function Search(){  


    var inputIP = document.getElementById("Text1").value;
    var api = 'https://exchange.xforce.ibmcloud.com/api/ipr/'
    var url = api + inputIP;
   fetch(url, {method:'GET', 
        headers: headers,
       })
  .then(response => response.json())
  .then(data => console.log(data));
}

function myFunction() {
    document.getElementById("demo").style.color = "red";
}

