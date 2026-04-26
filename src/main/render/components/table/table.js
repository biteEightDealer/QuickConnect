const link = document.createElement("link");
link.rel = "stylesheet";
link.href = new URL("./table.css", import.meta.url).href;
document.head.appendChild(link);

class TableComponent extends HTMLElement {
    connectedCallback() {
        console.log("Table component connected to the DOM");
        this.render();    
    }

    render() {
        this.innerHTML = `<button id="test-btn">Click Me</button>`;
        this.querySelector("#test-btn").onclick = () => {
            console.log("¡Click detectado!");
        };
    }
    
}

customElements.define("table-component", TableComponent);