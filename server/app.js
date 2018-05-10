const express = require('express')
const app = express()

const users = require('./routes/users/users')
const events = require('./routes/events/events')
// const sessions = require('./routes/sessions/sessions')

app.use(users)
app.use(events)
// app.use(sessions)

module.exports = app
