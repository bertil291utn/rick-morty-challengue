export default class Character {
  constructor({ image, name, status }) {
    this.image = image; this.name = name; this.status = status;
  }

  render() {
    // const { image, name, status } = elem;
    return `
         <article class="purple-bg">
           <header class="mr-1">
            <img src="${this.image}" loading="lazy" alt="${this.name}" width="150">
           </header>
           <div>
             <h3 class="title text-bolder">${this.name}</h3>
             <p class="text-semibold font-size-xs">${this.status}</p>
          </div>
         </article>
      `;
  }
}