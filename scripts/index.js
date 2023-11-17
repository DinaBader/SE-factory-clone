const typedTextSpan = document.querySelector(".typed-text");
const heroLeft = document.querySelector(".hero-left");
const textArray = ["SOFTWARE ENGINEER?", "DATA ENGINEER?", "UI/UX DESIGNER?"];
const btn=document.getElementsByClassName("btn");
const slide=document.getElementById("slide");
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;


function addClassBasedOnIndex(index) {
    typedTextSpan.classList.remove("se", "de", "ux");
    heroLeft.classList.remove("se", "de", "ux"); 
    if (index === 0) {
        typedTextSpan.classList.add("se");
        heroLeft.style.backgroundColor="rgba(251, 80, 142, 0.93)";
    } else if (index === 1) {
        typedTextSpan.classList.add("de");
        heroLeft.style.backgroundColor="#1d1d1d";
    } else if (index === 2) {
        typedTextSpan.classList.add("ux");
        heroLeft.style.backgroundColor="#c2bfbf";
    }
}


function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        addClassBasedOnIndex(textArrayIndex);
        setTimeout(type, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    addClassBasedOnIndex(textArrayIndex);
    setTimeout(type, newTextDelay + 250);
});


btn[0].onclick=function(){
    slide.style.transform="translateX(0px)";
}
btn[1].onclick=function(){
    slide.style.transform="translateX(-1220px)";
}
btn[2].onclick=function(){
    slide.style.transform="translateX(-2400px)";
}
btn[3].onclick=function(){
    slide.style.transform="translateX(-3600px)";
}

function toggleAnswer(faqItem) {
    const answer = faqItem.querySelector('.answer');

    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}