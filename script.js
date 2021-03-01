window.addEventListener("DomContentLoded", (event) => {
console.log("DOM fully loaded and parsed");

let h1elements = document.querySelectorAll(h1);
// h1elements[0].addEventListener("click",function () {
//  alert("This is a heading tag");
// }); 
h1elements.forEach(function(h1element) {
h1elements.addEventListener("click", function() {
alert("This is a heading tag");
});
});

// ${"h1"}.click (function () {
//  alert("This is a heading tag.");
// });

// $(document).ready(function () {
//   $("#color-picker").change(function () {

});
});

// $("p").click (function () {
//   alert("This is a paragraph.")
});

// $("img").click (function () {
//   alert("This is an image")    
});
jQuery("img").click(function() {
alert("This is an image");
});
});
//$(document).ready(function() {
$('#toggle-btn').on("click", function(e) {
$('#delani').toggle('slow');
});
});
}