const pianoContainer = document.getElementById("piano")

const keyMap = [
    {note:"C4", key:"a", type:"white"},
    {note:"C#4", key:"w", type:"black"},
    {note:"D4", key:"s", type:"white"},
    {note:"D#4", key:"e", type:"black"},
    {note:"E4", key:"d", type:"white"},
    {note:"F4", key:"f", type:"white"},
    {note:"F#4", key:"t", type:"black"},
    {note:"G4", key:"g", type:"white"},
    {note:"G#4", key:"y", type:"black"},
    {note:"A4", key:"h", type:"white"},
    {note:"A#4", key:"u", type:"black"},
    {note:"B4", key:"j", type:"white"}
]

const keys = []

keyMap.forEach((item,index)=>{

    const key = document.createElement("div")

    if(item.type === "black"){
        key.classList.add("key","black-key")
    }else{
        key.classList.add("key")
    }

    key.dataset.note = item.note
    key.dataset.key = item.key

    key.innerHTML = `
        <span class="note">${item.note}</span>
        <span class="kbd">${item.key.toUpperCase()}</span>
    `

    key.addEventListener("click",()=>{
        playNote(item.note)
    })

    pianoContainer.appendChild(key)
    keys.push(key)

})