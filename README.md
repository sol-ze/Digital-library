Digital library
===================================================
Is an HTTP service with a RESTful API to manage a digital library of books. The service support basic CRUD operations to create, read, update and delete books in the library.


Technologies Used
===================================================

    Backend: Node.js, Express.js
    Database: MySQL, MySQL Workbench
    Tools: Postman
    IDE: Visual Studio Code
	
	

Setup Instructions:
===================================================


1. Setting Up the Database
	1.1. Download MySQL Workbench or any application that supports MySQL, and log in to your localhost.
	1.2. Navigate to /digital-library/config and run the create_schema_and_tables.sql file in MySQL Workbench. This will create a new schema named digital_library and a book table needed for the project.


2. Creating the .env File
	2.1. Create a .env file in the /digital-library directory with the following content to ensure sensitive data remains secure:
	
		PORT=3000
		MYSQLUSER="yourUserName"
		MYSQLPASS="yourPassword
		MYSQLDB="digital_library"
		HOST="127.0.0.1"
		MYSQLPORT="3306"
		
	2.2. Update the MYSQLUSER and MYSQLPASS fields with your MySQL localhost username and password.	
	
	
3- Running the API:
	3.1. Open Visual Studio Code and then open the project folder.
	3.2. Open the terminal, ensure you are in the correct directory, and install the project packages using: npm install
	3.3. Run the application using:
	
4- Using API Endpoints
The web server will run on your localhost at port 3000.

If you encounter any issues, please contact me.


Endpoints:
===================================================

1- POST /api/books/

Description: Inserts a new book

Request: request body:

	{
	  "title": "Rich Dad Poor Dad",
	  "author": "Robert T. Kiyosaki",
	  "ISBN": "9781612681139",
	  "publisher": "Plata Publishing",
	  "publication_date": "2022-04-05"
	}

Responses:
* OK 200
* BAD REQUEST 400: validation error
* INTERNAL SERVER ERROR 500: other exceptions

______________________________________________
2- GET /api/books/:isbn

Description: Get book by ISBN number

Request: ISBN as a quere param

Responses:
OK 200
* NOT FOUND 404
* BAD REQUEST 400: validation error
* INTERNAL SERVER ERROR 500: other exceptions

______________________________________________
3- GET /api/books

Description: Get book by ISBN number, optionally filtered by author

Request: can add ?author=<author-name>
Responses: 
* OK 200
* BAD REQUEST 400: validation error
* INTERNAL SERVER ERROR 500: other exceptions

______________________________________________
4- PUT /api/books

Description: Update a book

Request: request body with json of book, isbn should be there, at least one update value should be
Responses: 
* OK 200
* NOT FOUND 404
* BAD REQUEST 400: validation error
* INTERNAL SERVER ERROR 500: other exceptions



______________________________________________
4- DELETE /api/books

Description: Delete a book

Request: request body with ISBN

Responses: 
* OK 200
* NOT FOUND 404
* BAD REQUEST 400: validation error
* INTERNAL SERVER ERROR 500: other exceptions
