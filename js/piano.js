const pianoContainer = document.getElementById("piano")

const keyMap = [
    {note:"C4", key:"a"},
    {note:"D4", key:"s"},
    {note:"E4", key:"d"},
    {note:"F4", key:"f"},
    {note:"G4", key:"g"},
    {note:"A4", key:"h"},
    {note:"B4", key:"j"}
]

const keys = []

keyMap.forEach(item => {

    const key = document.createElement("div")
    key.classList.add("key")

    key.dataset.note = item.note
    key.dataset.key = item.key

    key.innerHTML = `
        <span class="note">${item.note}</span>
        <span class="kbd">${item.key.toUpperCase()}</span>
    `

    key.addEventListener("click", () => {
        playNote(item.note)
    })

    pianoContainer.appendChild(key)
    keys.push(key)

})