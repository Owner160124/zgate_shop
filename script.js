
const TELEGRAM_BOT_TOKEN = '6871659986:AAEW-CWXVp5ytTKV2y64FzBG_EpYsWZW_Lw'
const TELEGRAM_CHAT_ID = '@ZGate_Group'
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

const form = document.getElementById('form')

form.addEventListener('submit',async (e) => {
e.preventDefault()
const data = new FormData(form)
console.log(Object.fromEntries(data))
const text =
`
Заявка от ${data.get('name')}.
Номер телефона: ${data.get('phone')}.
Населенный пункт: ${data.get('city')}.
Отделение: ${data.get('post')}.
`

  try {
    const res = await fetch(API,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text
      })
    })
    if(res.ok) {
      const msg = document.getElementById('success')
      msg.style.display = 'block'
    }
    else throw new Error('Не удалось отправить заявку')
  } catch (error) {
    console.log(error)
    const msg = document.getElementById('error')
    msg.style.display = 'block'
  }
})