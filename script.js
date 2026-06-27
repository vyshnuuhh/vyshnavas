/*=========================================
 PORTFOLIO SCRIPT
 Author : Vyshnav
=========================================*/

// ================= Loader =================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},1500);

});

// ================= Typing Effect =================

const typing = document.getElementById("typing");

const words = [

"Frontend Developer",

"Cybersecurity SOC Analyst",

"JavaScript Developer",

"React Developer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type(){

const current = words[wordIndex];

if(!deleting){

typing.textContent = current.substring(0,charIndex++);

if(charIndex > current.length){

deleting = true;

setTimeout(type,1500);

return;

}

}else{

typing.textContent = current.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(type,deleting?60:120);

}

type();

// ================= Mobile Menu =================

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});

document.querySelectorAll(".nav-menu a").forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("active");

});

});

// ================= Smooth Scroll =================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
/*=========================================
SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(
".section,.card,.about-card,.service-card,.project-card,.certificate-card,.tech-card,.timeline-item"
);

function revealOnScroll(){

const trigger = window.innerHeight * 0.85;

revealElements.forEach(el=>{

const top = el.getBoundingClientRect().top;

if(top < trigger){

el.classList.add("show");

}

});

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

/*=========================================
STICKY NAVBAR
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY > 80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

/*=========================================
BACK TO TOP BUTTON
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*=========================================
ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
/*=========================================
 ANIMATED COUNTERS
=========================================*/

const counters = document.querySelectorAll(".stat-card h2");

const speed = 80;

function startCounters(){

counters.forEach(counter=>{

const target = parseInt(counter.innerText);

if(isNaN(target)) return;

let count = 0;

const update = ()=>{

count += Math.ceil(target/40);

if(count >= target){

counter.innerText = target + "+";

}else{

counter.innerText = count + "+";

requestAnimationFrame(update);

}

};

update();

});

}

const statsSection = document.querySelector(".stats");

let counterStarted = false;

window.addEventListener("scroll",()=>{

if(!statsSection) return;

const top = statsSection.getBoundingClientRect().top;

if(top < window.innerHeight-100 && !counterStarted){

counterStarted = true;

startCounters();

}

});

/*=========================================
 CUSTOM CURSOR
=========================================*/

const cursor = document.querySelector(".cursor");

if(cursor){

window.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX + "px";

cursor.style.top = e.clientY + "px";

});

}

/*=========================================
 NAVBAR SHADOW
=========================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY > 20){

header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

}else{

header.style.boxShadow = "none";

}

});

/*=========================================
 PROJECT CARD HOVER EFFECT
=========================================*/

const cards = document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const rotateY = (x / rect.width - 0.5) * 12;

const rotateX = (0.5 - y / rect.height) * 12;

card.style.transform =
`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"perspective(1000px) rotateX(0) rotateY(0)";

});

});

/*=========================================
 CURRENT YEAR
=========================================*/

const year = document.querySelector("#year");

if(year){

year.textContent = new Date().getFullYear();

}

/*=========================================
 CONSOLE MESSAGE
=========================================*/

console.log("%cWelcome to Vyshnav's Portfolio",
"color:#22c55e;font-size:20px;font-weight:bold;");

console.log("Frontend Developer | Cybersecurity SOC Analyst");



/*=========================================
 END OF SCRIPT
=========================================*/