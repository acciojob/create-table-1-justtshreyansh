let table = document.querySelector("#sampleTable");
function insert_Row() {
    //Write your code here
	let tr = document.createElement('tr');
	let td1 = document.createElement('td');
	let td2 = document.createElement('td');
	td1.innerHTML += "New Cell1";
	td2.innerHTML += "New Cell2";
	console.log(td1);
	console.log(td2);
	tr.appendChild(td1);
	tr.appendChild(td2);
	table.prepend(tr);
	
  
  
}
