// local reviews data
const reviews = [
    {
        id: "1",
        name: "Rocky",
        job: "Dog",
        img: "./img/Rocky.jpeg",
        text: "I like short walks and to sleep."
    },    
    {
         id: "2",
        name: "Bella",
        job: "Dog",
        img: "./img/bella.jpeg",
        text: "I like long walks and to swim."
    }, 
    {
         id: "3",
        name: "Mr. Frog",
        job: "Wild Frog",
        img: "./img/Frog.jpeg",
        text: "I live in Georgia and enjoy swimming in the pool."
    }, 
    {
         id: "4",
        name: "Pumpkin",
        job: "Dog",
        img: "./img/pumpkin.jpeg",
        text: "I dont like Bella."
    },
    {
         id: "5",
        name: "Calcifer",
        job: "Cat",
        img: "./img/calcifer.jpeg",
        text: "I like to sleep all day and hunt bees outside."
    }, 
    {
         id: "6",
        name: "Scotch",
        job: "Cat",
        img: "./img/Scotch.jpeg",
        text: "I like to watch the birds."
    }
];
//select items
const img = document.getElementById("animal-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentReview = 0;

// load inital item

window.addEventListener("DOMContentLoaded", function () {
       showAnimal(currentReview);
});    
function showAnimal(){
    const item = reviews[currentReview];
    img.src = item.img;
    author.textContent = item.name; 
    job.textContent = item.job;
    info.textContent = item.text;
}
nextBtn.addEventListener("click", function(){
    currentReview++;
    if(currentReview>reviews.length - 1){
        currentReview = 0;
    }

    showAnimal(currentReview);
})
prevBtn.addEventListener("click", function(){
    currentReview--;
    if(currentReview < 0){
        currentReview = reviews.length -1;
    }

    showAnimal(currentReview);
})
randomBtn.addEventListener("click", function(){
    currentReview=Math.floor(Math.random()*reviews.length);
    showAnimal(currentReview);
})
