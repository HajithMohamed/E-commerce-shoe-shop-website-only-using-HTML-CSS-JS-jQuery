const form=document.querySelector("#form")
const user=document.querySelector("#user")
const pwd=document.querySelector("#pwd")

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  form.addEventListener("submit",(event)=>{
    if(!validateForm()){
        event.preventDefault()
    }
    else{
        window.location.href= "/home page/home.html"
    }
})

function validateForm(){
    const userval=user.value.trim()
    const pwdVal=pwd.value.trim()

    let isValid=true;
    if(userval===""||pwdVal==""){
        setError("All fields should be filled")
        isValid = false
    }
    else if(!validateEmail(userval)){
        setError("Enter a valid e-mail!")
        isValid = false
    }
}

function setError(message){
    const error=document.querySelector(".error")
    error.innerHTML=message
    error.style.display="block"

}

const iconpwd=document.getElementById("icon-pwd")

iconpwd.addEventListener("click",()=>{
  const pwd=document.querySelector("#pwd")

  if(pwd.type=="password"){
      pwd.type="text"
      iconpwd.src="eye-open.png"
  }
  else{
      pwd.type="password"
      iconpwd.src="eye-close.png"
  }
})
