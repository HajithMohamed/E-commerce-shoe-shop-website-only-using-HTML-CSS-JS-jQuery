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
    const button3 = document.querySelector("#btn");
    let error = "Please fill this";
    const mailVal = document.getElementById("mail").value;
    if (!mailVal) {
        msg.innerHTML = error;
    }
    button3.addEventListener("click", () => {
        const mailVal = document.getElementById("mail").value; // Move inside the event listener
        if (!mailVal) {
            msg.innerHTML = "E-mail is required";
        } else if (!validateEmail(mailVal)) {
            msg.innerHTML = "Pls enter the valid Email";
        } else {
            alert("You have successfully subscribed");
        }
    });
}

const button1 = document.querySelector("#form");
button1.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
    const mailVal = document.querySelector("#mail").value;
    const msg = document.getElementById("error");
    if (!mailVal) {
        msg.innerHTML = "E-mail is required";
    } else if (!validateEmail(mailVal)) {
        msg.innerHTML = "Pls enter the valid Email";
    } else {
        alert("You have successfully subscribed");
    }
});

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};