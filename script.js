let firstChoice= document.querySelector(".Choice1").value;
let Comedy=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvfz1DOvBjM-U6SEVZ8N9sZ15136JG07BQg&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yzrSlye_TiTiC1YZoE2-QQAmI2odCU27Ig&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfqQwaQ8r75SEdfkIVIKsks03IUhWgs1IX9w&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyqq9m7KVtRv8KHPM7ec6br4760NicKT_Cmg&usqp=CAU"];
let Action=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ARXT0KzSVXnvGHy4HtUC9hdgYFmlWQEfTA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp9ZT7TNRfQf3Z6LtaUuKczw9XqKi_TtdgWQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwYFfgvyVkNq46w9Xbmfj5mg0qhnIHf4esqg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtTzq3fnwgKnzPCpaGd2rZRLJa4QYLjwtcOQ&usqp=CAU"];
let Horror=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYVRwHqYsvL7AGtxc4oUVjWxn6972qxHruLA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcwExcCZMlZWp4m98kwbnMPNrOwoZQAAQvHA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi27rtL119oJtGSNpujrCj8mmMYzeROxkJ_A&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrflsZ1xREBVBHuUQDsPvQaUX1mfOmjBvd_w&usqp=CAU"];
let Films= document.querySelector(".display");
// Make sure to declare your HTML elements as variables! 

// Submit Button 
let submitButton = document.querySelector("button");
submitButton.onclick = function() {
  let firstChoice= document.querySelector(".Choice1").value;
  if(firstChoice=== "Comedy"){
    for (let films of Comedy){
     
      Films.insertAdjacentHTML("beforeend", "<img src= " + films + ">");
      
    }
  } else if (firstChoice=== "Action"){
    for (let films of Action) {
     Films.insertAdjacentHTML("beforeend", "<img src= " + films + ">"); 
    }
  }
  else if(firstChoice==="Horror"){
    for (let films of Horror) {
      
     Films.insertAdjacentHTML("beforeend", "<img src= " + films + ">");
      const audio = new Audio("")
  }
  }
};
let counter=0;

let SugBut= document.querySelector(".suggest");
SugBut.onclick= function(){
  let Suggestion= document.querySelector(".Choice2").value;
  Comedy.push(Suggestion);
  Action.push(Suggestion);
  Horror.push(Suggestion);
  console.log(Action)
}