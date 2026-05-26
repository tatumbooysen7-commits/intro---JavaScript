const button = document.querySelector("button");
const heading = document.querySelector("h1");
const moodParagraph = document.querySelector("#Mood"); 
//looks for the tag in the html file
// MUST use a capital "M" to match the HTML exactly


button.addEventListener("click", function(){
    //1.takes the button and waits for a prompt using the add.EventListener
    //Waiting for something to happen.
    const name = prompt("What is your name?");
    const mood = prompt("How are you feeling today?");
  
    //prompt is saying it doesnt have a variable yet
    heading.textContent = `Hi, ${name}`;
    moodParagraph.textContent = `Today's mood: ${mood}`;
    button.textContent = "Thanks!";
    //changes what the user sees
    
    console.log("The button has been clicked");
    console.log(`User ${name} said they feel: ${mood}`);
    //prints the output(message and data to the developer console of a web browser)
    //tests the code
    //debugging
    //variable inspection  

    //Execution tracking
    //
     
});

 //1. Takes the button and wait for a prompt using the addEventListener
// button.addEventListener("click", function() {

// //2.Waiting on the prompt to be triggered using click
// //3.When the prompt is triggered, a name will be asked
//     const name = prompt("What is your name?");

// //4.The heading will change due to the text context
//     heading.textContent = `Hi, ${name}`;

// //5.Console allows us to see the output in the console via inspect
//     console.log("The button has not been clicked");
// })