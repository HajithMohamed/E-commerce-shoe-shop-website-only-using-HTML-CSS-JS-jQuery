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
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


  let global=1

//const post=document.querySelector(".post")
const review = document.querySelector(".review");
const post=document.querySelector(".post")
const button=document.querySelector(".pop-up-button")
const popUp = document.querySelector(".pop-up")
const form=document.querySelector("#form")
const name=document.querySelector("#name")
const feedback=document.querySelector("#feedback")
const rating=document.querySelector("#star")

function showForm() {
    
        button.style.display="none"
        popUp.style.display="block";
        post.style.display="none"
        review.style.display="none"
        global++
    }

     function thankyoumsg(){
        post.style.display="block"
        popUp.style.display="none"
        button.style.display="none"

    }
    function editcontent(){
        post.style.display="none"
        popUp.style.display="block"
        button.style.display="none"

    }

    function addDiv(){
        post.style.display="none"
        popUp.style.display="none"
        button.style.display="block"

        const name = document.getElementById("name").value;
        const feedback = document.getElementById("review").value;
        const rating = document.getElementById("star").value;

        const newReview =document.querySelector(".review")
        review.innerHTML=`<div class=".review${global}"
        <h2>${name}</h2>
        <div class="para">
            ${review}
        </div>
        <div class="rating">
            <p>Rating   <span id="rating">${rating}</span></p>
        </div>`
        review.appendChild(newReview);

    }


function closePopUp() {
    const popUp = document.getElementById(`pop-up`);
    popUp.style.display="none";

}
