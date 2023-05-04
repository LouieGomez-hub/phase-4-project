# Trip Booker: Phase 4 Project

## Project Design:
This project was designed to allow users to plan trips by viewing different hotels and details about them.

When you log in to this app you will be able to view a list of multiple hotels from a variety of countries and the information that goes with it such as how much it costs and each hotels star rating, as well as creating your own trips.

## Features:
* A navbar with the username of the current user that's logged in and buttons to view your account and logout
* Login/Signup page when you first open the app
* A display of all trips complete with hotel images and additional details styled as cards
* A form to create your own trip

## Project Function:
The first page you will come across when you start up this application is the Login/Signup page. Rendered on the page is a card that will allow you to switch between making an account for new users and logging back in for returning users and password validation is being applied on both forms from the backend. If your login information is invalid an error will pop up
```JSX
function handleSignup(e) {
        e.preventDefault();

        fetch("/signup", {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password, password_confirmation })
        })
        .then((res) => {
            if(res.ok) {
                res.json().then((user) => onLogin(user))
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        })
    }
```
Once a user is logged in they'll come across the main viewing page and core of this project, which is the booker page where all the trips are displayed in a list format and styled as cards. The Trips component makes a request to the server to get the trip data and pass it to the TripDetails component which is where the code for those cards is held
```JSX
 useEffect(() => {
        fetch("/trips")
        .then((res) => res.json())
        .then(setTrips);
    }, []);
```
Each trip card showcases 4 key details about said trip:
* The Hotel name
* The Country the hotel is in
* The price per night and
* The star rating of the hotel

This information along with an image of the hotel is all generated through a faker gem and seed data and can allow users to plan a trip based on the information provided.

At the bottom of each card is a link that when clicked will show you more information on that specific hotel. It will display the same key details that's on the cards but additionally a description of the hotel will be provided, which is also being rendered via a faker gem, along with being able to switch to a review tab and see reviews that have been left for each hotel.

A final key feature this project makes use of is the "My Account" button on the navbar at the top of the page. When you click the account button you will be taken to a form that will let you create your own trip, included in the form are inputs for a hotel name and image, the country it's in, a price that is required by the backend to be at least $100, and a description.

To achieve the functionality of this form, a POST request is being made to the 'trips' route in the backend and errors will be displayed if any validations are not being met.
```JSX
function handleSubmit(e) {
        e.preventDefault();

        setErrors([]);

        fetch('/trips', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tripData)
        })
        .then((res) => {
            if(res.ok) {
                onAddTrip(tripData)
                setTripData({name: "", location: "", description: "", price: "", image_url: ""})
            } else {
                res.json().then((err) => setErrors(err.errors));
            }
        })
    }
```
When a user is finally ready to logout of the application, upon clicking the logout button they will be taken right back to the login/signup page from the start as you would expect when signing out of any web page. A DELETE request is made to the backend along with a redirect in order to properly log a user out of their current session.
```JSX
function handleLogout() {
        fetch("/logout", {
            method: 'DELETE',
        })
        .then((res) => {
            if(res.ok) {
                setUser(null);
            }
        })
        .then(<redirect to="/" />)
    }
```

### Languages Used:
* RAILS
* JSX
* CSS
* JSON