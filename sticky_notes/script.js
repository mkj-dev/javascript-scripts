const button = document.querySelector('button')
const content = document.querySelector('#content')

button.addEventListener('click', () => {
    
    const note = document.createElement('div')
    note.className = 'sticky'
    
    const noteColor = document.querySelector('.note.color')
    const noteText = document.querySelector('.note.text')
    
    note.style.backgroundColor = noteColor.value
    note.innerText = noteText.value

    noteColor.value = ''
    noteText.value = ''

    content.appendChild(note)
})