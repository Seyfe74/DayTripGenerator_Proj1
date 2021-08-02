"use strict";


//   File name:    dTripGenerator.js
//   Author:       Aferu Minas
//   Description:  This program will assist user to genarate ideal trip plan.



let destinations = ["Bangkok", "Paris", "London", "Dubai", "Singapore", "KualaLumpur", "NewYork", "Istanbul", "Tokyo", "Antalya", "Seoul", "Osaka", "Makkah", "Phuket", "Pattaya", "Milan", "Barcelona", "PalmaDeMallorca", "Bali", "HongKongSAR" ];
let restaurants = ["Little Caesars", "Ruth's Chris Steak House", "McCormick & Schmick's", "American Deli", "Free birds World Burrito", "Cafe Rio Mexican Grill", "In-N-Out Burger", "The Cheese cake Factory", "Chick-fil-A", "Papa Murphy's" ];
let transportation = ["Rental Car", " Tour Bus", " Taxi", "City Bus", "Uber/Lift"];
let entertainments = [" Cite Seeing", "Night Clubs", " Indor Games", "Casinos", "Water Activities"];



function destinSelector( num){

    let selectd = destinations[num];
    console.log(selectd);    
return selectd;

}

function restaurantSelector( num2){

    let selectdRestaurant = restaurants[num2];
    console.log(selectdRestaurant);    
return selectdRestaurant;

}

function transportSelector( num3){

    let selectdtransport = transportation[num3];
    console.log(selectdtransport);    
return selectdtransport;

}

function entertainmentSelector( num4){

    let selectdEntertainment = entertainments[num4];
    console.log(selectdEntertainment);    
return selectdEntertainment;

}


function randNumGenerator(maxPlusOne) {
    let theRandNum;
    theRandNum = Math.floor(Math.random()  *  maxPlusOne);
    return theRandNum;
}


let generatIt  = randNumGenerator(20);
let generatRestaurant = randNumGenerator(10);
let generatTransport = randNumGenerator(5);
let generatEntertainment = randNumGenerator(5);
let ranSel = destinSelector(generatIt);
let ranSelRestaurant = restaurantSelector(generatRestaurant);
let ranSelTransport = transportSelector(generatTransport);
let ranSelEntertainment = entertainmentSelector(generatEntertainment);