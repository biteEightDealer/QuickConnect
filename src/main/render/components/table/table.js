const link = document.createElement("link");
link.rel = "stylesheet";
link.href = new URL("./table.css", import.meta.url).href;
document.head.appendChild(link);

class TableComponent extends HTMLElement {
    constructor() {
        super();
        this.servers = []
        this.page = 1
        this.totalPages = 1
    }

    connectedCallback() {
        this.loadServers();
    }

    async loadServers(page){
        try {
            const response = await window.api.getServers(page);
            this.servers = response?.data || [];
            this.page = response?.page || 1;
            this.totalPages = response?.totalPages || 1;
        } catch (err) {
            console.error("Error loading servers:", err);
            this.servers = [];
        }

        this.render()
    }

    render() {
        this.innerHTML = `
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>IP</th>
                        <th>Category</th>
                    </tr>
                </thead>

                <tbody>
                    ${this.renderRows()}
                </tbody>
            </table>
        `;
    }

    renderRows() {
        return this.servers.map(server => `
            <tr>
                <td>${server.name}</td>
                <td>${server.ip}</td>
                <td>${server.category}</td>
            </tr>
        `).join("");
    }

}

customElements.define("table-component", TableComponent);