
const synth = new Tone.Synth().toDestination()
let scale = 4;

document.getElementById('scale-value').textContent = scale;

function playNote(note, inscale = scale) {
    synth.triggerAttackRelease(`${note}${inscale}`,'8n')
    document.getElementById(note).style.background = '#33d6a6'
    setTimeout(() => {
        document.getElementById(note).style.background = 'white'
    },200)
}




document.onkeydown = function(e) {
    
    e = e || window.event
    var key = e.which || e.keyCode
    if (key === 83) {
        playNote('C')
    }
    if (key === 68) {
        playNote('D')
    }
    if (key === 70) {
        playNote('E')
    }
    if (key === 71) {
        playNote('F')
    }
    if (key === 72) {
        playNote('G')
    }
    if (key === 74) {
        playNote('A')
    }
    if (key === 75) {
        playNote('B')
    }
    if (key === 37) {
        if (scale >1)
            scale = scale-1
        else
            alert('The minimum scale is 1')
    }
    if (key === 39) {
        if (scale < 8)
            scale = scale +1
        else
            alert('The maximum scale is 8')
    }
    document.getElementById('scale-value').textContent = scale;
}
