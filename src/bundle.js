import API from './API.js';
import Character from './Character.js';
import Episode from './Episode.js';

let index = 2;
let character = true;
const characterAction = document.querySelector('#characterAction');
const episodeAction = document.querySelector('#episodeAction');
const canvasContainer = document.querySelector('#canvas');
const api = new API();

characterAction.addEventListener('click', async (e) => {
  character = true;
  await btnDomRender(character);
  episodeAction.classList.remove('active-button');
  characterAction.classList.add('active-button');


});

episodeAction.addEventListener('click', async () => {
  character = false;
  await btnDomRender(character);
  characterAction.classList.remove('active-button');
  episodeAction.classList.add('active-button');
});

async function btnDomRender(character) {
  index = 2;
  canvasContainer.innerHTML = '';
  const response = await api.getAPI(character);
  const { results } = response;
  const charactersHtml = displayDOM(results, character);

  const characterCont = `<h2 class="text-center">${character ? 'Characters' : 'Episodes'}</h2><div class="p-1" id="canva-info">${charactersHtml}</div>`
  canvasContainer.innerHTML = characterCont;
  const canvaInfo = document.querySelector('#canva-info');
  if (!character)
    canvaInfo.classList.remove("characters-info");
  else
    canvaInfo.classList.add("characters-info");

}


function displayDOM(results, character = true) {

  let charactersHtml = '';
  results.map(elem => {
    let response;
    if (character) {
      const characterObj = new Character(elem);
      response = characterObj.render()
    } else {
      const episodeObj = new Episode(elem);
      response = episodeObj.render()
    }

    charactersHtml += response
  })

  return charactersHtml;
}


async function initApp() {
  const response = await api.getAPI();
  const { results } = response;
  const charactersHtml = displayDOM(results);
  const characterCont = `<h2 class="text-center">Characters</h2><div class="p-1 characters-info" id="canva-info">${charactersHtml}</div>`
  canvasContainer.innerHTML = characterCont;
  characterAction.classList.add('active-button');
}


window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
window.onscroll = async function (ev) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight + 23) {
    const response = await api.getAPI(character, index)
    const { results } = response;
    const charactersHtml = displayDOM(results, character);
    const canvaInfo = document.querySelector('#canva-info');
    canvaInfo.innerHTML += charactersHtml
    index++;
  }
};



initApp();