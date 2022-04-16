const content = document.getElementById("content");

function createRezervations(){
    const oldMainContainer = document.querySelector(".main-container");
    oldMainContainer.remove();

    //creating the container for rezervation page
    const mainContainer = document.createElement('div');
    mainContainer.classList.add("main-container");
    content.appendChild(mainContainer);

    //creating the form

    const rezForm = document.createElement('form');
    rezForm.classList.add("rez-form")
    mainContainer.appendChild(rezForm)

    //inputs and labels
    const fullNameLabel = document.createElement('label')
    fullNameLabel.innerText = "Full name"
    const fullName = document.createElement("input")
    fullName.setAttribute("placeholder","Enter your first name and last name")

    const emailLabel = document.createElement("label")
    emailLabel.innerText = "Email"
    const email = document.createElement("input")
    email.setAttribute("placeholder","name@mail.com")

    const phoneLabel = document.createElement("label")
    phoneLabel.innerText = "Phone number"
    const phone = document.createElement("input")
    phone.setAttribute("placeholder","123 456 789")

    const dateLabel = document.createElement("label")
    dateLabel.innerText = "Date of reservation"
    const date = document.createElement("input")
    date.setAttribute("type","date");

    const submitBtn = document.createElement("button")
    submitBtn.innerHTML = "Submit"


    rezForm.appendChild(fullNameLabel);
    rezForm.appendChild(fullName);
    rezForm.appendChild(emailLabel);
    rezForm.appendChild(email);
    rezForm.appendChild(phoneLabel);
    rezForm.appendChild(phone);
    rezForm.appendChild(dateLabel);
    rezForm.appendChild(date);
    rezForm.appendChild(submitBtn)









}


export {createRezervations};