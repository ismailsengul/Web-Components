# Table Component

In this project, I created a new web component that displays a table of data.

Used this component to show company information.

Implemented an input area to add new row to the table. 

You can use it by importing ```<table-component.js>``` file to your code.

```html
<script src="table-component.js"></script>
```

## Attributes 
- ```cols``` : Column names. You can set your column names as header of the table with using cols attribute.
- ```rows``` : Gets a list of lists. You can set your rows with using rows attribute. Notice that, each list in rows list must be same size of the column list.

## Methods
 ### ```constructor()``` : 
 - Creates a ```<template>``` tag and gives some style to it.
 - Creates a new Shadow Dom and attaches the ```<table-component>``` to it.

### ```observedAttributes()``` :
  - Listens ```cols``` and ```rows``` attributes changes.

### ```attributeChangedCallback()``` :
  - Listens ```cols``` and ```rows``` attributes and gets their changes. When a change occurs, calls ```createCols()``` or ```createRows()``` methods to create or add new cols or rows according to ```name``` parameter. Send ```newValue``` parameter to create methods.
  
 ### ```createCols()``` : 
 - Gets the cols array as parameter and creates the head of the table with column names.

### ```createRows()``` : 
 - Gets the rows array as parameter and creates the rows of the table.

### ```removeExistingRows()``` : 
   - When new row added to the table, removes existing rows to prevent the table duplicates.

## Usage
To use this component, you need to add the table-component.js file to your project and 
call the  ```<table-component>```  tag in your html file. You can also pass columns and rows attributes.

```html
    
    <html>
    <head>
        <script src="table-component.js"></script>  
        <script>
            let row1 = ["Microsoft", "Bill Gates", "USA"];
            let row2 = ["SpaceX", "Elon Musk","USA"];
            let row3 = ["Amazon", "Jeff Bezos", "USA"];
            let row4 = ["Alibaba","Daniel Zhang","China"]
            let row5 = ["Trendyol","Demet Mutlu","Turkey"];
            let rows = [row1,row2,row3,row4,row5];

            let tableComponent = document.getElementById("table-component");
            tableComponent.setAttribute('cols',JSON.stringify(cols))
            tableComponent.setAttribute('rows',JSON.stringify(rows))
            
        </script>
    </head>
    <body>
        <table-component id="table-component cols ="" rows =""></table-component>
    </body>
    </html>

