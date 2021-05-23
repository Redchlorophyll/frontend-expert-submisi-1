import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import "./hamburger.js"
import restaurants from '../DATA.json';
import {restourantcard} from "./api.js";

console.log('Hello Coders! :)');

document.addEventListener('DOMContentLoaded', () => {
  restourantcard(restaurants.restaurants);
})
