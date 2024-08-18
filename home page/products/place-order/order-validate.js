const form=document.getElementById("form")
const qty=document.getElementById("qty")
const mobile=document.getElementById("mobile")
const address=document.getElementById("address")


form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    if (validateForm()) {
        stockAmount();  // Show the popup if the form is valid
    }
})


function validateForm(){

    let isValid = true;

    const qtyVal=qty.value
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
    } else if (mobileVal.length !== 10) {
        setError(mobile, "Mobile Number must be 10 digits");
        isValid = false;
    } else {
        setSuccess(mobile);
    }

    if (addressVal === "") {
        setError(address, "Address is required");
        isValid = false;
    } else {
        setSuccess(address)
    
}
}
    
    


function setError(element,message){
    const Element=element.parentElement
    const errorElement=Element.querySelector(".error")
    errorElement.innerTHTML=message

    errorElement.classList.add("fail")
    errorElement.classList.remove("success")

}

function setSuccess(element){
    const Element=element.parentElement
    const errorElement=Element.querySelector(".error")
    errorElement.innerTHTML=""

    errorElement.classList.remove("fail")
    errorElement.classList.add("success")
    

}
function stockAmount() {
    const popUp = document.getElementById("pop-up");
   // const span = document.getElementById(`product`);
    //const qty = parseInt(span.innerHTML);
   // let value = qty - 1;

    // if (value >= 0) {
    //     span.innerHTML = value;
    //     let initialStock=20;
    //     document.getElementById(`pop-up-span${productId}`).innerHTML = initialStock - value;
        popUp.style.display="block";
    

    // if (value <= 0) {
    //     alert("This product is out of stock");
    // }
    
}

function closePopUp() {
    const popUp = document.getElementById(`pop-up`);
    popUp.style.display="none";
}

