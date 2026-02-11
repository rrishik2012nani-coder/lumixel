// Visitor Counter
let visits = localStorage.getItem("lumixel_visits") || 0;
visits++;
localStorage.setItem("lumixel_visits", visits);
document.getElementById("visitorCount").innerText = visits;

// Project Data
let projects = [
{
title:"Virtual Mouse AI",
category:"ai",
image:"images/project1.jpg",
file:"projects/virtual-mouse.zip",
description:"AI-based hand gesture PC control system."
},
{
title:"Fire Fighting Robot",
category:"robotics",
image:"images/project2.jpg",
file:"projects/fire-robot.zip",
description:"Autonomous robot that detects and extinguishes fire."
}
];

function displayProjects(){
let container=document.getElementById("projects");
container.innerHTML="";
let search=document.getElementById("search").value.toLowerCase();
let cat=document.getElementById("categoryFilter").value;

projects.forEach(p=>{
if(p.title.toLowerCase().includes(search) && (cat=="all"||p.category==cat)){
container.innerHTML+=`
<div class="card">
<img src="${p.image}">
<h3>${p.title}</h3>
<p>${p.description}</p>
<a href="${p.file}" class="download" download>Download</a>
</div>`;
}
});
}

document.getElementById("search").addEventListener("input",displayProjects);
document.getElementById("categoryFilter").addEventListener("change",displayProjects);

displayProjects();

particlesJS("particles-js",{
particles:{
number:{value:100},
size:{value:3},
color:{value:"#00f2ff"},
line_linked:{enable:true,color:"#00f2ff"}
}
});
