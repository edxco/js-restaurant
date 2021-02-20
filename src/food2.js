import imgMenu1 from '../src/media/bbq.jpg';
import imgMenu2 from '../src/media/chile.jpg';
import imgMenu3 from '../src/media/cochinita.jpg';
import imgMenu4 from '../src/media/gorditas.jpg';
import imgMenu5 from '../src/media/guacamole.jpg';
import imgMenu6 from '../src/media/tacos.jpg';

export default function menuSection() {
    function Food(img, price, foodText, description) {
        this.img = img;
        this.price = price;
        this.foodText = foodText;
        this.description = description;
    }
    
    let menuText1 = new Food(
        imgMenu1,
        '$14.00',
        'Pit Barbacue',
        'Lamb & vegetables cooked and buried below ground');
    let menuText2 = new Food(
        imgMenu2,
        '$18.00',
        'Chile en Nogada',
        'Mexican dish of poblano chiles stuffed with picadillo');
    let menuText3 = new Food(
        imgMenu3,
        '$16.60',
        'Cochinita',
        'Pork meat marinated in strongly acidic citrus juice');
    let menuText4 = new Food(
        imgMenu4,
        '$4.00',
        'Gorditas',
        'Pastry made with masa and stuffed with cheese, meat');
    let menuText5 = new Food(
        imgMenu5,
        '$11.00',
        'Guacamole',
        'Advocado mix with lemon and Coriander');
    let menuText6 = new Food(
        imgMenu6,
        '$22.00',
        'Tacos',
        'TSmall hand-sized corn topped with a filling');

    let arr = [
        menuText1,
        menuText2,
        menuText3,
        menuText4,
        menuText5,
        menuText6
    ];

    console.log(arr);
    const main = document.createElement('section');
    main.className = 'bg_sections';
    const div = document.createElement('div');
    div.className = 'container px-5 py-24 mx-auto';
    const div1 = document.createElement('div');
    div1.className = 'flex flex-wrap -m-4';
    
    for (let i = 0; i < arr.length; i++) {
        
        const div2 = document.createElement('div');
        div2.className = 'lg:w-1/3 sm:w-1/2 p-4';
        const div3 = document.createElement('div');
        div3.className = 'flex relative';
        const img = document.createElement('img');
        img.setAttribute('alt', 'gallery');
        img.className = 'img_menu';
        img.src = `${arr[i].img}`;
        const div4 = document.createElement('div');
        div4.className = 'img_action';
        const h2 = document.createElement('h2');
        h2.className = 'subtitle';
        h2.textContent = `${arr[i].foodText}`
        const h1 = document.createElement('h1');
        h1.className = 'title';
        h1.textContent = `${arr[i].price}`;
        const p = document.createElement('p');
        p.className = 'leading-relaxed';
        p.textContent = `${arr[i].description}`;

        main.append(div);
        div.append(div1);
        div1.append(div2);
        div2.append(div3);
        div3.append(img, div4);
        div4.append(h2, h1, p);
    }

    return main;
}