
// Left Dice
var randomNumber1 = Math.random();
randomNumber1 =randomNumber1 *6;
randomNumber1= Math.floor(randomNumber1) +1;

// Right Dice
var randomNumber2 = Math.random();
randomNumber2 =randomNumber2 *6;
randomNumber2= Math.floor(randomNumber2) +1;


// Set the image source for Player 1's dice
var diceImage1 = "images/dice" + randomNumber1 + ".png"; // e.g., "images/dice3.png"

// Select the image element for Player 1
var imageElement1 = document.querySelector(".img1"); 

// Change the source attribute to the new image
imageElement1.setAttribute("src", diceImage1); 



// Set the image source for Player 2's dice
var diceImage2 = "images/dice" + randomNumber2 + ".png";
// Select Element
var imageElement2 = document.querySelector(".img2");
//Change source attribute
imageElement2.setAttribute("src",diceImage2);

if(randomNumber1>randomNumber2){
     document.querySelector(".container h1").textContent= "🚩 Player 1 Wins!";
} else if (randomNumber2>randomNumber1){
    document.querySelector(".container h1").textContent= "Player 2 Wins! 🚩";
} else {
    document.querySelector(".container h1").textContent= "It's a Draw!";
}
//testing for github