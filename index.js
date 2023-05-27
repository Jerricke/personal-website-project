const socialicons = document.querySelector(".socialbox .icons img")

socialicons.addEventListener('mouseenter', () => {
    socialicons.classList.add("hovered");
})

socialicons.addEventListener('mouseleave', () => {
    socialicons.classList.remove("hovered");
})

const btn1 = document.getElementById('gibby')
const btn2 = document.getElementById('railroad')
const btn3 = document.getElementById('saxon')
const btn4 = document.getElementById('homies')
const btn5 = document.getElementById('dyno')
const btn6 = document.getElementById('vcon')

btn1.addEventListener('click', () =>{
    alert("This is my first ever gibraltar art I've ever made while working at Blue Bottle!" );
})

btn2.addEventListener('click', () => {
    alert("A photo of me when I went on a family trip to Rosewood Miramar!");
})

btn3.addEventListener('click', () => {
    alert("One of my favorite pictures of all time. I took this on a Sunday midday walking through the Saxon gardens, it was truly a picture that captures the entire setting.")
})

btn4.addEventListener('click', () => {
    alert("I took a polaroid photo with the gentlemen that I got to work with while volunteering at a Ukrainian refugee center in Warsaw.") ;
})

btn5.addEventListener('click', () => {
    alert("My first ever successful dyno jump! i started bouldering for the first time on Feb20th and ever since then I've been hooked :)");
})

btn6.addEventListener('click', () => {
    alert("On May 17th I flew to Indianapolis for the first time to attend VeeCon. I didn't have too much of an idea of what the convention would be like but I made lots of friends and connections that weekend! Super fun"); 
})