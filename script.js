const submit = document.querySelector('.submit-button')
const numberBtn = document.querySelector('.circle-buttons')
const card2 = document.querySelector('.thank-you-card')


const sendForm = () => {
    card2.style.display = 'block'
}



const markBtn = () => {
    console.log(numberBtn);
}




numberBtn.addEventListener('click', markBtn)
submit.addEventListener('click', sendForm)