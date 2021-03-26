export default class Episode {
  constructor({ air_date, name, episode }) {
    this.air_date = air_date; this.name = name; this.episode = episode;
  }

  render() {
    // const { air_date, name, episode } = elem;
    return `
           <article class="episodes mb-2 purple-bg b-radius-4/5 p-1">
              <h3 class="text-white mb-4/5">${this.name}</h3>
              <p class="text-white text-semibold mb-4/5"> ${this.episode}</p>
              <p class="text-white font-size-xs"> ${this.air_date}</p>
           </article>
        `;
  }
}