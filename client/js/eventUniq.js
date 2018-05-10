
import {eventPart} from './components/eventPart.js'
import {eventAttendees} from './components/eventPart.js'
import {navBar} from './components/nav.js'

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
