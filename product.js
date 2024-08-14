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
           //console.log(msg);    
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
    button.addEventListener("submit",()=>{
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

  function stockAmount(productId) {
    const popUp = document.getElementById(`pop-up${productId}`);
    const span = document.getElementById(`product${productId}`);
    const qty = parseInt(span.innerHTML);
    let value = qty - 1;

    if (value >= 0) {
        span.innerHTML = value;
        let initialStock=20;
        document.getElementById(`pop-up-span${productId}`).innerHTML = initialStock - value;
        popUp.style.display="block";
    }

    if (value <= 0) {
        alert("This product is out of stock");
    }
    
}

function closePopUp(productId) {
    const popUp = document.getElementById(`pop-up${productId}`);
    popUp.style.display="none";
}
