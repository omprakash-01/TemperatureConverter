"use strict";
let form=document.querySelector('form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    let celcius=parseFloat(document.querySelector('#Celcius').value);
    console.log(celcius);
    let result=document.querySelector('#result');
    if(celcius==='' || isNaN(celcius)){
        result.innerHTML=`Please give a valid Temperature (${ celcius })`;
    }
    else{
        let fahrenheit=(celcius*1.8)+32;
        result.innerHTML=`Temperature in Fahrenheit: <span>${fahrenheit} F</span>`
    }
    
});
let FORM=document.querySelector('#FORM')
FORM.addEventListener('submit',function(e){
    e.preventDefault();
    let fahrenheit=parseFloat(document.querySelector('#Fahrenheit').value);
    console.log(fahrenheit)
    let ans=document.querySelector('#ans');
    let celcius=((5/9)*(fahrenheit-32));
    ans.innerHTML=`Temperature in Celcius: <span>${celcius}C</span>`
})