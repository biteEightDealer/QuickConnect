const link = document.createElement("link");
link.rel = "stylesheet";
link.href = new URL("./home.css", import.meta.url).href;
document.head.appendChild(link);

import "../../components/table/table.js";

class HomeView extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <table-component></table-component>
        `;
    }
}

customElements.define("home-view", HomeView);