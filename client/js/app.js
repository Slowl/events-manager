// navbar
import {navBar} from './components/nav.js'

// event injection in homepage
import {eventCreate} from './components/eventCreate.js'

// event injection details in each event
import {eventPart} from './components/eventPart.js'
import {eventAttendees} from './components/eventPart.js'


/***** FETCHS & JS EVENTS ******/

// HOMEPAGE
fetch('http://localhost:3000/events')
  .then(res => res.json())
  .then(events => {
    const eventContainer = document.querySelector('#eventContainer')
    eventContainer.innerHTML = events.map(eventCreate).join('')

    console.log('loaded & executed')
  })


// DETAILLED EVENT
const params = new URLSearchParams(window.location.search)
const id = params.get('id')

fetch(`http://localhost:3000/events/${id}`)
  .then(res => res.json())
  .then(event => {
    const eventContainer = document.querySelector('.container')
    eventContainer.innerHTML = eventPart(event)

    const attendees = document.querySelector('#attendees')
    attendees.innerHTML = eventAttendees(event)

    console.log(eventContainer)
    console.log(attendees)
  })

// EVENT SUBMIT
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
      console.log(init.body)
    )

  container.innerHTML =

    `<div class="submittedEv">
      L'événement a bien été ajouté !
    </div>

    <a href="/"> Retour à l'accueil </a>
    `
}

submit.addEventListener('click', sendEvents)
