const submit = document.querySelector('.submit-button')
const card2 = document.querySelector('.thank-you-card')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const btn5 = document.querySelector('.btn5')
const check = document.querySelector('.check')



const sendForm = () => {
	card2.style.display = 'block'
}



const markBtn1 = () => {
	btn2.style.background = ''
	btn5.style.background = ''
	btn4.style.background = ''
	btn3.style.background = ''
	btn1.style.background = '#7c8798'
	number1()
}

const markBtn2 = () => {
	btn1.style.background = ''
	btn5.style.background = ''
	btn4.style.background = ''
	btn3.style.background = ''
	btn2.style.background = '#7c8798'
	number2()
}

const markBtn3 = () => {
	btn1.style.background = ''
	btn2.style.background = ''
	btn5.style.background = ''
	btn4.style.background = ''
	btn3.style.background = '#7c8798'
	number3()
}


const markBtn4 = () => {
	btn1.style.background = ''
	btn2.style.background = ''
	btn3.style.background = ''
	btn5.style.background = ''
	btn4.style.background = '#7c8798'
	number4()
}

const markBtn5 = () => {
	btn1.style.background = ''
	btn2.style.background = ''
	btn3.style.background = ''
	btn4.style.background = ''
	btn5.style.background = '#7c8798'
	number5()
}






const number1 = () => {
	check.textContent = btn1.value
}
const number2 = () => {
	check.textContent = btn2.value
}
const number3 = () => {
	check.textContent = btn3.value
}
const number4 = () => {
	check.textContent = btn4.value
}
const number5 = () => {
	check.textContent = btn5.value
}









btn1.addEventListener('click', markBtn1)
btn2.addEventListener('click', markBtn2)
btn3.addEventListener('click', markBtn3)
btn4.addEventListener('click', markBtn4)
btn5.addEventListener('click', markBtn5)
submit.addEventListener('click', sendForm)
