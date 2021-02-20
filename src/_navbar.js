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
    nav.className = 'md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-xl justify-center';
    const menu1 = document.createElement('span')
    menu1.className = 'mr-5 hover:text-blue-900 cursor-pointer'
    menu1.setAttribute('id', 'index');
    menu1.textContent = 'Home'
    const menu2 = document.createElement('span')
    menu2.className = 'mr-5 hover:text-blue-900 cursor-pointer'
    menu2.setAttribute('id', 'menu');
    menu2.textContent = 'Menu'
    const menu3 = document.createElement('span')
    menu3.className = 'mr-5 hover:text-blue-900 cursor-pointer'
    menu3.setAttribute('id', 'contactUs');
    menu3.textContent = 'Contact Us'

    const button = document.createElement('button');
    button.className = 'inline-flex items-center text-white bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 rounded text-base mt-4 md:mt-0';
    button.innerHTML = 'Facebook <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>'

    container.append(div1);
    div1.append(a, nav, button);
    a.append(div2);
    div2.append(img);
    nav.append(menu1, menu2, menu3);



    return container;
}