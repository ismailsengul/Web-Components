
class TableComponent extends HTMLElement {
    constructor(){
        super();

        const templateString = `
            <style>
                table {
                    font-family: arial, sans-serif;
                    border-collapse: collapse;
                    width: 100%;
                }
          
                td, th {
                    border: 1px solid #dddddd;
                    text-align: center;
                    padding: 8px;
                }
          
                tr:nth-child(even) {
                    background-color: #dddddd;
                }
            </style>
      
            <table id="table">
            </table>
        `;

    
        const template = document.createElement('template');
        template.innerHTML = templateString;

        const shadowRoot = this.attachShadow({mode:"open"});
        shadowRoot.appendChild(template.content.cloneNode(true));

        let cols = JSON.parse(this.getAttribute('cols'));
        let rows = JSON.parse(this.getAttribute('rows'));




        createTable(cols,rows);

        function createTable(cols,rows){
            
            for(const row of rows) {
                if(row.length != cols.length) {
                    throw new Error("Number of columns and number of rows must be equal");
                }
            }
            createCols(cols);
            createRows(rows);

        }

        function createCols(cols) {
            const table = shadowRoot.querySelector("#table");
            const tr = document.createElement("tr");

            for (const col of cols) {

                const th = document.createElement("th");
                const thText = document.createTextNode(col);
                th.appendChild(thText);
                tr.appendChild(th);
            }

            table.appendChild(tr);

        }
        
        function createRows(rows){
            const table = shadowRoot.querySelector("#table");


            for(const row of rows) {

                const tr = document.createElement("tr");

                for(const context of row) {
                    const td = document.createElement("td");
                    const tdText = document.createTextNode(context);
                    td.appendChild(tdText);
                    tr.appendChild(td);
                }

                table.appendChild(tr);
                
            }

        }


    }
  
}

customElements.define("table-component",TableComponent);
