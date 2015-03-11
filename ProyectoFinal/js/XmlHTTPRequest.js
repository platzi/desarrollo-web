// Petición AJAX con Vanilla JS

function loadXMLDoc() {
  var xmlhttp;

  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 ) {
      if(xmlhttp.status == 200){
        console.log(xmlhttp.responseText);
      }
      else if(xmlhttp.status == 400) {
        alert('There was an error 400')
      }
      else {
        alert('something else other than 200 was returned')
      }
    }

    xmlhttp.open("GET", "http://api.wunderground.com/api/595a3b8f36177305/forecast/q/CA/San_Francisco.json", true);
    xmlhttp.send();
  }


}
