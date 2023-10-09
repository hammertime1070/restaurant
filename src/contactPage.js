function contactPage() {
    const content = document.getElementById('content')
    content.innerHTML = ""

    const header = document.createElement('div')
    header.innerText = "Hello I am a contact Header"

    const midder = document.createElement('div')
    midder.innerText = "Hello I am a contact Midder"

    const footer = document.createElement('div')
    footer.innerText = "Hello I am a contact footer"

    content.appendChild(header)
    content.appendChild(midder)
    content.appendChild(footer)
}

export { contactPage };