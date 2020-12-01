

function newItem(){
  brand = localStorage['brand'];
  price = localStorage['price'];
  console.log(brand + " " + price);
  
  var tr = document.createElement('tr');
  
  var td1 = document.createElement('td');
  td1.innerHTML = brand;
  var td2 = document.createElement('td');
  td2.innerHTML = price;
  
  tr.appendChild(td1);
  tr.appendChild(td2);
  
  const table1 = document.getElementsByClassName('table');
  table1[0].appendChild(tr);

}

