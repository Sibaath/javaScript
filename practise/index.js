// document.getElementById("a").textContent+="Sibaath";
// document.getElementById("b").textContent+="19";
// document.getElementById("a").onclick = function()
// {
//     document.getElementById("n").textContent+=" "+document.getElementById("name").value;
// }
// document.getElementById("a").onclick = function()
// {
//     let num = document.getElementById("name").value;
//     const PI = 3.14;
//     let area = PI*2*num;
//     document.getElementById("op").textContent = "Area : "+area;
// }
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const rs = document.getElementById("rs");
const counter = document.getElementById("counter");

let count = 0;
inc.onclick = function(){
counter.textContent = count++;
}
dec.onclick = function(){
    counter.textContent = count--;
}
rs.onclick = function(){
    counter.textContent = coun  t=0;
}


