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

// inscription user
router.post('/subscribe', (req, res) => {
  const id = Math.random().toString(36).slice(2).padEnd(11,0)
  const jsonFile = `${id}.json`
  const jsonEventsPath = path.join(__dirname, '../../../mocks/users/', jsonFile)

  const content = {
    id: id,
    mail: req.body.mail,
    pseudo: req.body.pseudo,
    password: req.body.password,
    createdAt: Date.now(),
  }

  writeFile(jsonEventsPath, JSON.stringify(content, undefined, '\t'), 'utf8')

})


//all users GET
router.get('/users', (req, res) => {

  const usersDir = path.join(__dirname, '../../../mocks/users/')

  readdir(usersDir)
    .then(jsons => {
      const jsonsPath = jsons.map(json => path.join(usersDir, json)) // path de chaque element du dossier
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


// const user_1 = require('../../../mocks/users/1.json')
// const user_2 = require('../../../mocks/users/2.json')
// const user_3 = require('../../../mocks/users/3.json')
// const user_4 = require('../../../mocks/users/4.json')
//
// const users = [
//   user_1,
//   user_2,
//   user_3,
//   user_4
// ]
//
// router.get('/users', (req, res) => {
//   res.json(users)
// })

module.exports = router
