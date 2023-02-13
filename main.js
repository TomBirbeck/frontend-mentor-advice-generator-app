const id = document.querySelector('.advice-id')
const advice = document.querySelector('.advice')


const getQuote = async () => {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    id.textContent = data.slip.id
    advice.textContent = data.slip.advice
}

getQuote()