import './styles.css';

import cssImage from './cssMobile.png';

const image = document.createElement('img');
image.src = cssImage;

const heading = document.createElement('h1');
heading.innerHTML = 'How are you??';

document.body.appendChild(heading);

document.body.appendChild(image);

console.log('HEYYY')