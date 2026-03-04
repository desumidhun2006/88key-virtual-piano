const synth = new Tone.Synth().toDestination();

const keys = document.querySelectorAll(".key");

function playNote(note){
    synth.triggerAttackRelease(note,"8n");
}

keys.forEach(key => {

    key.addEventListener("click", () => {
        playNote(key.dataset.note);
    });

});

document.addEventListener("keydown", (e) => {

    keys.forEach(key => {

        if(e.key === key.dataset.key){
            playNote(key.dataset.note);
        }

    });

});

document.addEventListener("keydown",(e)=>{

    keys.forEach(key=>{

        if(e.key === key.dataset.key){

            key.classList.add("active")
            playNote(key.dataset.note)

        }

    })

})

document.addEventListener("keyup",(e)=>{

    keys.forEach(key=>{

        if(e.key === key.dataset.key){

            key.classList.remove("active")

        }

    })

})