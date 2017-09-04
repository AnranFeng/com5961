var listItems = document.getElementById("navlist");

listItems[0].getElementsByTagName("li").addEventListener("mouseover", myFunction);

function myFunction() {
    alert ("Hello World!");
}