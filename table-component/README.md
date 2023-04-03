# Table Component

In this project, I created a new web component that displays a table of data.

## Usage
To use this component, you need to add the table-component.js file to your project and 
call the  ```<table-component>```  tag in your html file. You can also pass in the columns and rows.

```html
    
    <html>
    <head>
        <script src="table-component.js"></script>  
        <script>
            let cols = ["Company","Contact","Country"];
            let row1 = ["Microsoft", "Bill Gates", "USA"];
            let row2 = ["SpaceX", "Elon Musk","USA"];
            let row3 = ["Amazon", "Jeff Bezos", "USA"];
            let rows = [];
            rows.push(row1);
            rows.push(row2);
            rows.push(row3);

            let tableComponent = document.getElementById("table-component");
            tableComponent.setAttribute('cols',JSON.stringify(cols))
            tableComponent.setAttribute('rows',JSON.stringify(rows))
            
        </script>
    </head>
    <body>
        <table-component id="table-component cols ="" rows =""></table-component>
    </body>
    </html>

