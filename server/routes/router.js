const express = require('express')
const router = express.Router()
const path = require('path')
const Session = require('express-session')
const FileStore = require('session-file-store')(Session)

// passport + google oauth2
const passport = require('passport')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy

// middlewares
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})


// passport + google oauth2



//




// parse data on post req
router.use((req, res, next) => {
  if (req.method === 'GET') return next()

  let acc = ''
  req.on('data', data => {
    acc += data
  })

  req.on('end', () => {
    try { // gerrage d'err si requete invalide
      req.body = JSON.parse(acc)
      next()
    } catch (err) {
      next(err)
    }

  })

})

// init sessions
// router.use(Session({
//     store: new FileStore({
//         path: path.join(__dirname, 'sessions/tmp'),
//         encrypt: true
//     }),
//     secret: 'Super Secret !',
//     resave: true,
//     saveUninitialized: true,
//     name : 'sessionId'
// }))

// route racine
router.get('/', (req, res) => {
  res.send('wtf r u doin here bro')
})

module.exports = router
