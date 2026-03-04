document.addEventListener("keydown", (e)=>{

    keys.forEach(key=>{

        if(e.key === key.dataset.key){

            key.classList.add("active")
            playNote(key.dataset.note)

        }

    })

})

document.addEventListener("keyup", (e)=>{

    keys.forEach(key=>{

        if(e.key === key.dataset.key){

            key.classList.remove("active")

        }

    })

})