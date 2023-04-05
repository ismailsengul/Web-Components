let cols = ["Company","Contact","Country"];
document.getElementById("col1-label").innerHTML = cols[0] + " :";
document.getElementById("col2-label").innerHTML = cols[1] + " :";
document.getElementById("col3-label").innerHTML = cols[2] + " :";

let row1 = ["Microsoft", "Bill Gates", "USA"];
let row2 = ["SpaceX", "Elon Musk","USA"];
let row3 = ["Amazon", "Jeff Bezos", "USA"];
let row4 = ["Alibaba","Daniel Zhang","China"]
let row5 = ["Trendyol","Demet Mutlu","Turkey"];
let rows = [row1,row2,row3,row4,row5];
   
let tableComponent = document.getElementById("table-component");
tableComponent.setAttribute('cols',JSON.stringify(cols))
tableComponent.setAttribute('rows',JSON.stringify(rows))

function clickHandler() {
        
    const col1 = document.getElementById("col1").value; 
    const col2 = document.getElementById("col2").value;
    const col3 = document.getElementById("col3").value;
        
    const newRow = [col1,col2,col3];
        rows.push(newRow);
        tableComponent.setAttribute('rows',JSON.stringify(rows))
  }
  
  const button = document.getElementById('my-button');
  button.addEventListener('click', clickHandler);