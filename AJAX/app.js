var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "freegeoip.net/xml/4.2.2.2");
xmlhttp.send();

xmlhttp.load = function() {
var xmlDoc = xmlhttp.responseXML;
console.log(xmlDoc);




}
