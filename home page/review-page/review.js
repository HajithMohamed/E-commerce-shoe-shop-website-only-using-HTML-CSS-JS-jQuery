
const review = document.querySelector(".reviews");
const post = document.querySelector("#post");
const button = document.querySelector(".pop-up-button");
const popUp = document.querySelector(".pop-up");
const form=document.querySelector("#form")
const name1 = document.getElementById("name")
const feedback = document.getElementById("Review")
const rating = document.getElementById("star")
let global=2

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
    
    
    popUp.style.display = "none";
    button.style.display = "block";

    const nameVal =name1.value;
    const feedbackVAl1 =feedback.value;
    const ratingVAL = rating.value;

    console.log(feedbackVAl1)

    const newReviewContent = `
    <div class="review" >
        <h2>${nameVal}</h2>
         <div class="rating">
            <p>Rating: <span id="rating">${ratingVAL}</span> Stars</p>
        </div>
        <div class="para">
            <p>${feedbackVAl1}</p>
        </div>
    </div>
       `;
        console.log(global);
        
    review.innerHTML += newReviewContent;
    review.style.display = "flex";
}

function closePopUp() {
    const popUp = document.getElementById(`pop-up`);
    popUp.style.display = "none";
}
function validateForm(){
    global++;
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
