function showSlideBar() {
    const side_items = document.querySelector(".side_items");
    side_items.style.display = "flex";
}

function hideSlideBar() {
    const side_items = document.querySelector(".side_items");
    side_items.style.display = "none";
}

function nullCheck() {
    const msg = document.getElementById("error");
    const button = document.querySelector("#btn");
    const mailVal = document.getElementById("mail").value;
    
    if (!mailVal) {
        msg.innerHTML = "Please fill this";
    }

    button.addEventListener("click", () => {
        if (!mailVal) {
            msg.innerHTML = "E-mail is required";
        } else if (!validateEmail(mailVal)) {
            msg.innerHTML = "Please enter a valid Email";
        } else {
            alert("You have successfully subscribed");
            msg.innerHTML = ""; // Clear the error message
        }
    });
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};



const review = document.querySelector(".reviews");
const post = document.querySelector("#post");
const button = document.querySelector(".pop-up-button");
const popUp = document.querySelector(".pop-up");
const form=document.querySelector("#form")
const name1 = document.getElementById("name")
const feedback = document.getElementById("review")
const rating = document.getElementById("star")

console.log();


function showForm() {
    button.style.display = "none"
    popUp.style.display = "block"
    review.style.display = "none"
    
}

form.addEventListener("submit",(event)=> {
    if(validateForm()){
        event.preventDefault()
         addDiv()
    }
    else
        event.preventDefault()
    
})

function addDiv() {
    let global = 2;
    global++;
    popUp.style.display = "none";
    button.style.display = "block";

    const nameVal =name1.value;
    const feedbackVAl1 =feedback.value;
    const ratingVAL = rating.value;

    console.log(feedbackVAl1)

    const newReviewContent = `
    <div class="review" id="Review${global}"
        <h2>${nameVal}</h2>
         <div class="rating">
            <p>Rating: <span id="rating">${ratingVAL}</span> Stars</p>
        </div>
        <div class="para">
            ${feedbackVAl1}
        </div>
       `;

    review.innerHTML = newReviewContent;
    review.style.display = "block";
}

function closePopUp() {
    const popUp = document.getElementById(`pop-up`);
    popUp.style.display = "none";
}
function validateForm(){
    const nameVal =name1.value;
    const feedbackVAl =review.value;
    const ratingVAL = rating.value;
    
    let isValid = true;

    if(nameVal===""){
        setError(name1,"Name is required");
        isValid = false;
    }
    
    if (feedbackVAl==="") {
        setError(review, "Feedback is required");
        isValid = false;
    } 
    if (ratingVAL==="") {
        setError(rating, "Rating is required");
        isValid = false;
    } else if(isNaN(ratingVAL)){
        setError(rating, "Rating should be in numbers");
        isValid = false;

       
    }
    
    return isValid
}
function setError(element,message){
    const Element=element.parentElement
    const errorElement=Element.querySelector(".error")
    errorElement.innerHTML=message
}
