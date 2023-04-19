var btnIncreaseVintage = document.querySelector(".increase--btn--vintage");
var btnReduceVintage = document.querySelector('.reduce--btn--vintage');
var btnIncreaseShoes = document.querySelector(".increase--btn--shoes");
var btnReduceShoes = document.querySelector('.reduce--btn--shoes');

var valueShoes =  document.querySelector('.value--shoes');
var valuevintage =  document.querySelector('.value--vintage');


const initPriceVintage = 54.99;
const initPriceShoes = 74.99;
var newCount=0;
let tempTotal=0;
let temp =0;

function handleClick(){
  let count = 0;
  document.addEventListener("click",function(event) {
    
    
    if(event.target == btnIncreaseVintage ){
      count++;
      
      valuevintage.innerHTML = count;
      let newCount = count * 19;
      document.getElementById("shipping--price").innerHTML = "$"+newCount;
      var total = document.getElementById("total--price");
      var totalPrice = newCount + (initPriceVintage * count);
      total.innerHTML = "$"+totalPrice.toFixed(2);
      temp = newCount; //
      tempTotal = totalPrice; //

    }else if(event.target == btnReduceVintage){
        let newShippingFee  =0 ;
        let newTotalPrice = 0;
        count--;

        if(count>=0){
          valuevintage.innerHTML = count;
          newShippingFee = temp - 19;
          temp=newShippingFee ;
          document.getElementById("shipping--price").innerHTML = "$"+newShippingFee ;
          var total = document.getElementById("total--price");
          newTotalPrice = (tempTotal - initPriceVintage) - 19;
          tempTotal = newTotalPrice;
          total.innerHTML = "$"+newTotalPrice.toFixed(2);
        }else{
          valuevintage.innerHTML = 0
        }
        
    }else if(event.target == btnIncreaseShoes ){
      count++;
      
      valueShoes.innerHTML = count;
      let newCount = count * 19;
      document.getElementById("shipping--price").innerHTML = "$"+newCount;
      var total = document.getElementById("total--price");
      var totalPrice = newCount + (initPriceShoes * count);
      total.innerHTML = "$"+totalPrice.toFixed(2);
      temp = newCount; //
      tempTotal = totalPrice; //
    }else{
        let newShippingFee  =0 ;
        let newTotalPrice = 0;
        count--;

        if(count>=0){
          valueShoes.innerHTML = count;
          newShippingFee = temp - 19;
          temp=newShippingFee ;
          document.getElementById("shipping--price").innerHTML = "$"+newShippingFee ;
          var total = document.getElementById("total--price");
          newTotalPrice = (tempTotal - initPriceShoes) - 19;
          tempTotal = newTotalPrice;
          total.innerHTML = "$"+newTotalPrice.toFixed(2);
        }else{
          valuevintage.innerHTML = 0
        }
        
    }
    
  });

}
  handleClick();