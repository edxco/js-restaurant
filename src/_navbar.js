import logo from './media/logo.png';

export default function navBar() {
    const container = document.createElement('header');
    container.className = 'header_1';
    const div1 = document.createElement('div1');
    div1.className = 'container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center';
    const a = document.createElement('a');
    a.className = 'a_navBar';
    const div2 = document.createElement('div');
    div2.className = 'w-14 h-14 text-white p-2 bg-blue-500 rounded-full';
    const img = document.createElement('img');
    img.className = 'h-10';
    img.src = logo;

    const nav = document.createElement('nav');
    nav.className = 'md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center';
    const menu1 = document.createElement('a')
    menu1.className = 'mr-5 hover:text-gray-900'
    menu1.textContent = 'Menu 1'
    const menu2 = document.createElement('a')
    menu2.className = 'mr-5 hover:text-gray-900'
    menu2.textContent = 'Menu 2'
    const menu3 = document.createElement('a')
    menu3.className = 'mr-5 hover:text-gray-900'
    menu3.textContent = 'Menu 3'
    const menu4 = document.createElement('a')
    menu4.className = 'mr-5 hover:text-gray-900'
    menu4.textContent = 'Menu 4'

    const button = document.createElement('button');
    button.className = 'inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0';
    button.innerHTML = 'Button <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>'

    container.append(div1);
    div1.append(a, nav, button);
    a.append(div2);
    div2.append(img);
    nav.append(menu1, menu2, menu3, menu4);



    return container;
}