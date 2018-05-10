const router = require('../router')
const fs = require('fs')
const path = require('path')
const util = require('util')
const bodyParser = require('body-parser')

// bodyParser
router.use(bodyParser.urlencoded({
  extended: true
}))
router.use(bodyParser.json())

// promisify du fs
const readFile = util.promisify(fs.readFile)
const readdir = util.promisify(fs.readdir)
const writeFile = util.promisify(fs.writeFile)

// routes des events

//all events GET
router.get('/events', (req, res) => {

  const eventsDir = path.join(__dirname, '../../../mocks/events/')

  readdir(eventsDir)
    .then(jsons => {
      const jsonsPath = jsons.map(json => path.join(eventsDir, json)) // path de chaque element du dossier
      const allJsons = jsonsPath.map(jsonPath => readFile(jsonPath, 'utf8')) // lecture de chaque element du dossier

      // notre promise avec les valeurs du futur sur lesquel on peut faire des truc coquins
      Promise.all(allJsons)
        .then(allJsonsVal => { // valeur de each jsons en text dans var
          res.json(allJsonsVal.map(JSON.parse)) // renvoie de reponse, puis parsage en json de chaq value
        })
        .catch(err => {
          return res.status(404).end(err.message) // gerrage d'err
        })

    })

})

// unique event with id GET
router.get('/events/:id', (req, res) => {

  const jsonFile = `${req.params.id}.json`
  const jsonEventsPath = path.join(__dirname, '../../../mocks/events/', jsonFile)

  readFile(jsonEventsPath)
    .then(data => {
      res.header('Content-Type', 'application/json; charset=utf-8')
      res.end(data)
    })
    .catch(err => {
      return res.status(404).end(err.message)
    })

})

// form event post POST
router.post('/events', (req, res) => {
  const id = Math.random().toString(36).slice(2).padEnd(11,0)
  const jsonFile = `${id}.json`
  const jsonEventsPath = path.join(__dirname, '../../../mocks/events/', jsonFile)

  const content = {
    id: id,
    title: req.body.title,
    date: req.body.date,
    hours: req.body.hours,
    address: req.body.address,
    attendees: 'No one yet !',
    createdAt: Date.now(),
  }

  writeFile(jsonEventsPath, JSON.stringify(content, undefined, '\t'), 'utf8')

})

module.exports = router
