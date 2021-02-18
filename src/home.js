import videoRest from './media/video.mp4';
import titleImg from './media/title.png';

export default function home() {
  const main = document.createElement('main');
  main.className = 'landing';
  const video = document.createElement('video');
  video.setAttribute('autoplay', 'true');
  video.setAttribute('loop', 'true')
  video.src = videoRest;
  const layer = document.createElement('div');
  layer.className = 'dim';
  const div1 = document.createElement('div');
  div1.className = 'text';
  const img = document.createElement('img');
  img.className = 'mx-auto mt-36';
  img.src = titleImg;
  const h1 = document.createElement('h1');
  h1.className = 'text-white text-5xl font-bold mt-24';
  const p = document.createElement('p');
  p.textContent = 'Make Meals Big Time';
  const span = document.createElement('span');
  span.className = 'font-light text-xl';
  span.textContent = 'The most engaging and affordable interactive hot rock cooking experience';

  main.append(video, div1);
  div1.append(img, h1);
  h1.append(p, span);

  return main;
}