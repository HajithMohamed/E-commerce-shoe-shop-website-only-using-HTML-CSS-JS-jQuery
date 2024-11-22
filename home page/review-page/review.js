const review = document.querySelector(".reviews");
const button = document.querySelector(".pop-up-button");
const popUp = document.querySelector(".pop-up");
const form = document.querySelector("#form");
const name1 = document.getElementById("name");
const feedback = document.getElementById("Review");
const rating = document.getElementById("star");

function showForm() {
    button.style.display = "none";
    popUp.style.display = "block";
    review.style.display = "none";
}

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
    if (validateForm()) {
        addDiv();
    }
});

function addDiv() {
    popUp.style.display = "none";
    button.style.display = "block";

    const nameVal = name1.value;
    const feedbackVal = feedback.value;
    const ratingVal = rating.value;

    localStorage.setItem("name", nameVal);
    localStorage.setItem("feedBack", feedbackVal);
    localStorage.setItem("rating", ratingVal);

    const newReviewContent = `
        <div class="review">
            <h2>${localStorage.getItem("name")}</h2>
            <div class="rating">
                <p>Rating: <span id="rating">${localStorage.getItem("rating")}</span> Stars</p>
            </div>
            <div class="para">
                <p>${localStorage.getItem("feedBack")}</p>
            </div>
        </div>`;
    review.innerHTML += newReviewContent;
    review.style.display = "flex";
    name1.value = "";
    feedback.value = "";
    rating.value = "";
}

function closePopUp() {
    const popUp = document.getElementById("pop-up");
    popUp.style.display = "none";
}

function validateForm() {
    const nameVal = name1.value;
    const feedbackVal = feedback.value;
    const ratingVal = rating.value;

    let isValid = true;

    if (nameVal === "") {
        setError(name1, "Name is required");
        isValid = false;
    }

    if (feedbackVal === "") {
        setError(feedback, "Feedback is required");
        isValid = false;
    }
    if (ratingVal === "") {
        setError(rating, "Rating is required");
        isValid = false;
    } else if (isNaN(ratingVal)) {
        setError(rating, "Rating should be in numbers");
        isValid = false;
    }

    return isValid;
}

function setError(element, message) {
    const Element = element.parentElement;
    const errorElement = Element.querySelector(".error");
    errorElement.innerHTML = message;
}
