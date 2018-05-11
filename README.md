# Events Manager [WIP]

Events Manager constructed with the goal to be reusable on differents projects and be easily integrated.
The idea came from a group project at the [Wild Code School](https://wildcodeschool.fr/).

I decided to build my own version alone on my free time.

# Installation

  - Clone or download the repository
  - Navigate to 'events-manager-master'
  - Run ```npm install``` to download all the dependencies of the project
  - Navigate to '/server' and run ```npm install``` again to install the server dependencies
  - Back to the root folder :
    - ```npm run server``` to start the API server on local
    - ```npm run client``` to start the client on a local server and navigate to 'http://127.0.0.1:8080' in your favorite browser
  - Voila


# What Am I Using ?

  - Backend API (nodeJS)
  - Routing (Express)
  - Database (json)

# Functionalities :

- Get a list of all events available or not [✔]
- Get a list of all events ordered by creation date [✔]
- Access to the details of an event [✔]
- Create and post an event with uniq ID [✔]
- Be able to participate to an event [✖]
- Delete and modify an event [✖]
- Simple inscription [✔]
- Personnalisation of profils [✖]
- Connexion & deconnexion after registration [✖]

# Screenshots :

**Homepage**:

![homepage](http://hedik.fr/imgs/eventmanager/home.png)

**Event details page**:

![event details](http://hedik.fr/imgs/eventmanager/event-details.png)

**Event proposition page**:

![event proposition](http://hedik.fr/imgs/eventmanager/event-proposition.png)

**Inscription page**:

![inscription](http://hedik.fr/imgs/eventmanager/inscription.png)
