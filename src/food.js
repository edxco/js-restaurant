import imgMenu1 from './media/bbq.jpg';
import imgMenu2 from './media/chile.jpg';
import imgMenu3 from './media/cochinita.jpg';
import imgMenu4 from './media/gorditas.jpg';
import imgMenu5 from './media/guacamole.jpg';
import imgMenu6 from './media/tacos.jpg';

export default function menuSection() {
  const food = {
    foo1: [
      imgMenu1,
      '$14.00',
      'Pit Barbacue',
      'Lamb & vegetables cooked and buried below ground',
    ],
    foo2: [
      imgMenu2,
      '$18.00',
      'Chile en Nogada',
      'Mexican dish of poblano chiles stuffed with picadillo',
    ],
    foo3: [
      imgMenu3,
      '$16.60',
      'Cochinita',
      'Pork meat marinated in strongly acidic citrus juice',
    ],
    foo4: [
      imgMenu4,
      '$4.00',
      'Gorditas',
      'Pastry made with masa and stuffed with cheese, meat',
    ],
    foo5: [
      imgMenu5,
      '$11.00',
      'Guacamole',
      'Advocado mix with lemon and Coriander',
    ],
    foo6: [
      imgMenu6,
      '$22.00',
      'Tacos',
      'TSmall hand-sized corn topped with a filling',
    ],

  };

  const main = document.createElement('section');
  main.className = 'bg_sections';
  const div = document.createElement('div');
  div.className = 'container px-5 py-24 mx-auto';
  const div1 = document.createElement('div');
  div1.className = 'flex flex-wrap -m-4';


  for (let i = 0; i < Object.keys(food).length; i += 1) {
    const count = Object.values(food)[i];

    const div2 = document.createElement('div');
    div2.className = 'lg:w-1/3 sm:w-1/2 p-4';
    const div3 = document.createElement('div');
    div3.className = 'flex relative';
    const img = document.createElement('img');
    img.setAttribute('alt', 'gallery');
    img.className = 'img_menu';
    img.src = `${count[0]}`;
    const div4 = document.createElement('div');
    div4.className = 'img_action';
    const h2 = document.createElement('h2');
    h2.className = 'subtitle';
    h2.textContent = `${count[1]} USD`;
    const h1 = document.createElement('h1');
    h1.className = 'title';
    h1.textContent = `${count[2]}`;
    const p = document.createElement('p');
    p.className = 'leading-relaxed';
    p.textContent = `${count[3]}`;

    main.append(div);
    div.append(div1);
    div1.append(div2);
    div2.append(div3);
    div3.append(img, div4);
    div4.append(h2, h1, p);
  }

  return main;
}