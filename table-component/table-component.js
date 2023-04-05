class TableComponent extends HTMLElement {
    constructor() {
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
  
        <table id="table"></table>
      `;
  
      const template = document.createElement('template');
      template.innerHTML = templateString;
  
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
  
    }
  
    static get observedAttributes() {
      return ['rows', 'cols'];
    }
  
  
    createCols(cols) {
      const table = this.shadowRoot.querySelector('#table');
      const tr = document.createElement('tr');
      tr.setAttribute('id','table-component-header')
      for (const col of cols) {
        const th = document.createElement('th');
        const thText = document.createTextNode(col);
        
        th.appendChild(thText);
        tr.appendChild(th);
      }
  
      table.appendChild(tr);
    }
  
    createRows(rows) {
      const table = this.shadowRoot.querySelector('#table');
    
      for (const row of rows) {
        const tr = document.createElement('tr');
  
        for (const context of row) {
          const td = document.createElement('td');
          const tdText = document.createTextNode(context);
          td.appendChild(tdText);
          tr.appendChild(td);
        }
  
        table.appendChild(tr);
      }
    }

    removeExistingRows() {
        const table = this.shadowRoot.querySelector('#table');
        const rows = table.querySelectorAll('tr');

        for (const row of rows) {

            if(row.getAttribute('id') === 'table-component-header') continue;
            else
            table.removeChild(row);
            
        }
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'rows') {
          const rows = JSON.parse(newValue);
          this.removeExistingRows();
          this.createRows(rows);
        }else if(name === 'cols'){
          const cols = JSON.parse(newValue);
          this.createCols(cols);
        }
      }
  }
  
  customElements.define('table-component', TableComponent);
  