**Digital library**
Is an HTTP service with a RESTful API to manage a digital library of books. The service support basic CRUD operations to create, read, update and delete books in the library.

Used technology:
Backend: NodeJs, ExpressJs
Database: mysql db, used workBench
Tools: PostMan
IDE: visual studio code

IMPORTANT: FOR DB CREATION YOU NEED TO RUN db creation

**
Endpoints:**
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
OK 200
BAD REQUEST 400: validation error
INTERNAL SERVER ERROR 500: other exceptions


2- GET /api/books/:isbn
Description: Get book by ISBN number

Request: ISBN as a quere param
Responses: 
OK 200
NOT FOUND 404
BAD REQUEST 400: validation error
INTERNAL SERVER ERROR 500: other exceptions


3- List all books, optionally filtered by author
Description: Get book by ISBN number

Request: can add ?author=<author-name>
Responses: 
OK 200
BAD REQUEST 400: validation error
INTERNAL SERVER ERROR 500: other exceptions


4- PUT /api/books
Description: Update a book

Request: request body with json of book, isbn should be there, at least one update value should be
Responses: 
OK 200
NOT FOUND 404
BAD REQUEST 400: validation error
INTERNAL SERVER ERROR 500: other exceptions



4- DELETE /api/books
Description: Delete a book

Request: request body with ISBN
Responses: 
OK 200
NOT FOUND 404
BAD REQUEST 400: validation error
INTERNAL SERVER ERROR 500: other exceptions
