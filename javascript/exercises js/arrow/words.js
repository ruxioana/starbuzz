const words = ["engine", "Linked In", "login", "hello", "Javascript", "Amsterdam", "123"];
var text = words.sort()
     .filter(word => word.charAt(0) >= "A" && word.charAt(0) <= "Z")
     .join("<br/>"); /* nu punem punct si virgula decat la final */

document.getElementById("words").innerHTML = text;