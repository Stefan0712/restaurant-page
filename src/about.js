const content = document.getElementById("content");


function createAbout(){

    const content = document.getElementById("content");
    const oldMainContainer = document.querySelector(".main-container");
    oldMainContainer.remove();


    const mainContainer = document.createElement("div")
    mainContainer.classList.add('main-container');
    content.appendChild(mainContainer);


    const aboutContainer = document.createElement("div")
    aboutContainer.classList.add('about-container')
    mainContainer.appendChild(aboutContainer)

    const aboutText = document.createElement("h3");
    aboutText.classList.add("about-text")
    aboutText.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a turpis est. Etiam consectetur laoreet consequat. Morbi in dignissim dolor. Nunc eu tortor sed tellus varius congue et in ante. Nullam condimentum vulputate massa, ac faucibus est posuere id. Integer at diam at velit finibus consectetur euismod eget erat. Etiam pellentesque convallis ultricies. Integer vel sodales tortor. Donec quis luctus mi, a tempor eros. Proin eget eleifend quam. Donec ullamcorper elit tortor, sit amet tincidunt dolor mattis nec. Duis quis nisi vestibulum, luctus mauris eleifend, pharetra tellus. Nunc nulla libero, semper quis accumsan et, vehicula in magna. Phasellus finibus risus a odio ultricies ultricies. Nunc non facilisis sapien. Suspendisse scelerisque condimentum eros id congue."
    aboutContainer.appendChild(aboutText)

    const contactContainer = document.createElement('div')
    contactContainer.classList.add("contact-container")
    aboutContainer.appendChild(contactContainer)

    const email = document.createElement("div")
    email.innerText = "Email: not.fake@mail.com"

    const phone = document.createElement('div')
    phone.innerText = "Phone number: 142 3215 321"

    const social = document.createElement('div')
    social.innerText = "You can find us on Facebook: San Carlo or Instagram: @SanCarlo"

    contactContainer.appendChild(email)
    contactContainer.appendChild(phone)
    contactContainer.appendChild(social)


}


export {createAbout}