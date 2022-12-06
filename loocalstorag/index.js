// setTimeout(function(){

//     console.log('one')
// },1)

// setTimeout(function(){

//     console.log('four')
// },1000)
// setTimeout(function(){

//     console.log('seven')
// },2000)

// console.log("two");

// for(var i=0;i<3;i++)
// {
//     console.log(i)
// }

//////////////////Ajax//////////////////////////

// var arr=[10,20,30];
//  var x=JSON.stringify(arr);
// // var ret=JSON.parse(x);
// // console.log(ret)

// localStorage.setItem("name","ali ahmed");
// localStorage.setItem("arr",x);

// localStorage.removeItem("name")
// function handelr()
// {
//     if(apiUser.readyState==4&&apiUser.status==200)
//     {
//      var users=JSON.parse(apiUser.responseText).users

//      localStorage.setItem("userData",JSON.stringify(users))
//      for(var i=0;i<users.length;i++)
//      {
//        var div=document.createElement("div");
//        div.innerHTML=`<span>${users[i].firstName}</span>
//        <span >${users[i].gender}</span>
//        <span>${users[i].age}</span>`
//        document.body.appendChild(div)
//      }
//     }
// }


// var apiUser=new XMLHttpRequest(); // object can make req to server

// apiUser.open("GET","https://dummyjson.com/users");

// apiUser.send();

// apiUser.onreadystatechange=handelr


// console.log(222);

// function sum(a,b)
// {
//     console.log(a+b);
// }


// sum(5,7)

//document.getElementById("mydiv").innerHTML="<h1>iti</h1>"

// var productApi=new XMLHttpRequest();
// productApi.open('GET',"https://dummyjson.com/products");
// productApi.send();
// productApi.onreadystatechange=function()
// {
//     if(productApi.readyState==4&&productApi.status==200)
//     {
//         var products=JSON.parse(productApi.responseText).products
//        for(var i=0;i<products.length;i++)
//        {
//         document.getElementById('mydiv').innerHTML+=`<div class="card">
//         <img src=${products[i].thumbnail
//         } alt="Denim Jeans" style="width:100%">
//         <h1>${products[i].title}</h1>
//         <p class="price">${products[i].price} $</p>
//         <p>${products[i].description}</p>
//         <p><button>Add to Cart</button></p>
//       </div>`
//        }
//     }
// }

var listUser=[];
var userName=document.getElementById("userName");
var passwod=document.getElementById("passwod");
var butn=document.getElementById("butn");


butn.addEventListener("click",function(){
    listUser.push({
        name:userName.value,
        pass:passwod.value
    })
     localStorage.setItem("userData",JSON.stringify(listUser));

})

// localStorage.removeItem("userData")

console.log(listUser);
