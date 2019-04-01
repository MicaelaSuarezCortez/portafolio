import { viewTemplateSection } from '../view/template-section.js';

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/acercademi');
  } else if (hash === '#/acercademi' || hash === '#/portafolio' || hash === '#/skills' || hash === '#/contacto') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/acercademi');
  }
};

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  console.log(router);
  const container = document.getElementById('container');
  container.innerHTML = viewTemplateSection[router];  
};

window.addEventListener('load', changeTmp(window.location.hash));
if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);


