export const eventPart = event => {
  return `

      <div class="intro-title">
        ${event.title}
      </div>

      <div id="date" class="event_info">
        ${moment(event.date).format('LL')} - ${event.hours}
      </div>

      <div id="address" class="event_info">
        ${event.address}
      </div>

      <div id="attendees" class="event_info">

      </div>


      <a href="#">  Participer  </a>
`
}

export const eventAttendees = attendees => {
  return `
    <p>${attendees.attendees}</p>

  `
}

// comment creer dynamiquement chaque page avec une id unique lié à l'event ?
