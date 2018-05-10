
import {eventCreate} from './components/eventCreate.js'
import {navBar} from './components/nav.js'


fetch('http://localhost:3000/events')
  .then(res => res.json())
  .then(events => {

    // Fonction pour sort les events par createdAt
    const sortEvents = (a, b) => {
      return b.createdAt - a.createdAt
    }

    // insert la data
    const eventContainer = document.querySelector('#eventContainer')
    eventContainer.innerHTML = events.sort(sortEvents).map(eventCreate).join('')

    console.log('loaded & executed')
  })
