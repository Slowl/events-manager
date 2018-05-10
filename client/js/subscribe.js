// navbar
import {navBar} from './components/nav.js'

const submit = document.getElementById('submit')
const container = document.getElementById('container')

const subscribe = () => {

  const mail = document.getElementById('mail').value
  const pseudo = document.getElementById('pseudo').value
  const password = document.getElementById('password').value

  const init = {
    method: 'post',
    body: JSON.stringify({
      mail,
      pseudo,
      password,
    })
  }

  fetch('http://localhost:3000/subscribe', init)
    .then(
      container.innerHTML =
      `<div class="submittedUser">

            Inscription réussie !

          </div>

          <a href="/"> Retour à l'accueil </a>
          `
    )
}

submit.addEventListener('click', subscribe)
