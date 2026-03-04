const synth = new Tone.Synth().toDestination()

function playNote(note){
    synth.triggerAttackRelease(note,"8n")
}