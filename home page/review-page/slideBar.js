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

let global = 1;

const review = document.querySelector(".review");
const post = document.querySelector(".post");
const button = document.querySelector(".pop-up-button");
const popUp = document.querySelector(".pop-up");

function showForm() {
    button.style.display = "none"
    popUp.style.display = "block"
    post.style.display = "none"
    review.style.display = "none"
    console.log(post);
    
    global++;
}

function thankyoumsg() {
    console.log("Displaying post div..."); // Debugging line
    post.style.display = "block"
    popUp.style.display = "none"
    button.style.display = "none"
}

document.querySelector("#form").addEventListener("submit", thankyoumsg);

function editcontent() {
    post.style.display = "none";
    popUp.style.display = "block";
    button.style.display = "none";
}

function addDiv() {
    post.style.display = "none";
    popUp.style.display = "none";
    button.style.display = "block";

    const name = document.getElementById("name").value;
    const feedback = document.getElementById("review").value;
    const rating = document.getElementById("star").value;

    const newReviewContent = `
        <h2>${name}</h2>
        <div class="para">
            ${feedback}
        </div>
        <div class="rating">
            <p>Rating: <span id="rating">${rating}</span></p>
        </div>
    `;

    review.innerHTML = newReviewContent;
    review.style.display = "block";
}

function closePopUp() {
    const popUp = document.getElementById(`pop-up`);
    popUp.style.display = "none";
}
