"use strict";


//   File name:    dTripGenerator.js
//   Author:       Aferu Minas
//   Description:  This program will assist user to genarate ideal trip plan.



let destinations = ["Bangkok", "Paris", "London", "Dubai", "Singapore", "KualaLumpur", "NewYork", "Istanbul", "Tokyo", "Antalya", "Seoul", "Osaka", "Makkah", "Phuket", "Pattaya", "Milan", "Barcelona", "PalmaDeMallorca", "Bali", "HongKongSAR" ];
let restaurants = ["Little Caesars", "Ruth's Chris Steak House", "McCormick & Schmick's", "American Deli", "Free birds World Burrito", "Cafe Rio Mexican Grill", "In-N-Out Burger", "The Cheese cake Factory", "Chick-fil-A", "Papa Murphy's" ];




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


function randNumGenerator(maxPlusOne) {
    let theRandNum;
    theRandNum = Math.floor(Math.random()  *  maxPlusOne);
    return theRandNum;
}


let generatIt  = randNumGenerator(21);
let generatRestaurant = randNumGenerator(11);
let ranSel = destinSelector(generatIt);
let ranSelRestaurant = restaurantSelector(generatRestaurant);