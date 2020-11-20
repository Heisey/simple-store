import faker, { random } from 'faker'

const body = document.getElementById('cart-root')

const randomNumberWord = faker.random.number()

const cartBody = `
  <div>
    You have ${randomNumberWord} in your cart
  </div>
`

body.innerHTML = cartBody