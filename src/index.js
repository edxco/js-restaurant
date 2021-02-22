import './style.css';
import navBar from './_navbar';
import home from './home';
import menuSection from './food';
import contactSection from './contact';

const body = document.querySelector('body');
const mainDiv = document.querySelector('#content');
body.prepend(navBar());

mainDiv.appendChild(home());

// Functions for menus
const goToIndex = () => {
  mainDiv.textContent = '';
  mainDiv.appendChild(home());
};

const goToMenu = () => {
  mainDiv.textContent = '';
  mainDiv.appendChild(menuSection());
};

const goToContactUs = () => {
  mainDiv.textContent = '';
  mainDiv.appendChild(contactSection());
};

// Event listener for header nav
const btnHome = document.getElementById('index');
btnHome.addEventListener('click', goToIndex);

const btnAboutUs = document.getElementById('menu');
btnAboutUs.addEventListener('click', goToMenu);

const btnOurMeals = document.getElementById('contactUs');
btnOurMeals.addEventListener('click', goToContactUs);