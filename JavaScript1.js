function pretraziIP() {
    var x = document.getElementById("kutije");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }


let username = '9c41c813-28ab-4983-8b41-b7952d47294f';
let password = 'ecca6627-8b67-4f0f-9e29-a1349bd54aea';

let headers = new Headers();

//headers.append('Content-Type', 'text/json');
headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));


fetch('https://exchange.xforce.ibmcloud.com/api/ipr/92.60.237.226', {method:'GET',
        headers: headers,
       })
  .then(response => response.json())
  .then(data => console.log(data));
}





function myFunction() {
    document.getElementById("demo").style.color = "red";
}