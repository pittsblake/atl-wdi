[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider an app we want to make, called Senior Paws. Senior Paws is an app for dog sitters taking care of old dogs, where you can track the dog's information, like its name, favorite treat, medication, and its owners. What attributes are most important to include in our data model?

![image](data_modeling.png)


### Directions

Data Modeling Round 2! Take a look at each of the app descriptions below. For each description:
  1. Create a data model for the app by listing at least two relevant
entities/abstractions (e.g. Senior Paws app, above) that the app might use, and list properties that make sense for that use case. You *don't* have to list all of them.
  1. Create Javascript objects of those entities and assign what data type the _value_ of those properties should be
  1. Give an example of a relationship of the model. Keep in mind, not _everything_ has to be connected to _everything_.

### 1. Ultra E-mail App

This app provides easy access to all your e-mail service providers in one app. The app will let you select one of your email addresses and view your e-mails for that address.

```
DATA MODELING:
  #1. User: 
        - id number
        - name
        - username
        - email(s)    
        - password

  #2. Email accounts:
        - id number
        - email address
        - email password
        - contact list

JAVASCRIPT OBJECTS:
    User:
      const user = {
        id: number,
        Name: string,
        username: string,
        email: [],
        password: string,
      }

    Email:
      const email = {
        id: number,
        email address: string,
        email password: string,
        contact list: string,
      }

RELATIONSHIPS
    const exampleUser = {
      name: "Blake",
      username: "blake1",
      password: "****",
      email: [{
        id: 3, 
        emailaddress: [email@1.com, email@2.com,                          email@3.com],
        emailpassword: [password1, password2,                             password3],
        contactlist:  [email1, email2, email3]
      }]
    }

```

### 2. Radio on the Internet app

This app hosts a ton of radio stations, each featuring their own playlists of songs. The radio stations can be listed by genre or popularity.


```
DATA MODELING
  Stations:
    - Id number
    - Station name
    - Playlist(s)

  Playlists:
    - id number
    - Mood

JAVASCRIPT OBJECT
  Stations:
    const stations ={
      id: number,
      stationName: string,
      playlist: []
    }
  Playlists:
    const playlist = {
      id: number,
      mood: string,
    }

RELATIONSHIPS
  const exampleStation = {
    id: 44434,
    stationName: "Groove",
    playlist: [{
      id: 3442342,
      mood: [pop, rock, soul]
    }]
  }

```

### 3. Rock Concert App

This app will be a tool for managing all of your favorite bands' concerts; it will keep track of their tour dates, ticket purchasing, and next recommended show.

```
DATA MODELING
  Band:
    - id
    - name
    - bandMembers
    - music genre
    - tour date(s)
  Tour Dates:
    - id 
    - date
    - location
    - time

JS OBJECTS
  Band:
    const band = {
      id: number,
      name: string,
      bandMembers: string,
      musicGenre: string,
      tourDates: string,
    }
  Tour DATES:
    const tourDates = {
      id: number,
      date: number,
      location: string,
      time: number,
    }

RELATIONSHIP
  const exampleBand = {
    id: 323423423,
    name: "manchester Orchestra",
    bandMembers: [Andy, etc, etc,],
    musicGenre: "Indie Rock",
    tourDates: [{
      id: 4224224,
      date: [2/2/18, 2/4/18],
      location: [Atlanta, Boston],
      time: [2100, 2100]
    }]
  }

```

### 4. Coffee To-Go App

This app will allow customers to browse a list of coffeeshops nearby, order drinks off of their menu, add those drinks to a shopping cart, and save that cart as a past order once the purchase is complete.


```
DATA MODELING
  Coffe Shop:
    - id
    - name
    - location
    - contact
    - menu
  
  MENU:
    - id 
    - food
    - beverages

JS OBJECTS
  const coffeeShop = {
    id: number,
    name: string,
    location: string,
    contact: number,
    menu: [],

  const menu = {
    id: number,
    food: string,
    beverages, string
  }
  }


RELATIONSHIPS
  const exampleCoffeeShop = {
    id: 5633534,
    name: "Joes",
    location: "Atlanta",
    contact: 444-444-4444,
    menu [{
      id: 23131231,
      food: [cake, bagels],
      beverages: [coffee, ice coffee]
    }]
  }

```

### 5. Team Tracker App

This app shows you all the latest stats from your favorite sports teams. You can view individual player stats and full team stats.

```
DATA MODELING
  User: 
        - id number
        - name
        - username
        - email    
        - password
        - favorite team(s)
  Favorite Team:
        - id 
        - team name
        - players
        - schedule
        - record

JS OBJECTS
  const user = {
    id: number,
    name: string,
    username: string,
    email: string, 
    password: string,
    favorite team(s): string
  }

  const favoriteTeam = {
    id: number,
    teamName: string,
    players: string,
    schedule: string,
    record: number
  }

RELATIONSHIPS
 const exampleUser = {
   id: 45345523,
   name: 'blake',
   username: 'blake1',
   email: 'email@1.com',
   password: '*****'
   favoriteTeam: [{
     id: 45353434,
     teamName: 'Atlanta United',
     players: ['martinez', 'almiron', 'etc'],
     schedule: [],
     record: 1-0
   }]
 }

```


### Final Thoughts:

Q. When you were creating relationships between the models, what were some thoughts or questions you had to help guide a connection between them?


```
I thought about what was necessary for the app to run. 
```

### Reading and Videos for Tomorrow
Now that you've had some practice really thinking about the data design of an app, we're going to learn about MongoDB, a no-SQL database. Starting tomorrow, our Express apps will be talking to the Mongo database through Mongoose. Since we're covering a LOT of ground tomorrow, take some time to introduce yourself to concepts and lingo surrounding MongoDB and Mongoose. You will _not_ have to memorize the technical details here.

- [MongoDB's Ridiculously Cheery Promo video: 2mins video](https://www.youtube.com/watch?v=CvIr-2lMLsk)
- [The Good and Bad of MongoDB: 30mins video](https://www.youtube.com/watch?v=hWxnRi_WXtg)
- [What is Mongoose? 2 min Video](https://www.youtube.com/watch?v=swWRUvluSkE)
- [Official Mongoose Website](http://mongoosejs.com/index.html)
- [Official Mongoose Docs](http://mongoosejs.com/docs/index.html)

## Submitting Your Work

  When you're ready to submit your work,

  1. Add, commit, and push your code.
  2. Add your Github link to Schoology along with your name and you comfort level with the homework.
