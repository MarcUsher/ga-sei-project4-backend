# General Assembly Project 4 - Trip Tips

## Table of Contents
* Introduction
  * Brief
  * Project Overview (including screenshots & link to deployed app)
  * Team Members & Timeframe
  * Technologies Used
* Approach Taken
  * Project Planning
  * User Stories
  * ERD
  * Mockups
* Build Process (featured code)
* Final Product
* Conclusions
  * Wins & Challenges
  * Bugs
  * Future Improvements
  * Key Learnings


## Introduction

### Brief

* **A working full-stack, single-page application** hosted on Heroku.
* **Incorporate the technologies of the MERN-stack** (MongoDB/Mongoose, Express, React, Node).
* **Have a well-styled interactive front-end**.
* **Use RESTful API routing and communicate with the Express backend via AJAX**.
* **Implement token-based authentication**, including the ability for a user to sign-up, log in & log out.
* **Implement authorization by restricting CUD data functionality to authenticated users**. Navigation should also respond to the login status of the user.
* **Have a well-scoped feature-set**. Full-CRUD data operations are not required if one or more of the following are included:
  * Consume data from a third-party API.
  * Implement additional functionality if the user is an admin.

### Project Overview - Trip Tips

Trip Tips is a MERN-Stack community application which aims to help visitors find their next travel experience. 

As a visitor the functionality is limited to viewing the Top 10 most-liked trips and browsing the all existing trips ones, but registered users can add their own travel experiences and like existing trips added by others using, which which saves them to that user’s "favs" page, making it easy and convenient to find them again. 

![Trip Tips Screenshot - Top Ten page](/triptips-BE/public/img/readme/appscreenshot-01.png)
![Trip Tips Screenshot - Browse Trips page](/triptips-BE/public/img/readme/appscreenshot-02.png)
![Trip Tips Screenshot - Profile Page](/triptips-BE/public/img/readme/appscreenshot-03.png)


