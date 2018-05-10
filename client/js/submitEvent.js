import {
  navBar
} from './components/nav.js'

const submit = document.getElementById('submit')
const container = document.getElementById('container')

const sendEvents = () => {

  const title = document.getElementById('title').value
  const date = document.getElementById('date').value
  const hours = document.getElementById('hours').value
  const address = document.getElementById('address').value

  const init = {
    method: 'post',
    body: JSON.stringify({
      title,
      date,
      hours,
      address
    })
  }

  fetch('http://localhost:3000/events', init)
    .then(
      container.innerHTML =
      `<div class="submittedEv">

            L'événement a bien été ajouté !

          </div>

          <a href="/"> Retour à l'accueil </a>
          `
    )
}

submit.addEventListener('click', sendEvents)
