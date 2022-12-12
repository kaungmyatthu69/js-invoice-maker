//selector
let items=document.querySelector("#selectItems")
let inputform = document.querySelector('#InputForm')
let quantity =document.querySelector("#quantity")
let rows=document.querySelector("#rows")
let total=document.querySelector("#total");

//function

function del(event){
    if( confirm("Are u sure tp delete?") ){

        event.target.parentElement.parentElement.parentElement.remove();
        caltotal();
    }
  

}

function caltotal(){
    let costs=document.querySelectorAll(".costs");
    let totalcost=[...costs].reduce((pv,cv)=>pv+ Number(cv.innerText),0)
    total.innerText=totalcost;
}



//process
products.forEach((product)=>{
    let newOption = new Option(product.name,product.id);
    items.append(newOption);


})
inputform.addEventListener("submit",function(e){
    e.preventDefault();
    let currentitem= products.find((product)=>product.id==items.value);
    let cost= currentitem.price * quantity.valueAsNumber;
    console.log(currentitem);

    let newrow=document.createElement('tr');
    newrow.innerHTML=`
                  
                    <td >${currentitem.name}
                   <i class= "bi bi-trash3 text-danger del-btn " onClick="del(event)"></>
                    </td>  
                    <td class="text-end">${currentitem.price}</td>
                    <td class="text-end">${quantity.value}</td>
                    <td class="text-end costs">${cost}</td>

                    `;


rows.append(newrow);
 
inputform.reset();

caltotal();
    
})


    



