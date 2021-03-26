export default class API {
  async getAPI(character = true, page = 1) {
    const resp = await fetch(`https://rickandmortyapi.com/api/${character ? 'character' : 'episode'}/?page=${page}`);
    return resp.json();
  }
}