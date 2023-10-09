function menuPage() {
    const content = document.getElementById('content')
    content.innerHTML = ""

    const header = document.createElement('div')
    header.innerText = "Hello I am a Menu Header"

    const midder = document.createElement('div')
    midder.innerText = "Hello I am a Menu Midder"

    const footer = document.createElement('div')
    footer.innerText = "Hello I am a Menu footer"

    content.appendChild(header)
    content.appendChild(midder)
    content.appendChild(footer)
}

export { menuPage };