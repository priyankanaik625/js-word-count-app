
const textarea = document.getElementById('txtid');
let count = document.getElementById('count');

textarea.addEventListener('input', (Event) =>{
    const input = Event.target.value;
    count.textContent = input.split(' ').length;
})

