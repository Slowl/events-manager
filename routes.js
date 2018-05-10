module.exports = app => {
  const event_1 = require('../../mocks/events/1.json')
  const event_2 = require('../../mocks/events/2.json')
  const event_3 = require('../../mocks/events/3.json')
  const user_1 = require('../../mocks/users/1.json')
  const user_2 = require('../../mocks/users/2.json')
  const user_3 = require('../../mocks/users/3.json')
  const user_4 = require('../../mocks/users/4.json')

  const events = [
    event_1,
    event_2,
    event_3
  ]

  const users = [
    user_1,
    user_2,
    user_3,
    user_4
  ]

  app.get('/', (req, res) => {
    res.send('API is working')
  })

  app.get('/events', (req, res) => {
    res.json(events)
  })

  app.get('/events:id', (req, res) => {
    res.json(events)
  })

  app.get('/users', (req, res) => {
    res.json(users)
  })
}
