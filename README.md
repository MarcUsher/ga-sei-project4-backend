![General Assembly's Logo](https://camo.githubusercontent.com/603ef5eae7d28900a9678ae96c6c60a9c72f8a059c328b28cf978df999cea1f8/68747470733a2f2f692e696d6775722e636f6d2f6c7a56493364382e706e67)

# SEI Project 4: TripTips

### Table of Contents
- Project Overview
    - Team Members
- Goal
    - Technologies Used
- Approach Taken
    - Back-end
    - Front-end
- Challenges and Wins
    - Challenges
    - Wins
    - Bugs
    - Key Learnings
- Future Enhancements 

---

# Project Overview
TripTips is a MERN-Stack community application which guides User into finding their next travel experience. As a visitor the functionality is limited to viewing the Top 10 most-liked trips and browsing the existing ones, but as a registered User you can add your own travel experiences and like existing ones which will, subsequently, be stored in your "favs" page, making it easy and convenient to find them again. This is a built-from-scratch full stack project which was developed and delivered over two weeks by a group of three junior devs.
### Link to the deployed app: 

## Team Members
- Alexandra Gauthier Point - [GitHub](https://github.com/GPAlexa) | [LinkedIn](https://www.linkedin.com/in/alexandragp/)
- Elisabetta Maspero - [GitHub](https://github.com/emaspero) | [LinkedIn](https://www.linkedin.com/in/elisabetta-maspero/)
- March Usher - [GitHub](https://github.com/MarcUsher/) | [LinkedIn](https://www.linkedin.com/in/marcusher/)

# Goal
A working full-stack, single-page application hosted on Heroku that incorporates the technologies of the MERN-stack. The app should have a well-styled interactive front-end, should communicate with the Express back-end via AJAX, implement a token-based authentication (including the ability of a User to sign-up, log-in and log-out) and authorization by restricting the functionality to authenticated Users. The navigation also responds to the login status. Full-CRUD data operations to be implemented as well. 

## Technologies Used
- MongoDB/Mongoose
- Express
- React
- Node
- Axios
- jsonwebtoken
- jQuery
- bcrypt
- body-parser
- cloudinary
- multer
- nodemon
- salt
- Postman
- Git/GitHub

# Approach Taken
Planning is of paramount importance when facing a project, especially as a Group working remotely. As a first step, upon finding and agreeing on an idea that would match our interests, we set up a Trello board and straight away started developing the wireframes, User stories and ERDs (Entity Relationship Diagrams). 
Communication has been a focal point throughout the process. We started each day with stand-up discussions where we would evaluate the daily tasks, set an objective and shared any blockers. We often ended-up debugging collectively as a Team while screen-sharing on Zoom. The work-load has been equally shared between the members and several times a day we would regroup and push/pull the code on our dev branches on Git/GitHub.
#### Trello Board - [Click Here](https://trello.com/b/5k9nLgX6/ga-project-4-alex-elisabetta-marc)
![Trello board screenshot](/public/img/readme/Trello%20Board.png)
#### ERDs
![ERDs screenshot](/public/img/readme/ERDs.png)
#### WireFrames - [Click Here](https://xd.adobe.com/view/b6d3a46f-e6ee-494f-8e91-6089478e287a-e380/)
![WireFrames All](/public/img/readme/WireFrames%20All.png)
![WireFrames Home](/public/img/readme/WireFrames%20Home.png)
![WireFrames Profile](/public/img/readme/WireFrames%20Profile.png)

## Back-end
Each one of us started working on a different model and the related controllers and routes. Alex took charge of the User model and the authentication process, Elisabetta of the Trip model and Marc of the Country model as when a User adds a new experience he/she can pick a Country/City from a dropdown menu and he added the feature that uploads every added image to Cloudinary via API.

The Trip model has referenced data within itself:
```
const tripSchema = mongoose.Schema({
    title: String,
    country: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Country'
        },
    city: String,
    summary: String, 
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    favs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    image: String
});
```

The below code snippet shows the change password functionality which uses bcrypt:
```
  let currentUser = {}
  User.findById(req.body.id)
  .then(user => {
    currentUser = user
    if (!bcrypt.compareSync(req.body.currentPassword, currentUser.password)) {
        res.status(401).send({"type": "error", "message": "Current password is incorrect"})
    } else if (req.body.newPassword !== req.body.newPasswordConfirm) {
        res.status(401).send({"type": "error", "message": "New password and password confirmation don't match"})
    } else {
        let hashedPassword = bcrypt.hashSync(req.body.newPassword, salt);
        currentUser.password = hashedPassword;
        User.findByIdAndUpdate(req.body.id, currentUser)
        .then(() => {
          res.send({"type": "success", "message": "Your password has been updated"}).status(200);
        })
        .catch((error) => {
            console.log(error);
            res.send({"type": "error", "message": "Sorry there was an error"}).status(400);
        })
    }
  })
  .catch(error => {
    console.log(error);
    res.body("Sorry there was an error").status(400);
  })
```

The below snipped displays how cloudinary was configured and subsequently exports it as parser:
```
cloudinary.config({
    cloud_name: CLOUDINARY_HOST,
    api_key: CLOUDINARY_APY_KEY,
    api_secret: CLOUDINARY_API_SECRET,
});

const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'triptips',
        format: async () => "png",
        public_id: (req, file) => req.body.username + uniqueSuffix + path.extname(file.originalname)
    },
});

const parser = multer({storage: storage})
```

## Front-end
As a consequence of how we initially divided the workload, we each started working on the relatively front-end. 
- Alex started from creating the User profile page which displays all of the experiences created by that specific User, she then proceeded to work on the My Trips and Favs page. As part of the authorization field, she also worked on the log-in/out pages and functionality. Alex has also developed the vast majority of the CSS styling. Her help was crucial as her input played a huge part in solving the "like" functionality related issues.
- Elisabetta first step was to display the created experiences on the Browse Trips page and to create the detail page for each Trip which allows the User to access a edit/delete button (only if the User is the same one who created that specific experience). Subsequently she worked on the "like" functionality which encourages the User to like specific experiences and stores them in the Favs page and as a last step she worked on the Top Ten page which displays only the 10 top liked experiences.
- Marc first task was to create the Countries and Cities dataset in the database and to link that to the "add trip" functionality. When a User picks a specific Country from the dropdown menu, only the related cities show in the next menu. He also worked on the option that, in case a city is missing, enables the User to create a new one and adds it to the database. He later researched imaged-upload using Multer middleware and successfully implemented this feature both on the User's profile page and "add trip" form.The images were initially stored in the front-end local storage, but he worked on uploading them to Cloudinary via API.

The below snippet displays how, within the Trip Create Form, the data in the dropdowns is correctly displayed:
```
  // CREATE DROPDOWN OPTIONS FOR ALL COUNTRIES IN DB
  const allCountries = props.allCountries.sort((a, b) => (a.name > b.name ? 1 : ((b.name > a.name) ? -1 : 0))).map((country, index) => {
    return <option key={index} value={country._id}>{country.name}</option>
  })

  // CREATE DROPDOWN OPTIONS FROM CITIES ARRAY OF SELECTED COUNTRY
  const selectedCountryCities = currentCities.sort().map((city, index) => {
    return <option key={index} value={city}>{city}</option>
  })
  ```

The below snippet displays how only the top ten liked experiences are displayed on the related page:
```
  const topTenTrips = trips.slice(0, 10).sort((a, b) => b.favs.length - a.favs.length).map((trip, index) => (
    <div key={index}>
      <TripSnippet {...trip} trips={trips} />
    </div>
  ))
  ```

The below snippet shows how only the trips that have been liked by the current User are gathered in the favs page:
```
  const loadTripList = () => {
      Axios.get("trip/index")
      .then((response) => {
          for (const trip of response.data.trips) {
            for (let fav of trip.favs) {
              if (fav === props.currentUser.id){
                allMyTrips.push(trip);
              }
            }
          }
          setTrips(allMyTrips)
      })
      .catch((error) => {
          console.log(error)
      })
  };
  ```

  Throughout the process we have done several debugging session via pair-programming as a Team as, in most cases, a fresh point of view would help the member who was dealing with a blocker. Debugging together also ensured that all of the members shared an equal level of understanding of the whole code.  

# Challenges and Wins
## Challenges
- One of the biggest challenges was understanding how the loading and rendering of the data works in React. On occasions we got stuck as the program was not able to find and read some data (eg. the current User id).
- The earliest challenged that we faced was figuring out how the data is passed between back-end and front-end and how the whole app communicates.
- Working with different components respecting the hierarchy. 
- As much as possible we tried to overcome each obstacle and error by ourselves, doing a lot of Google researches and liaising with the React community trying to understand how other devs implemented effective solutions, rather than copying and pasting. 
## Wins
- Team-Work: Every single day the whole team participated with enthusiasm during the morning stand-ups. The constructive environment encouraged us to share our blockers and bugs and we all made a conscious effort towards solving each obstacle along the way.
- Implemented features such as the like functionality and the filtering option.
- Image uploads successfully works and images get sent to a cloud-storage rather than to a local storage.
## Bugs
- After editing an existing trip the success pop-up message does not display on the screen. - FIXED
## Key Learnings
This project helped each member of the Team to gain a stronger understanding of React and its unidirectional flow. While putting our theoretical knowledge into practice, we realized the importance of sketching and thinking through an application before starting to write the code. 
# Future Enhancements 
- Add additional sections to the initial "add a Trip" form allowing the User to share recommendations, warnings and expenses.
- Allow Users to add comments to the existing travel experiences to start a conversation and interact with the community.
- Implement filters in order to make it easier for Users' to find relevant experiences tailored to their interests and needs.
- While registering, a User can add a home country that would also display the local currency.
- Have different levels of Users, implementing an Admin tier that can deleted Users and edit/delete all User's experience to maintain a level of quality within the experiences. 
 