// import from lib.js

// import array, & function
import { person, sayHello } from "./lib";

// get and log name
console.log(person.name);

// log function output
console.log(sayHello('Ishan'));

// async function with fetch api
async function getPosts(){

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    const data = await response.json();
    return data;

}

// call getPosts()
getPosts().then(posts => console.log(posts));