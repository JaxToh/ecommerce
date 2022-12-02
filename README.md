# Developing a sample Ecommerce React App -Jax

## Project Brief

### MVP

MVP - Minimum Viable Product

MVP - Minimum Viable Product

* Build a web application using create-react-app / vite or next.js. Must be your own work.
* Use React framework to build your application with at least
  * 3 components
  * 4 props
  * 2 state properties
  * 2 setState
  * 2 routes
* Use 3rd party API and/or Firestore
  * API call with Axios and display the data for the user. You may use any API of your choosing.
* Craft a README.md file that explains your app to the world.
* Create wireframes for your app and include it in your repo/readme.

Stretch Goals (Not Mandatory)

* You may also opt to use Firebase/Firestore if you need to store data.


## Technologies & Tools Used

* HTML
* CSS
* JavaScript
* Vite
* Reactjs
* Git & GitHub


## Description

This ecommerce app has basic functionalities such as sorting products by categories and viewing product details. On the details page, you can read more information about the product and also add-to-cart. The sticky nav bar only consists of the Home link and Cart link, where the cart keeps a counter of number of types of products that are already added-to-cart. On the cart page, you can view the current cart items and adjust quantity, where the total price shown will increase automatically. Reducing quantity to less than 1 will remove the whole item. Contact & shipping details section is a controlled form, where upon filling up and clicking submit, these details will be shown on the pop-up summary. Payment methods are not yet integrated.


## Deployment

The app is deployed on Vercel:
https://ecommerce-jaxtoh.vercel.app


## Wireframe
<img src="/src/assets/wireframe.png" />


## Planning and Development Process

1. Drawing up a wireframe based on some web research of what an ecommerce site needs.

2. Removing some ecommerce functionalities which are too complex to produce at this point.

3. Finalising wireframe to start with and create folders in vite that would be needed.

4. Start by setting up pages, components and layout.

5. Fetching api and map dummy products to make sure it works and contain values that we need.

6. Set up search based on selecting option-values as the api is too limited in types of categories.

7. Create addItem and removeItem button functions in App.jsx and pass down as props.

8. Set up routing with react-router of the pages, where layout is always present.

9. Style search page (Home), product details page, and cart.

10. Use .reduce() method to calculate total cart price.

11. Set up local storage to prevent cart emptied when page is refreshed.

12. Set up controlled form inputs to display in alert box as Contact Summary when submitted.


## Challenges & Learning Points

1. API could have issues and limitations when deployed.

2. Better familiarity with CSS flex and grid would speed up production.

3. useContext and useReducer would be important to use if the app scales up. useContext to provide global state values and useReducer to provide key   functions globally.


## API Used

* Fake Store API - https://fakestoreapi.com/
