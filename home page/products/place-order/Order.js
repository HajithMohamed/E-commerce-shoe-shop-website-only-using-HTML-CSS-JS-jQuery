function showSlideBar(){
    const side_items=document.querySelector(".side_items")
    side_items.style.display="flex"
}
function hideSlideBar(){
    const side_items=document.querySelector(".side_items")
    side_items.style.display="none"
}

    function nullCheck(){
        const msg= document.getElementById("error")
        const button=document.querySelector("#btn")
        let error="Please fill this"
        const mailVal=document.getElementById("mail").value;
        if (!mailVal){
           msg.innerHTML=error;    
        } 
        button.addEventListener("click",()=>{
                if (!mailVal){
                    msg.innerHTML="E-mail is required"
                }
                else if(!validateEmail(mailVal)) {
                    msg.innerHTML="Pls enter the valid Email"
                }
                else{
                    alert("You have successfully subscribed");
                }
            }) 
    }
    const button=document.querySelector("#btn")
    
    
    console.log(button);
    button.addEventListener("click",()=>{
        const mailVal=document.querySelector("#mail").value;
        const msg= document.getElementById("error")
        if (!mailVal){
            msg.innerHTML="E-mail is required"
        }
        else if(!validateEmail(mailVal)) {
            msg.innerHTML="Pls enter the valid Email"
        }
        else{
            alert("You have successfully subscribed");
        }
    }) 
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const form=document.getElementById("form")
  const qty=document.getElementById("qty")
  const mobile=document.getElementById("mobile")
  const address=document.getElementById("address")
  
  form.addEventListener("submit", function(event) {

   if (!validateForm()) {
       event.preventDefault();
       
   }
   else{
        stockAmount();  
   }
})

  
  function validateForm(){
      let isValid = true;
  
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
      const input=document.querySelector("#size")
      const popUp = document.getElementById(`pop-up`);
      const span1=document.getElementById("pop-up-span1")
      const span2=document.querySelector("#si")
      const size=input.options[input.selectedIndex].value
      const qtyVal=qty.value
      const span3=document.querySelector("#price")

      const price=qtyVal*15
      span2.innerHTML=size
      span1.innerHTML = qtyVal;
      span3.innerHTML = price;
      popUp.style.display="block";




  }
  
  
  
  function closePopUp() {
      const popUp = document.getElementById(`pop-up`);
      popUp.style.display="none";
  }
  
  