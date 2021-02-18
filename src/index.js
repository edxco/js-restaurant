import './style.css';
import navBar from './_navbar';
import home from './home';


const body = document.querySelector('body');
const mainDiv = document.querySelector('#content');
body.prepend(navBar());
mainDiv.appendChild(home());

