
let username = '9c41c813-28ab-4983-8b41-b7952d47294f';
let password = 'ecca6627-8b67-4f0f-9e29-a1349bd54aea';
let APIkeyKineskiSajt = '470e89d7820e497d9691d60c04526d2ec8a23239c64943ddb75ac7df8a304742';

let headers = new Headers();

//headers.append('Content-Type', 'text/json');
headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));


var ip = document.getElementById("Text1");
var file =document.getElementById("File1");
var domain = document.getElementById("Domain1");
var hash = document.getElementById("Hash1");
ip.style.display="none";
file.style.display="none";
domain.style.display="none";
hash.style.display="none";

function pretraziIP() {
    
    
    file.style.display="none";
    domain.style.display="none";
    hash.style.display="none";
    if (ip.style.display == "none") {
        ip.style.display = "block";
    } else {
        ip.style.display = "none";
    }
}

function pretraziFile() {
    ip.style.display="none";   
    domain.style.display="none";
    hash.style.display="none";
    if (file.style.display == "none") {
        file.style.display = "block";
    } else {
        file.style.display = "none";
    }
}
function pretraziDomain() {
    ip.style.display="none";
    file.style.display="none";
    hash.style.display="none";
    if (domain.style.display == "none") {
        domain.style.display = "block";
    } else {
        domain.style.display = "none";
    }
}
function pretraziHash() {

    ip.style.display="none";
    file.style.display="none";
    domain.style.display="none";

    if (hash.style.display == "none") {
        hash.style.display = "block";
    } else {
        hash.style.display = "none";
    }
}
function Search(){  

    var Input ;

    // Text Input 

    if (document.getElementById("Text1").value != ""){
     Input = document.getElementById("Text1").value;
  
    var api = 'https://exchange.xforce.ibmcloud.com/api/ipr/'
    var url = api + Input;
    fetch(url, {method:'GET', 
        headers: headers,
       })
    .then(response => response.json())
    .then(data => {
        console.log(data.score)
        document.querySelector("#rezultat").innerText = "The TI score for this IP adress :" + Input + " is "  + data.score;
    });
    }
     //document.getElementById("rezultat").innerHTML = "Requested results for : " + Input ;

    // FILE INPUT 

    if (document.getElementById("File1").value != ""){
        Input = document.getElementById("File1").value;
     
       var api = 'https://exchange.xforce.ibmcloud.com/api/ipr/'
       var url = api + Input;
       fetch(url, {method:'GET', 
           headers: headers,
          })
       .then(response => response.json())
       .then(data => console.log(data));
       }


    // DOMAIN INPUT

    if (document.getElementById("Domain1").value != "")
    {
        Input = document.getElementById("Domain1").value;
     
       var api = 'https://api.xforce.ibmcloud.com/url/'
       var url = api + Input;
       fetch(url, {method:'GET', 
           headers: headers,
          })
       .then(response => response.json())
       .then(data => console.log(data));   
       document.getElementById("rezultat").innerHTML = "Requested results for : " + Input ; 
    }
    


    // HASH INPUT 

    if (document.getElementById("Hash1").value != ""){
        Input = document.getElementById("Hash1").value;
     
       var api = 'https://api.xforce.ibmcloud.com/malware/'
       var url = api + Input;
       fetch(url, {method:'GET', 
           headers: headers,
          })
       .then(response => response.json())
       .then(data => console.log(data));
       
       document.getElementById("rezultat").innerHTML = "Requested results for : " + Input ;
    }
       
}

function myFunction() {
    document.getElementById("demo").style.color = "red";
}