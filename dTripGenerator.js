"use strict";


//   File name:    dTripGenerator.js
//   Author:       Aferu Minas
//   Description:  This program will assist user to genarate ideal trip plan.


//  Array of cities, restaurants, transportation mode, and entertainments to be suggested to user 

let destinations = ["Bangkok", "Paris", "London", "Dubai", "Singapore", "KualaLumpur", "NewYork", "Istanbul", "Tokyo", "Antalya", "Seoul", "Osaka", "Makkah", "Phuket", "Pattaya", "Milan", "Barcelona", "PalmaDeMallorca", "Bali", "HongKongSAR" ];
let restaurants = ["Little Caesars", "Ruth's Chris Steak House", "McCormick & Schmick's", "American Deli", "Free birds World Burrito", "Cafe Rio Mexican Grill", "In-N-Out Burger", "The Cheese cake Factory", "Chick-fil-A", "Papa Murphy's" ];
let transportation = ["Rental Car", " Tour Bus", " Taxi", "City Bus", "Uber/Lift"];
let entertainments = [" Cite Seeing", "Night Clubs", " Indor Games", "Casinos", "Water Activities"];


// A function to randomly generate and suggest destination city
function destinSelector( num){

    let selectd = destinations[num];
    console.log(" Suggested Destination City :" + selectd);
        
return selectd;

}


// A function to randomly generate and suggest a restaurant
function restaurantSelector( num2){

    let selectdRestaurant = restaurants[num2];
    console.log("Suggested restaurant :" + selectdRestaurant);
        
return selectdRestaurant;

}

 
// Afunction to randomly generate and suggest mode of transportation
function transportSelector( num3){

    let selectdtransport = transportation[num3];
    console.log("Suggested Transportation Mode: " + selectdtransport);    
return selectdtransport;

}


// Afunction to randomly generate and suggest entertainment

function entertainmentSelector( num4){

    let selectdEntertainment = entertainments[num4];
    console.log("Suggested Entertainment: " + selectdEntertainment);    
return selectdEntertainment;

}


// A function to generate random numbers
function randNumGenerator(maxPlusOne) {
    let theRandNum;
    theRandNum = Math.floor(Math.random()  *  maxPlusOne);
    return theRandNum;
}



//Menue for user
console.log(" Enter 1 for destination City suggestions \n",
              "Enter 2 for Restaurant Suggestions \n","Enter 3 for Transportation mode suggestions\n",
              "Enter 4 for Entertainment suggestions \n", "Enter 5 for list of choosen options\n"
              );


let userInput = 0 ;
let destinCityChoosen ;
let restaurantChoosen;
let transportChoosen;
let entertainmentChoosen;

 
// While loop to enable user randomly generate suggestions till satisfied
    while (userInput != "5") {      
        userInput = prompt( "Enter your choise here");     
  

    if (userInput == "1"){
        let generatIt  = randNumGenerator(20);
        let ranSel = destinSelector(generatIt);
        destinCityChoosen = ranSel;
        

    }else if (userInput == "2"){
        let generatRestaurant = randNumGenerator(10);
        let ranSelRestaurant = restaurantSelector(generatRestaurant);
        restaurantChoosen = ranSelRestaurant; 
        
    }else if (userInput == "3"){
        let generatTransport = randNumGenerator(5);
        let ranSelTransport = transportSelector(generatTransport);
        transportChoosen = ranSelTransport;
    }else if (userInput == "4"){
        let generatEntertainment = randNumGenerator(5);
        let ranSelEntertainment = entertainmentSelector(generatEntertainment);
        entertainmentChoosen = ranSelEntertainment;
    }else if (userInput == "5"){
        console.log("Choosen Destination City :" + destinCityChoosen );
        console.log("Choosen restaurant :" + restaurantChoosen);
        console.log("Choosen Transportation Mode: " + transportChoosen);
        console.log("Choosen Entertainment: " + entertainmentChoosen);
    }
   else{
    console.log("invalid input")}
};
 
    

   









