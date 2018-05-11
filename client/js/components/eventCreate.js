export const eventCreate = events => {
  const eventDateRaw = events.date

  // assignation class color
  let eventState = ' '
  const formatedDate = eventDateRaw.split('-')
  const eventDate = formatedDate[1] + '/' + formatedDate[2] + '/' + formatedDate[0]
  const timeStampEvent = new Date(eventDate).getTime()
  const currentDate = Date.now()

  if (currentDate > timeStampEvent) {
    eventState = 'over'
  } else if (currentDate < timeStampEvent){
    eventState = 'available'
  }
  //

  return `
    <a id="event_element" class="event_element" href="eventPart.html?id=${events.id}">
        <div class="date ${eventState}"> ${moment(eventDateRaw).format('LL')} </div>
        <div class="event_title">
          ${events.title}
        </div>
    </a>
`
}
