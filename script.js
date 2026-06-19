/* ========= Mobile Navigation ========= */

const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");

if (navToggle && navMobile) {
    navToggle.addEventListener("click", () => {
        navMobile.classList.toggle("open");
    });

    navMobile.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navMobile.classList.remove("open");
        });
    });
}


/* ========= Scroll Reveal ========= */

const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("in-view");

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});


revealEls.forEach(el => {

    observer.observe(el);

});


/* ========= Card Tilt ========= */

const REDUCED = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


if (!REDUCED) {

document.querySelectorAll("[data-tilt]").forEach(card => {

card.addEventListener("mousemove", e => {

const rect = card.getBoundingClientRect();

const px =
(e.clientX - rect.left) / rect.width - 0.5;

const py =
(e.clientY - rect.top) / rect.height - 0.5;

card.style.transform = `
perspective(700px)
rotateX(${py * -7}deg)
rotateY(${px * 7}deg)
translateY(-4px)
`;

});


card.addEventListener("mouseleave",()=>{

card.style.transform="";

});


});

}



/* ========= Mouse Glow ========= */

const glow = document.getElementById("glow");

if(glow){

document.addEventListener("mousemove",(e)=>{

glow.style.left =
(e.clientX - 190) + "px";

glow.style.top =
(e.clientY - 190) + "px";


});

}



/* ========= Starfield ========= */

const starfield = document.createElement("div");

starfield.className = "starfield";

document.body.prepend(starfield);



for(let i=0;i<120;i++){


const star = document.createElement("div");

star.className = "star";


star.style.left =
Math.random()*100+"%";


star.style.top =
Math.random()*100+"%";


star.style.opacity =
Math.random();


star.style.animationDuration =
(5+Math.random()*15)+"s";


starfield.appendChild(star);


}



/* ========= Typing Effect ========= */

const typing = document.getElementById("typing");


if(typing){

const words=[

"Building AI Agents",

"Learning Unity",

"Creating Discord Bots",

"Deploying Projects",

"Exploring LLMs"

];


let i=0;
let j=0;
let deleting=false;



function type(){


const current=words[i];



if(!deleting){

typing.textContent=
current.slice(0,j++);

}

else{

typing.textContent=
current.slice(0,j--);

}



if(!deleting && j>current.length){

deleting=true;

setTimeout(type,1500);

return;

}



if(deleting && j<0){

deleting=false;

i=(i+1)%words.length;

}



setTimeout(type,deleting?50:100);


}



type();

}
