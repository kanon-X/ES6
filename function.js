let taxRate =()=>0.1;
 let getPrice = function(price, tax = price*taxRate()){ 
    return price+tax; 
}; 
let fullPrice = getPrice(500); 
console.log(fullPrice);