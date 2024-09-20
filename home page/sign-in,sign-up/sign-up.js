const form=document.querySelector("#form")

form.addEventListener("submit",(event)=>{
    if(!validateForm()){
        event.preventDefault()
    }
    else{
        window.location.href="Sign-In.html"
    }
})

function validateForm(){
    const user=document.querySelector("#name").value.trim()
    const mail=document.querySelector("#mail").value.trim()
    const pwd=document.querySelector("#pwd").value.trim()
    const cpwd=document.querySelector("#cpwd").value.trim()

    let isValid=true
    if (user == "" || mail =="" || pwd =="" || cpwd =="") {
        setError("All fields should be filled")
        isValid = false
    }
    else if(!validateEmail(mail)){
        setError("Please enter the valid Email")
        isValid=false
    }
    if(pwd!==cpwd){
        setError("Password dosn't match!")
        isValid=false
    }
    return isValid
}

function setError(message){
    const error=document.querySelector(".error")
    error.innerHTML=message
    error.style.display="block"

}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };