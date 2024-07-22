SHOP APPLICATION
This is an application for online shopping, where only admin can perform CRUD goods online and viewers can buy and make payment. 

1. User Authentication and Authorization:

* Secure user registration and login.
* Password hashing using bcrypt for secure storage.
* Session management to maintain user state across requests.
* CSRF protection to prevent cross-site request forgery attacks.

2. File Uploads:

* Ability to upload images in PNG, JPG, or JPEG formats.
* Secure storage of uploaded files on the server.
* Validation to ensure only allowed file types are uploaded.

3. Admin Dashboard:

* Administrative routes for managing the application.
* Interface for creating, updating, and deleting products or content.
* Access control to restrict admin functionalities to authorized users only.

4. E-Commerce Functionalities:

* Product listing with detailed views.
* Shopping cart functionality for adding and managing items.
* Order creation and processing for authenticated users.

5. Security and Performance:

* Compression middleware to reduce the size of the response bodies.
* Logging of HTTP requests using Morgan for monitoring and debugging.

6. Error Handling:

Custom error pages for 404 (Not Found) and 500 (Internal Server Error).
Middleware for centralized error handling.

PREREQUISITES
Ensure you meet up with the following requirements:

Nodejs installed (v21.5.0)
MongoDB installed (v1.42.1)
NPM (10.2.4)

TO INSTALL--
git clone https://github.com/Oseun12/Shop.git
cd Shop
install npm install
create .env (
    MONGO_USER=
    MONGO_PASSWORD
    MONGO_DEFAULT_DATABASE
    SESSION SECRET
    PORT default 3000
)

USAGE
npm start
The server will start and be accessible at http://localhost:3000.

PROJECT STRUCTURE
`controllers/`: Contains the logic for handling routes.
`middleware/`: Custom middleware functions.
`models/`: Mongoose models for MongoDB collections.
`routes/`: Route definitions for different parts of the app.
`views/`: EJS templates for rendering HTML pages.
`public/`: Static files such as CSS and JavaScript.
`images/`: Directory for storing uploaded images.


KEY DEPENDENCIES
Express: Web framework for Node.js.
Mongoose: ODM for MongoDB.
express-session: Session middleware for Express.
connect-mongodb-session: MongoDB session store for Express.
csurf: CSRF protection middleware.
multer: Middleware for handling multipart/form-data, used for file uploads.
helmet: Security middleware.
compression: Middleware to compress response bodies.
morgan: HTTP request logger middleware.


ROUTES

`/admin`: Admin routes for managing the application.
`/auth`: Authentication routes (login, signup, etc.).
`/shop`: Main routes for shop functionalities.

ERROR HANDLING

`500`: Internal Server Error page.
`404`: Page Not Found.

LICENSE

This project is licensed under the MIT License. See the LICENSE file for details.

CONTACT

If you want to contact me, you can reach me at marrizzsalau7@gmail.com

