
	// function run() {
	// 	var toDo = new XMLHttpRequest();
	// 	var url = 'https://jsonplaceholder.typicode.com/todos';
	// 	// toDo.open("GET", url);
	// 	toDo.open("GET", url, true);
	// 	toDo.onreadystatechange = function () {
	// 		if (this.readyState == 4 && this.status == 200) {
	// 			console.log(this.responseText);
	// 		}
	// 	}
	// 	toDo.send();
	// }
	// run();



	
		// var toDo = new XMLHttpRequest();
		// var url = 'https://jsonplaceholder.typicode.com/todos';
		// toDo.open("GET", url);
        // toDo.send();
		// toDo.onreadystatechange = function () {
		// 	if (toDo.readyState == 4 && toDo.status == 200) {
		// 		console.log(toDo.responseText);
		// 	}
        // }
		

	

var productApi=new XMLHttpRequest();
productApi.open('GET',"https://dummyjson.com/todos");
productApi.send();
productApi.onreadystatechange=function()
{
    if(productApi.readyState==4&&productApi.status==200)
    {

        // console.log(productApi.responseText);
        var products=JSON.parse(productApi.responseText).todos;
       for(var i=0;i<products.length;i++)
       {
        // document.getElementById('mydiv').innerHTML

        
        if(products[i].completed==true)
        {

 
            var cartoona;
            // console.log("tmam");
            cartoona+=`
            
            <ul id="myUL">
            <li id="in1">${products[i].id}</li>
            <li id="in2">${products[i].todo}</li>
            <li id="in3">${products[i].completed}</li>
            <li id="in4">${products[i].userId}</li>
          </ul>
            `;
        
            
        }
        document.getElementById("container").innerHTML=cartoona;
       }
        //  console.log(productApi.responseText);

    }
}
