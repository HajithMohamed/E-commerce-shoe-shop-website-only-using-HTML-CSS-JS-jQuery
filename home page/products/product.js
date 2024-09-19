
  function stockAmount1(productId) {
    let productStock =0;
    let carded_stock=0;
    const initial_stock=parseInt(document.getElementById(`product${productId}`).value)
    const popUp = document.getElementById(`pop-up${productId}`);
    productStock = initial_stock-1;
    carded_stock=initial_stock-productStock;

    document.getElementById(`pop-up-span${productId}`).innerHTML =  carded_stock;

    
    popUp.style.display = "block"; 
}
function closePopUp1(productId) {
    const popUp = document.getElementById(`pop-up${productId}`);
    popUp.style.display="none";
}

//order products page's js
const form=document.getElementById("form")
const qty=document.getElementById("qty")
const mobile=document.getElementById("mobile")
const address=document.getElementById("address")
const size=document.querySelector("#size")

form.addEventListener("Submit",(event)=>{
    if (!validateForm()) {
        event.preventDefault();
        
     }
     else{
         stockAmount();  
     }
})

function validateForm(){
  let isValid = true;
  const sizeVal=size.options[size.selectedIndex].value
  const qtyVal=qty.value.trim()
  const mobileVal=mobile.value.trim()
  const addressVal=address.value.trim()

  if(qtyVal===""){
      setError(qty,"Product count is required");
      isValid = false;
  }
  else if(isNaN(qtyVal)){
      setError(qty,"Please enter the count in number");
      isValid = false;
  }else{
      setSuccess(qty);
  }
  if (mobileVal === "") {
      setError(mobile, "Mobile Number is required");
      isValid = false;
  } else if (isNaN(mobileVal)) {
      setError(mobile, "Mobile Number must be in numbers");
      isValid = false;
  } else if (mobileVal.length !=10) {
    setError(mobile, "Mobile Number must be 10 digits");
    isValid = false;
  }else {
      setSuccess(mobile);
  }

  if (addressVal === "") {
      setError(address, "Address is required");
      isValid = false;
  } else {
      setSuccess(address)
    }
if(sizeVal==="Select the size:"){
    setError(size, "Please select any size");
    isValid = false;
} else {
    setSuccess(address)
  }
  return isValid
}
  
function setError(element,message){
  const Element=element.parentElement
  const errorElement=Element.querySelector(".error")
  errorElement.innerHTML=message

  errorElement.classList.add("fail")
  errorElement.classList.remove("success")

}

function setSuccess(element){
  const Element=element.parentElement
  const errorElement=Element.querySelector(".error")
  errorElement.innerHTML=""

  errorElement.classList.remove("fail")
  errorElement.classList.add("success")
  stockAmount();

}
function stockAmount() {        
    const input = document.querySelector("#size");
    const popUp = document.getElementById(`pop-up`);
    const span1 = document.getElementById("pop-up-span1");
    const span2 = document.querySelector("#si");
    const span3 = document.querySelector("#price");
    const span4 = document.querySelector("#Payment");
    
    const card = document.querySelector("#card");
    const cash = document.querySelector("#cash");
    
    const sizeVal = input.options[input.selectedIndex].value;
    const qtyVal = document.getElementById("qty").value;
    
    if (card.checked) {
        span4.innerHTML = "Card";
    } else if (cash.checked) {
        span4.innerHTML = "Cash on delivery";
    }

    const price = qtyVal * 15;
    span2.innerHTML = sizeVal;
    span1.innerHTML = qtyVal;
    span3.innerHTML = price;
    popUp.style.visibility = "visible";
    popUp.style.transform = "translate(120%,-130%)scale(1)";
}
function closePopUp() {
  const popUp = document.getElementById(`pop-up`);
  popUp.style.display="none";
}

