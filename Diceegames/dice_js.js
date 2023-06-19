//for image 1 
var randomNumber1=Math.floor(Math.random()*6)+1;

var randomDicechange="dice"+randomNumber1+".png";
 var randomImagesource="images/"+randomDicechange;

 var images1=document.querySelectorAll("img")[0]

 images1.setAttribute("src",randomImagesource );  
//2 image
 var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDicechange2="dice"+randomNumber2+".png";
 var randomImagesource2="images/"+randomDicechange2;

 var images2=document.querySelectorAll("img")[1]

 images2.setAttribute("src",randomImagesource2 );
 
 //for win

 if(randomNumber1>randomNumber2)
 {
    document.querySelector("h1").innerHTML="Ashish Win 🚩"
 }
 else if( randomNumber2>randomNumber1){

document.querySelector("h1").innerHTML="Aditya Wins 🚩"
 }
 else{
    document.querySelector("h1").innerHTML="Draw 🎌"
 }