### Deployed App
[Visit Trip Tips](https://gatriptips.herokuapp.com/)

[See the Front-end GitHub repository](https://github.com/MarcUsher/ga-sei-project4-frontend)

### Members
- Marc Usher (Back-end Team Lead) - [GitHub](https://github.com/MarcUsher/) | [LinkedIn](https://www.linkedin.com/in/marcusher/)
- Elisabetta Maspero (Front-end Team Lead) - [GitHub](https://github.com/emaspero) | [LinkedIn](https://www.linkedin.com/in/elisabetta-maspero/)
- Alexandra Gauthier Point - [GitHub](https://github.com/GPAlexa) | [LinkedIn](https://www.linkedin.com/in/alexandragp/)

### Timeframe

2 weeks.

### Technologies Used
* MongoDB
* Express, including the following middleware and tools:
  * Bcrypt & salt
  * Body-parser
  * Cloudinary
  * jsonwebtoken
  * Mongoose
  * Multer/Multer-storage-cloudinary
  * Nodemon
* React, including:
  * Axios
  * JWT-decode
  * React Router DOM
* Node.js
* JWT
* HTML5
* CSS3
* JavaScript & jQuery
* Postman
* Git & GitHub
* AdobeXD (for mockups)
* Visual Paradigm (for ERD)
* Trello (for planning)
* Heroku (for deployment)

**Country** and **City** data were sourced from [datahub.io](https://datahub.io/):
* [Country data](https://datahub.io/core/country-list) originally from [ISO 3166-1](http://www.iso.org/iso/home/standards/country_codes.htm), licensed by its maintainers under the Public Domain Dedication and Licence.
* [City data](https://datahub.io/core/world-cities) originally from [geonames](http://www.geonames.org/), licensed under the [Creative Common Attribution Licence](https://creativecommons.org/licenses/by/3.0/).

## Approach

### Project Planning

With this being our most complex project to date, with separate front-end and back-end applications during the build, planning was of paramount importance. 

As a first step, once we had discussed our interests and agreed on the idea for the application, we set up a Trello board and straight away started developing the user stories, ERD and wireframes. 

![Trip Tips Screenshot - Profile Page](/triptips-BE/public/img/readme/trello-01.png)

We also all agreed that good communication would be a focal point throughout the process. We started each day with stand-up discussions where we would share our progress and evaluate our daily tasks, set out our objectives for the day and share any blockers. 

Throughout the process we often ended-up debugging collectively as a Team while screen-sharing on Zoom. The workload was equally shared between the members and we would regroup and push/pull the code on our dev branches on Git/GitHub several times a day.

### User Stories
As we discussed the idea for the application, we created a long list of user-stories for this project, initially all saved in our ‘Icebox’ on our Trello board. We then discussed which users stories were key for our MVP application, and moved these to the ‘current’ list - as these were completed they would be moved to completed, with more user stories being moved from icebox to ‘current’ and completed as the build progressed.

Our full list of user stories, along with which were completed and which were still to be implemented:
* Completed
  * As a visitor, I would like to be able to sign up so I can add my own experiences.
  * As a visitor, I want to browse other people's experiences so that you can get inspired.
  * As a visitor, I want to filter other people's experiences by COUNTRY so that it's easier to see what I'm after.
  * As a user, I want to sign in so I can add  my own experiences.
  * As a user, I want to be able to add key details when I share my experiences.
  * As a user, I want to be able to edit my experiences once they're posted to update details.
  * As a user, I want to be able to delete my experiences if I don't want them public anymore.
  * As a user, I want to see my own profile to see the experiences I've added.
  * As a user, I don't want anyone else to be able to edit/delete my experiences so that they don't change.
  * As a user, I want to be able to like other peoples' travel experiences so I can build a library of my favourites.
  * As a user, I want to be able to remove experiences from my favourites.
  * As a user, I want to see if an experience has been favourited a lot of times by other users.
* Icebox
  * As a user, I want to be able to add more detailed information about my trips to make them more interesting to others.
  * As a user, I want to be able to add comments to experiences to start a conversation.
  * As a user, I want to be able to add my home country and local currency when I sign up so that the site shows me relevant info.
  * As an admin, I want to be able to delete users so that they can be kicked off the site.
  * As an admin, I want to be able to edit/delete all users' experiences so I can keep the quality of the experiences on the site.

### ERD
We discussed the data structure for our applications database and decided that our Trip model would be the most important one, referencing the IDs of the User who created it along with the Country/City visited.

We originally included Country and City as fields within the Trip model, but decided to split these out so that we could prepopulate the list of countries and major cities/areas rather than relying on user input. In the end, we combined Cities into Countries, creating an array of city names within each country. We also wanted users to have the ability to add a City or Location that wasn’t already in the database, and have that location then be available for other users as they added trips.

Some of the fields in our Trip model (recommendations, warnings and budgets) were not implemented, as these user stories stayed in the icebox due to time constraints.

![Entity Relationship Diagram](/triptips-BE/public/img/readme/ERDs.png)

### Mockups
Alexandra led a group session where we created mockups for the site in AdobeXD, with input from the full team. **[See all mockups](https://xd.adobe.com/view/b6d3a46f-e6ee-494f-8e91-6089478e287a-e380/)**.

Selection of mockups:
![Mockup - Grid of all mockups](/triptips-BE/public/img/readme/mockup-01.png)

Landing page:
![Mockup - Landing page](/triptips-BE/public/img/readme/mockup-02.png)

Profile Page:
![Mockup - Profile Page](/triptips-BE/public/img/readme/mockup-03.png)

## Build Process

We set up our front-end and back-end applications and basic structures as a group and set up our GitHub repositories to push/pull this initial codebase. We then each took charge of separate elements of the build, with all back-end API routes being tested in Postman.

The areas I led on are explained below in detail.

### Back end

### Country model & data
When a User adds a new trip, we wanted them to be able to select from a prepopulated list of all countries in the world, and have that selection then also give them a prepopulated list of major cities/locations in that country.

First I sourced the Country and City data (as detailed in the above ‘Technologies’ section). Rather than having two separate collections for this data, I decided to combine them so that all the major cities would be saved in an array in their country. This would avoid a web of tangled referenced IDs, as we only needed the city names and nothing else from that dataset.

I ran a simple JavaScript function to save the cities as an array of city names into each Country object. I then created our Country model (shown below) and created our MongoDB cloud database for the project, and uploaded the data directly through MongoDB Atlas. It helped having our cloud database set up early in the build, as it meant the whole team could be working from the same dataset.

```
const mongoose = require('mongoose');
 
const countryScheme = mongoose.Schema({
   name: String,
   code: String,
   cities: [String],
})
 
const Country = mongoose.model("Country", countryScheme);
module.exports = {Country};
```

I then only needed to add a simple index GET route which would be called by our front-end application, where this data could then be manipulated or filtered however we needed:

```
const {Country} = require('../models/Country')

exports.country_index_get = (req, res) => {
   Country.find()
   .then((countries) => {
       res.json({countries})
   })
   .catch((err) => {
       console.log(err);
   })
}
```

The next step in the back-end application was to receive the relevant Country and City data from the newly added or edited trips, which meant updating the POST and PUT routes already created by Elisabetta to include this Country and City data. 

Thankfully the data being passed back by the front-end application (more detail below in the Front end section) was correct, with the relevant Country ID being passed with the created/edited Trip, and the chosen City name being passed as a string.

A later addition to this functionality was to be able to include custom Cities or Locations as entered by the User when adding a trip, if they were unable to find their destination in our existing list (the data from datahub.io only included cities with more than 15,000 inhabitants so it was a distinct possibility that people would visit somewhere with fewer inhabitants).

To facilitate this we had an additional free-text input in our Add Trip form, which if left blank would do nothing but if filled out it would overwrite the City selected for the trip, and would also add that newly added location to the list of cities for the selected Country, thus ensuring that location could be selected for any new trips added to the site.

Below is the `trips.js` controller file, showing the final POST request to create a new trip (this also includes logic to save an image uploaded with the trip, which is explained in more detail below):

```
exports.trip_create_post = async (req, res) => {
   console.log("req.body", req.body);
   let trip = new Trip(req.body);
   console.log("NEW TRIP", trip)
 
   if (req.file) {
       trip.image = req.file.path
     } else {
       trip.image = null
     };
  
     if (req.body.city2 !== "undefined") {
       trip.city = req.body.city2;
       Country.findById(req.body.country, (err, country) => {
           country.cities.push(req.body.city2)
           country.save();
       })
     }
   trip.save()
   .then((trip) => {
       res.json({trip: trip}).status(200)
   })
   .catch((error) => {
       console.log(error);
       res.json({"type": "error", "message": "Error adding a new trip. Please try again"}).status(400)
   })
};
```

### Image upload

We decided early on that we wanted to be able to include image upload as part of our application for trips and for profile images, and I volunteered to tackle this as it had been something I’d wanted to include in Projects 2 and 3, but hadn’t had the chance to implement.

After some research I found that the best way would be to use Multer, a middleware for handling multipart/form-data which is primarily used for uploading files. I read through the Multer documentation and found examples shared by developers where they had integrated it into their own applications and started to integrate it into our own, starting with saving the uploaded image to our front-end application but later moving this to Cloudinary, an online cloud storage.

I began by adding the image upload functionality to our user profiles so a User could add a profile image when signing up. If they didn’t upload an image, a default placeholder image would be used instead. This required an update to the signup form on the front end (explained in more detail in the front end section below). Once this worked it was easy enough to implement similar functionality into the Profile Edit, which Alexandra had already set up, and to the Add/Edit Trip functionality. The upload path of the image was saved to the relevant field in the database record, so that this could be added to our front-end code and dynamically render the relevant images.

The final step was moving the location where the image would be saved to Cloudinary, where it would be uploaded via their API, rather than to the local storage. I created a helper file to configure Multer and the Cloudinary upload settings, and exported this so it could be used in any other routes as needed and the images would all be uploaded in the same way to the same location.

Unfortunately I wasn’t able to successfully get the image upload working for an array of images, rather than a single image - this would be something we would have liked to add so that users could upload an array of images.

The below snippet displays how Multer and Cloudinary were configured together in a separate  helper file, `cloudinary.config.js`, and subsequently exported as ‘parser’. I also added a uniqueSuffix variable so that each image uploaded would be given a unique filename, beginning with the authenticated User’s username, a unique string of numbers, and the file extension of the original file (though all images would be converted to .png on upload). 

```
const multer = require('multer')
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const path = require('path')
 
const {
   CLOUDINARY_HOST,
   CLOUDINARY_APY_KEY,
   CLOUDINARY_API_SECRET,
} = process.env;
 
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
 
module.exports = parser;
```

The `auth.js` Router file is where the parser is imported and added to the routes that would deal with image upload, specifically user signup and user update, so the images would be processed as set out by the helper file shown above:

```
const router = require('express').Router();
const parser = require('../helper/cloudinary.config');
const authCtrl = require("../controllers/auth");
 
router.post("/auth/signup", parser.single('profileImage'), authCtrl.auth_signup_post);
router.put("/auth/profile/update", parser.single('profileImage'), authCtrl.user_update_put);
```

The `auth.js` Controller file is then where how the images are stored in our database is processed, with the full Cloudinary upload path being saved as a string to the relevant record field in the database. If no image is uploaded, then the field is left empty, and a placeholder image will be used in the front-end application.

For signup:
```
exports.auth_signup_post = (req, res) => {
 console.log("req.body", req.body)
 let user = new User(req.body);
 
 // Hash the password
 let hashedPassword = bcrypt.hashSync(req.body.password, salt);
 console.log(hashedPassword);
 
 user.password = hashedPassword;
 
 if (req.file) {
   user.profileImage = req.file.path
 } else {
   user.profileImage = null
 }; 
 
 user
   .save()
   .then(() => {
     res.json({"type": "success", "message": "User created Successfully!"}).status(200)
   })
   .catch((error) => {
     console.log(error);
     res.json({"type": "error", "message": "Error creating user, please try again"}).status(400)
   });
};
```

For updating a user profile, I needed to add a check so that an uploaded image would overwrite the previous image path in the database, but if no image was uploaded it would keep the previously uploaded image path before marking it as *null*:

```
exports.user_update_put = (req, res) => {
 console.log("req.body", req.body)
 User.findById(req.body.id)
 .then((user) => {
     console.log("USER", user)
     console.log("req.body", req.body)
 
     currentUser = user
 
     console.log("currentUser", currentUser)
 
     if (req.file) {
       currentUser.profileImage = req.file.path
     } else if (currentUser.profileImage) {
       currentUser.profileImage = currentUser.profileImage
     } else {
       currentUser.profileImage = null
     }
 
     currentUser.firstName = req.body.firstName
     currentUser.lastName = req.body.lastName
     currentUser.username = req.body.username
     currentUser.emailAddress = req.body.emailAddress
 
     console.log("currentUser updated: ", currentUser)
     User.findByIdAndUpdate(req.body.id, currentUser, {new: true})
     .then((currentUser) => {
       res.json({currentUser}).status(200)
     })
     .catch(error => {
       console.log(error)
       res.json({"type": "error", "message": "Error Updating User Information - please try again"}).status(400)
     })
 })
 .catch(error => {
     console.log(error).status(400)
 })
}
```

### Success/error messages
On this project I also tackled our success and error messages on the front and back-end applications. While this was mainly a front-end task, our back-end application had a lot of specific error messaging, particularly for specific errors in our User functionality eg. updating a password and not matching the old password or the two new confirmation passwords, or signing up and using an email address that was already in our database.

I therefore added the error message as JSON objects which would be sent back to the front-end application and could be displayed to the user to describe the specific error, rather than using a catch-all message on the front-end application.

A couple of examples from our `auth.js` controller file are:
```
res.status(401).send({"type": "error", "message": "New password and password confirmation don't match"})
```

```
res.send({"type": "success", "message": "Your password has been updated"}).status(200);
```

### Front end

[See the Front-end GitHub repository](https://github.com/MarcUsher/ga-sei-project4-frontend)

### Countries/Cities in ‘Add Trip’ and ‘Edit Trip’

Once I had set up the Country model in the back-end application and populated the database, and updated the back-end API call to add a Country ID to a trip, I needed to add this functionality in our front-end application so that users could select any country from the database, and once the User selects a country the ‘City’ dropdown is then populated with all the cities in that Country’s ‘cities’ array.

The first step was to add an Axios API call to retrieve the Country data, which was stored in a new State. The data was passed as prop from `App.js` to `TripCreateForm.js` and any other components that would need the data, such as `TripEditForm.js`.

```
// COUNTRIES LIST STATE
 const [allCountries, setAllCountries] = useState([])
```

```
const loadCountryList = () => {
   Axios.get("../../country/index")
     .then((response) => {
       setAllCountries(response.data.countries)
     })
     .catch((error) => {
         console.log(error)
     })
 }
```

Then I looped over the retrieved data with a map function to return an option for each country to go in our form’s ‘select’ list. In this loop I also sorted the countries and cities alphabetically for a more optimal user experience and to accommodate any new locations added by users.

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

These options were then added to the two select functions in the ‘Add Trip’ form:
```
<div className='select'>
    <select defaultValue={'DEFAULT'} id="country" name="country" onChange={handleChange} required>
      <option value="DEFAULT" disabled hidden>Choose a Country</option>
      {allCountries}
    </select>
</div>

<div className='select'>
    <select defaultValue={'DEFAULT'} id="city" name="city" onChange={handleChange}>
        <option value="DEFAULT" disabled hidden>Choose a City</option>
        {selectedCountryCities}
    </select>
</div>
```

The `handleChange()` function updated two States in this component, the `newTrip` state and currentCities state, with the second only being updated when a user selected a country. This meant that each time the User selected a new Country, the Cities dropdown would be repopulated with the alphabetised cities from that Country’s record in the database.

```
const [newTrip, setNewTrip] = useState({});
const [currentCities, setCurrentCities] = useState([])
```

```
const handleChange = (event) => {
   const attributeToChange = event.target.name
   const newValue = event.target.value
   const trip = {...newTrip}
   trip["createdBy"] = props.currentUser.id
   trip[attributeToChange] = newValue
   setNewTrip(trip)
 
   // IF A COUNTRY WAS SELECTED IN THE DROPDOWN, UPDATE ARRAY OF CITIES
   if (event.target.name === "country") {
     let selectedCountry = props.allCountries.find(country => country._id === event.target.value)
     let selectedCountryCities = selectedCountry.cities
     setCurrentCities(selectedCountryCities)
   }
 };
```

The same functionality was used when in the `TripEditForm.js`, with the Country and City dropdowns showing the Country and City selected by the User - this was pre-selected using props passed by the Trip Detail page, with the Cities needing just one additional check to allow the page to render in time, as shown in the snippet below. This took a lot of trial and error to get working, and I am indebted to Alexandra for helping troubleshoot this issue!

```
// CREATE DROPDOWN OPTIONS FROM CITIES ARRAY OF SELECTED COUNTRY
 let displayCities = currentCities ? currentCities : props.cities;
 const selectedCountryCities = displayCities.sort().map((city, index) => {
   return <option key={index} value={city}>{city}</option>
 })
```

### Image upload
After reading the documentation around the Multer middleware and examples of its use online, I needed to update our Create and Edit forms to accept multipart/form-data, and update how this new FormData object was populated and sent to our back-end API route.

Below shows how this was implemented for our signup forms, first when creating a new User account and then when creating a new Trip - the form’s encType was updated, and a new input field added for a file upload which only accepted image files.

```
<form onSubmit={handleSubmit} encType='multipart/form-data'>
```

```
<div>
  <label className='form-file-upload'>
    <p><img src='/img/upload.png'></img> Upload your picture</p>
    <input className='form-inputs' id='form-input-file' type="file" accept=".png, .jpg, .jpeg" name="gallery" onChange={photoHandler}/>
  </label>
</div>
```

The `photoHandler()` function would set the newTrip state’s ‘image’ to be the file uploaded by the User, and the `handleSubmit()` function took each part of that state and assigned it to a formData key:value pair as shown in the snippet below (here you can also see the city2 field, which was used to determine if the User was adding a new City/Location with their trip which would then be added to the database, as described above.

```
const photoHandler = (e) => {
   setNewTrip({...newTrip, image: e.target.files[0]})
 }
 
 const handleSubmit = (event) => {
   event.preventDefault();
   const formData = new FormData()
   formData.set('title', newTrip.title)
   formData.set('country', newTrip.country)
   formData.set('city', newTrip.city)
   formData.set('city2', newTrip.city2)
   formData.set('summary', newTrip.summary)
   formData.set('rating', newTrip.rating)
   formData.set('image', newTrip.image)
   formData.set('createdBy', props.currentUser.id)
   props.addTrip(formData);
   routeChange()
 };
```

I also updated our Trips and Profiles pages to show a default image if none had been uploaded by the user:

```
<div className="trip-container-right-img">
  {(currentTrip.image)
    ?
    <img alt="tripimage" className="trip-img" src={currentTrip.image}></img>
    :
    <img src="/img/paris.jpg" alt="paris" className="trip-img"></img>
  }
</div>
```

```
{(props.currentUser.profileImage)
  ?
  <img alt="profile" width={"100px"} src={props.currentUser.profileImage}></img>
  :
  <img alt="default" src='/img/non-conforming-gender.png' width={"100px"}></img>
}
```

### Pop-up notifications

For the pop-up notifications on the site eg. when a User would signup, login/logout, add or edit a trip, or edit their user profile/change their password, I created two states - one to capture the relevant text and message type, and one to capture whether or not the pop-up should be shown to the user.

I created this in App.js as it needed to be shown across the site:

```
const [popup, setPopup] = useState({});
const [showPopup, setShowPopup] = useState(false)
```

I then created two functions, also in `App.js` - one to create a short delay, and one asynchronous function to be called whenever a pop-up notification was needed, which would update the popup state, set the showPopup state to true to show the message, wait three seconds and then set the showPopup state to false to hide it again. Our `App.js` `useEffect` function looked out for any changes in the two states in order to update the page if they were changed.

This was then passed as a prop to any relevant components, so any axios API calls or functions which might need to pass a pop-up notification could simply call this function with the message type and message copy.

```
// POPUP FUNCTIONS
const delay = (ms) => new Promise(
  resolve => setTimeout(resolve, ms)
);


const popupHandler = async (obj) => {
  setPopup(obj)
  setShowPopup(true);
  await delay(3000);
  setShowPopup(false);
}
```

I then added the following statement to the `App.js` return statement , which would show the pop-up component if showPopup was set to true and pass it the relevant props:

```
{
  (showPopup) ?
  <Popup type={popup.type} message={popup.message}/>
  :
   <></>
}
```

The `Popup.js `component was very simple and I just made it show the message of the popup prop, and setting the class as the popup type, and I then styled this to show green for success messages and pink for error messages:

```
import React from 'react'
 
export default function Alerts(props) {
 return (
   <div className={`alert ${props.type}`}>
     {props.message}
   </div> 
 )
}
```

Because some of our back-end API routes included descriptive error messages which were being passed as JSON objects in the API’s response (see back end section above), I set up some of the `popupHandler()` calls to use these more specific error messages:

```
const registerHandler = (user) => {
  Axios.post("auth/signup", user)
    .then((response) => {
      console.log("RESPONSE: ", response);
      popupHandler({"type": `${response.data.type}`, "message": `${response.data.message}`});
      if (response.data.type === "success") {
        setIsSignedUp(true)
      }
    })
    .catch((error) => {
      console.log("ERROR: ", error);
      popupHandler({"type": "error", "message": "Error signing up. Please try again"});
    });
};
```

Other messages were set in front-end or used a mix of the two, for when more specific error messages were needed:
```
const editPwd = (currentUser) => {
  console.log("Axios call goes here")
  Axios.put("auth/profile/pwdchange", currentUser, {headers : {
      "Authorization": "Bearer " + localStorage.getItem("token")
  }})
  .then(response => {
      console.log("Updated Password!")
      console.log("RESPONSE: ", response)
      setIsPwdEdit(false)
      navigate('/profile')
      props.popupHandler({"type": "success", "message": "Updated password!"})
  })
  .catch(error => {
      console.log("Error Updating password !!!");
      console.log("ERROR: ", error);
      props.popupHandler({"type": "error", "message": `${error.response.data.message}`})
  })
}
```

### Country filter

My final main task on the front-end application was to add a filter to our ‘Browse Trips’ page to allow visitors and users to filter the full list of trips by country visited. 

This would allow them to browse the trips more efficiently and find what might be of interest to them.

This was tricky functionality to get right, but again after some online research I managed to create this functionality:

First, in our `BrowseTrips.js` component, I created three states: one to see whether or not a country filter had been applied, one to take which country had been selected, and one to create an array containing all the Trip objects with that Country ID as the referenced Country:

```
// All/CURRENT TRIP STATES
const [trips, setTrips] = useState([]);
const [currentTrip, setCurrentTrip] = useState("")

// COUNTRY FILTER STATES
const [isFilter, setIsFilter] = useState(false)
const [filteredTripList, setFilteredTripList] = useState([]);
const [selectedCountry, setSelectedCountry] = useState("");
```

I then created two functions. The first, `handleCountryChange()`, would capture if the dropdown on the page was changed and set the `selectedCountry` state to the country chosen by the user, and set the filter to *true* (unless the user selected the ‘All Countries’ option in which case it would reset to *false*).

```
const handleCountryChange = (event) => {
  setSelectedCountry(event.target.value)
  if (event.target.value === "All") {
    setIsFilter(false)
  } else {
    setIsFilter(true)
  }
}
```

I updated the `useEffect` function on the same component, which currently loaded the list of all trips in the database, to set a `filteredData` variable to the full array of Trip objects by default, but to look out for any change in the selectedCountry state.

```
useEffect(() => {
  loadTripList()
  var filteredData = filterByCountry(trips);
  setFilteredTripList(filteredData)
}, [selectedCountry]);
```

The second function, `filterByCountry()` which is called in the above `useEffect`, would update the filteredData variable if a country was selected in the dropdown, which would update the `filteredTripList` state as set in the useEffect.

```
// FILTER FUNCTIONS & VARIABLES
const filterByCountry = (filteredData) => {
  if (!selectedCountry) {
    return filteredData;
  }
  const filteredTrips = filteredData.filter(
    (trip) => trip.country.name === selectedCountry
  );
  console.log("FILTERED TRIPS: ", filteredTrips)
  console.log("isFilter: ", isFilter)
  return filteredTrips;
};
```

I then needed a few different variables. The first two would loop over the full list of Trips and the filtered list of Trips and map them to our `TripSnippet` component, passing the same props in both cases.

```
const allTrips = trips.map((trip, index) => (
   <div key={index}>
     <TripSnippet {...trip} profileHandler={props.profileHandler} singleTrip={singleTrip} trip={currentTrip} trips={trips} user={props.user} currentUser={props.currentUser} setCurrentTrip={setCurrentTrip} currentTrip={currentTrip} editTrip={editTrip} popupHandler={() => props.popupHandler()}/>
   </div>
 ));
 
const allFilteredTrips = filteredTripList.map((trip, index) => (
  <div key={index}>
    <TripSnippet {...trip} profileHandler={props.profileHandler} singleTrip={singleTrip} trip={currentTrip} trips={trips} user={props.user} currentUser={props.currentUser} setCurrentTrip={setCurrentTrip} currentTrip={currentTrip} editTrip={editTrip} popupHandler={() => props.popupHandler()}/>
  </div>
));
```

The next two variables were to create the dropdown options on browse trips - first I needed to get the Countries that the existing Trips had referenced, sorted alphabetically, and then a second function to remove duplicates from this list and return the options for the select list.

```
const allTripCountries = trips.sort((a, b) => (a.country.name > b.country.name ? 1 : ((b.country.name > a.country.name) ? -1 : 0))).map((trip, index) => (
   trip.country.name
));

const dedupedCountries = Array.from(new Set(allTripCountries)).map((country, index) => (
  <option key={index} value={country}>{country}</option>
));
```

Finally, in the return statement in `BrowseTrips.js` I added a dropdown to show the deduplicated list of countries from the existing Trips, and below that show all the trips by default or, if a Country had been selected as filter option, then show the filtered array of Trips.

```
return (
  <div>
    <h1>BROWSE TRIPS</h1>
    <div><h3>Filter by Country:</h3></div>
    <div className='select'>
      <select
          id="country-input"
          onChange={handleCountryChange}
        >
          <option value="All">All Countries</option>
          {dedupedCountries}
        </select>
    </div>
    {(!isFilter) ?
    allTrips
    :
    allFilteredTrips
    }
  </div>
)
```

## Final Product

Homepage (for visitors):
![Trip Tips Screenshot - Profile Page](/triptips-BE/public/img/readme/appscreenshot-03.png)

Homepage (for authenticated users):
![Trip Tips Screenshot - Profile Page](/triptips-BE/public/img/readme/appscreenshot-04.png)

Browse Trips:
![Trip Tips Screenshot - Profile Page](/triptips-BE/public/img/readme/appscreenshot-05.png)

Browse Trips with filter showing countries of existing trips:
![Trip Tips Screenshot - Profile Page](/triptips-BE/public/img/readme/appscreenshot-06.png)

User profile page:
![Trip Tips Screenshot - Profile Page](/triptips-BE/public/img/readme/appscreenshot-07.png)

My Trips:
![Trip Tips Screenshot - Profile Page](/triptips-BE/public/img/readme/appscreenshot-08.png)

Favs:
![Trip Tips Screenshot - Profile Page](/triptips-BE/public/img/readme/appscreenshot-09.png)

Trip Detail (of Trip created by the authenticated user):
![Trip Tips Screenshot - Profile Page](/triptips-BE/public/img/readme/appscreenshot-10.png)

Trip Detail (any other trip):
![Trip Tips Screenshot - Profile Page](/triptips-BE/public/img/readme/appscreenshot-11.png)

Edit Profile:
![Trip Tips Screenshot - Profile Page](/triptips-BE/public/img/readme/appscreenshot-12.png)

Add Trip (showing pre-populated Country and City dropdown):
![Trip Tips Screenshot - Profile Page](/triptips-BE/public/img/readme/appscreenshot-13.png)

Edit Trip:
![Trip Tips Screenshot - Profile Page](/triptips-BE/public/img/readme/appscreenshot-14.png)

Signup:
![Trip Tips Screenshot - Profile Page](/triptips-BE/public/img/readme/appscreenshot-15.png)

Signin:
![Trip Tips Screenshot - Profile Page](/triptips-BE/public/img/readme/appscreenshot-16.png)

## Conclusions

### Wins

* Teamwork: Every single day the whole team participated with enthusiasm during the morning stand-ups. The constructive environment encouraged us to share our blockers and bugs and we all made a conscious effort to help solve each others’ problems along the way. This also really helped us understand all parts of the application, not just the ones we worked on individually.
* We implemented some of our more complicated features such as the like functionality and a Country filter.
Image upload works successfully for single images, with images sent to a cloud storage rather than to a local storage.

### Challenges

* One of the biggest challenges was understanding how the loading and rendering of the data works in React. On a few occasions we got stuck and would encounter error messages as the application was not able to find and read some data (eg. the current User id) before rendering the page.
* This was also our first full-stack application with separate front and back ends, and it took some time to fully understand how the data was passed between back end and front end and how the whole application communicates.
* Working with numerous React components that needed to respect the unidirectional flow of data and props.

### Bugs

* Image upload to Cloudinary can be very slow, and doesn’t work for images above a certain size but this isn’t clear on the client-side.
* A newly uploaded image sometimes appears as the image for an existing trip.

### Future Improvements 

* Add additional sections to the initial "Add Trip" form, allowing the User to share recommendations, warnings and expenses.
* Allow Users to add comments to the existing trips to start a conversation and interact with the community.
* Implement more filters in order to make it easier for Users' to find relevant experiences tailored to their interests and needs (eg. filter by budget, by rating, by number of favs, etc.)
* Allow Users to add a home country on signup so the trip costs could be shown in their local currency, either automatically or with a ‘convert’ button, using a third-party API to handle the conversion.
* Have different levels of User, implementing an Admin tier that can delete Users and edit/delete all Users’ trips to maintain a level of quality within the experiences.

### Key Learnings

As my first experience of React this project really helped me gain a stronger understanding of React, its unidirectional flow and working with components. It also helped me understand the importance of sketching out and thinking through the whole application before starting to write the code, as we ran into a few problems when we added in new components and needed to move certain functions or variables higher up the hierarchy in order to pass these as props to all the components which would need them. 

All of us ran into a few bugs and blockers along the way as we developed each of our features, and as much as possible we tried to overcome each obstacle and error by ourselves through online research and talking the problem through with teammates, trying to understand how other developers had implemented effective solutions to similar problems and applying the logic to our own application rather than copying and pasting and hoping for the best. This really helped develop my understanding of React and Express, and encouraged me to follow my instincts when trying to write new functionality that we hadn’t yet been taught.

I also learnt the importance of having trust in your teammates. Throughout the build we would have debugging sessions through pair-programming as a fresh point of view would help the member who was dealing with a blocker. At times we would also explain the blocker and another member of the team would attempt to work on the problem for a while to see if they could come up with a solution with fresh eyes. We trusted each other to understand the issues, understand how the functionality fit in to the whole application, and give helpful, considered suggestions or find resources that could help. Debugging together also ensured that all of the members shared an equal level of understanding of the whole code. We also trusted each other to stay on task and to communicate regularly if any issues came up, which meant we were able to get on with our own tasks knowing that we would remain on track throughout the project.

