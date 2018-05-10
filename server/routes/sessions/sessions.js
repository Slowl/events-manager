const router = require('../router')

// routes pour les sessions

router.get('/session-in', (req, res) => {

  res.end('connected')
  req.session.song = 'be bop a lula'

})

router.get('/session-out', (req, res) => {

  res.end(req.session.song)

})

module.exports = router
