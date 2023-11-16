const typedTextSpan = document.querySelector(".typed-text");
const heroLeft = document.querySelector(".hero-left");
const textArray = ["SOFTWARE ENGINEER?", "DATA ENGINEER?", "UI/UX DESIGNER?"];
let tabs=document.querySelectorAll(".tabs h3");
let tabContents=document.querySelectorAll(".tab-content div");
const btn=document.getElementsByClassName("btn");
const slide=document.getElementById("slide");
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function addClassBasedOnIndex(index) {
    typedTextSpan.classList.remove("se", "de", "ux");
    if (index === 0) {
        typedTextSpan.classList.add("se");
        heroLeft.classList.add("se");
    } else if (index === 1) {
        typedTextSpan.classList.add("de");
        heroLeft.classList.add("de");
    } else if (index === 2) {
        typedTextSpan.classList.add("ux");
        heroLeft.classList.add("ux");
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

tabs.forEach((tab,index)=>{
    tab.addEventListener("click",()=>{
        tabContents.forEach(content=>{
            content.classList.remove("active");
        });
        tabs.forEach(tab=>{
            tab.classList.remove("active");
        });
        tabContents[index].classList.add("active");
        tabs[index].classList.add("active");
    })
})

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