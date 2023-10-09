
function homePage() {
    const content = document.getElementById('content')
    content.innerHTML = ""

    const header = document.createElement('div')
    header.innerText = "Hello I am a Header"

    const midder = document.createElement('div')
    midder.innerText = "Hello I am a Midder"

    const footer = document.createElement('div')
    footer.innerText = "Hello I am a footer"

    content.appendChild(header)
    content.appendChild(midder)
    content.appendChild(footer)
}

export { homePage };
