# Exam-project-1
_This is the exam project 1 at Noroff. With this project I'm supposed to combine what I've learned so far this first year. This includes planning, design, html, css and js._

## Brief
### Description
Build the front-end user interface for an e-commerce application. You must create a responsive web app that allows users to view products, add items to a cart, and complete purchases. The final submission must allow a user to register, log in, and purchase products.

### Technical Requirements
You must follow the tech stack exactly unless this brief explicitly says otherwise.

Language/Framework: Vanilla JavaScript only (no frameworks). **No** CSS or JavaScript Frameworks are permitted (this includes Tailwind, Bootstrap, Vue, Svelte, React and similar packages)

Prototyping tool: Figma
  
### Functional Requirements/Process
Pages & User Stories

Product Feed Page

Method: GET /online-shop

Path: /index.html

Requirements: The Product Feed Page must include a carousel and a list of at least 12 products
User Stories:
- As a user, I want to see an interactive banner carousel on the product feed page, so that I can view a rotation of three products
- As a user, I want to click on the previous or next button in the carousel to animate and reveal another product, to ensure I can see different products easily
- As a user, I want the carousel to return to the first product after reaching the end of the list, and vice versa when clicking previous on the first product
- As a user, I want to click on a button for each carousel item, which will take me to the product page, where I can view more details
- As a user, I want to view a list of the 12 products in a responsive thumbnail grid on the product feed page, so I can easily select which product to view
- As a user, I want each thumbnail image in the product feed to be clickable, taking me to the product page to see more details about that specific product

### Specific Product Page
Method: GET /online-shop/<id>

Path: /product/index.html

Requirements: The Specific Product Page features more details about a specific product that was navigated to from the thumbnail of the Product Feed Page

User Stories:
- As a user, I want to see a responsive layout showing the product's title, description, price, discounted price (if applicable), rating, reviews, and tags fetched from the API
- As a user, I want each specific product page to have a "share" icon with a shareable URL (including a query string or hash parameter containing the product ID), so I can share the product with others easily
- As the user, when logged in, I want an "Add to Cart" button on the product page, so I can add products to my shopping cart

### Account Login Page

Method: POST /auth/login

Path: /account/login.html

User Stories:
- As a user, I want a validated login form that allows me to request and save a token to my browser by entering my email and password, allowing me to make purchases

### Account Register Page
Method: POST /auth/register

Path: /account/register.html

User Stories:
- As a user, I want a validated register form that allows me to create a new account by entering my email and password

### Cart Page
Path: /cart/index.html

User Stories:
- As a user, I want to view all products I've added to my cart on a dedicated cart page
- As a user, I want to see the total price of all items in my cart
- As a user, I want to adjust the quantity of items in my cart
- As a user, I want to remove items from my cart
- As a user, I want to clear all items from my cart with one action
- As a user, I want a "Proceed to Checkout" button that takes me to the checkout page

### Checkout Page
Path: /checkout/index.html

User Stories:
- As a user, I want to fill out a delivery address form with my details
- As a user, I want to select from various payment methods (functionality not required - form only)
- As a user, I want a "Complete Purchase" button that submits my order and takes me to a success page

### Success Page
Path: /success/index.html

User Stories
- As a user, I want to see a success message confirming my purchase was completed
- As a user, I want to have the option to return to the product feed page

## Resources, deliverables and submission
### Resources

Please read the following API documentation and make use of the Swagger tool to inform your development process:

Swagger: https://v2.api.noroff.dev/docs/static/index.html#/online-shop

API Documentation:
Provided API endpoints documentation for:
products (/online-shop) - https://docs.noroff.dev/docs/v2/basic/online-shop, 
authentication (/auth/) - https://docs.noroff.dev/docs/v2/authentication, 
and related functionality

You may use icon and font packs

Code borrowed from external sources must be clearly marked with inline comments, including a link to the origin

### Deliverables & Submission
You must submit the following via Moodle by the deadline:

- Link to your GitHub repository (containing all source code in the default branch [main/master]).
- Link to your deployed web application (on GitHub Pages)
- Link to your Figma style guide and design
- Link to your public project planning board (GitHub Projects)
- A written reflection on the assignment process.
⚠️ Important: Your GitHub repository must be public and accessible when graded. If your repository is inaccessible or the application link is broken, the code portion will be treated as a non-submission, resulting in a "Not Passed (fail)" grade. The same applies to your Figma links - ensure it can be viewed in a logged out status. Please test your links before submitting. Should a link not be accessible by the grader, no marks will be allocated for the related criteria. Test all links in an incognito browser tab before submission.
