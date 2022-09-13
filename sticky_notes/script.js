const button = document.querySelector('button')
const content = document.querySelector('#content')

button.addEventListener('click', () => {
    
    const note = document.createElement('div')
    note.className = 'sticky'
    
    const removeButton = document.createElement('button')
    removeButton.className = 'remove-note'
    removeButton.innerText = 'Remove note'
    
    const noteColor = document.querySelector('.note.color')
    const noteText = document.querySelector('.note.text')
    
    note.style.backgroundColor = noteColor.value
    note.innerText = noteText.value
    
    if (noteText.value.length < 4) {
        alert('Your note is too short.')
    } else {
        content.appendChild(note)
        note.appendChild(removeButton)
    }
    
    noteText.value = ''
    noteColor.value = ''
})