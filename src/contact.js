export default function contactSection() {
    
    const main = document.createElement('section');
    main.className = 'text-gray-600 body-font relative';
    const divMap = document.createElement('div');
    divMap.className = 'absolute inset-0 bg-gray-300';
    const iframe = document.createElement('iframe');
    iframe.setAttribute('width','100%');
    iframe.setAttribute('height','100%');
    iframe.setAttribute('frameborder','0');
    iframe.setAttribute('marginheight','0');
    iframe.setAttribute('marginwidth','0');
    iframe.setAttribute('title','map');
    iframe.setAttribute('scrolling','no');
    iframe.src = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1660997.336131135!2d-98.82870611046296!3d20.045385971772387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1613787171589!5m2!1ses-419!2smx';
    iframe.className = 'filter: grayscale(1) contrast(1.2) opacity(0.4);';
    const div = document.createElement('div');
    div.className = 'container px-5 py-24 mx-auto flex';
    const div1 = document.createElement('div');
    div1.className = 'formStyle'
    const h2 = document.createElement('h2');
    h2.className = 'text-gray-900 text-lg mb-1 font-medium title-font';
    h2.textContent = '¿Any suggestions?'
    const p = document.createElement('p');
    p.className = 'leading-relaxed mb-5 text-gray-600';
    p.textContent = 'If you have any comments to improve send us a message';
    const div2 = document.createElement('div');
    div2.className = 'relative mb-4';
    const label = document.createElement('label');
    label.className = 'leading-7 text-sm text-gray-600';
    label.textContent = 'Name';
    const input = document.createElement('input');
    input.className = 'formInput leading-8';
    const div3 = document.createElement('div');
    div3.className = 'relative mb-4';
    const label2 = document.createElement('label');
    label2.className = 'leading-7 text-sm text-gray-600';
    label2.textContent = 'Message';
    const textArea = document.createElement('textarea');
    textArea.className = 'formInput h-32 resize-none leading-6';
    const button = document.createElement('button');
    button.className = 'formBtn';
    button.textContent = 'Send';

    main.append(divMap, div);
    divMap.append(iframe);
    div.append(div1);
    div1.append(h2, p, div2, div3, button);
    div2.append(label, input);
    div3.append(label2, textArea);

    return main;
}