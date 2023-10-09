import { homePage } from "./homePage";
import { menuPage } from "./menuPage";
import { contactPage } from "./contactPage";


const homeButton = document.createElement('button')
const menuButton = document.createElement('button')
const contactButton = document.createElement('button')

homeButton.addEventListener('click', homePage)
menuButton.addEventListener('click', menuPage)
contactButton.addEventListener('click', contactPage)


const buttonDiv = document.getElementById("buttonDiv")
buttonDiv.appendChild(homeButton)
buttonDiv.appendChild(menuButton)
buttonDiv.appendChild(contactButton)



homePage()