var express = require("express");
var router = express.Router();
const ResponseError = require("../../module/ResponseError");
const Error = require("../../module/Errors");
const bookValidation = require("../../validation/book.validation");
const bookModel = require("../../model/book.model");

//Insert a book
//POST /api/books/
router.post("/", async (req, res, next) => {
  //   const userId = req.userData;
  try {
    const validatedValue = await bookValidation.validateCreateBookSchema(
      req.body
    );

    await bookModel.createBook(
      validatedValue.ISBN,
      validatedValue.title,
      validatedValue.author,
      validatedValue.publisher,
      validatedValue.publication_date
    );

    const book = await bookModel.findBookByISBN(validatedValue.ISBN);

    res.json(book);
  } catch (err) {
    console.log(err);
    next(ResponseError.generateExceptionError(err));
  }
});

//Get book by ISBN number
//GET /api/books/:isbn
router.get("/:ISBN", async (req, res, next) => {
  try {
    const validatedValue = await bookValidation.validateGetBookSchema(
      req.params
    );

    const book = await bookModel.findBookByISBN(validatedValue.ISBN);

    if (!book || book.length == 0) {
      return next(new ResponseError(Error.ERR404));
    }
    res.json(book);
  } catch (err) {
    console.log(err);
    next(ResponseError.generateExceptionError(err));
  }
});

// List all books, optionally filtered by author
//GET /api/books
router.get("/", async (req, res, next) => {
  try {
    const query = req.query;
    const validatedValues = await bookValidation.validateAuthorSchema(query);

    let books;
    if (validatedValues && validatedValues.author != null) {
      books = await bookModel.getBooksByAuthor(validatedValues.author);
    } else {
      books = await bookModel.getAllBooks();
    }

    res.json(books);
  } catch (err) {
    console.log(err);
    next(ResponseError.generateExceptionError(err));
  }
});

// Update a book
//PUT /api/books
router.put("/", async (req, res, next) => {
  try {
    const validatedValues = await bookValidation.validateUpdateBookSchema(
      req.body
    );

    const book = await bookModel.findBookByISBN(validatedValues.ISBN);

    if (!book || book.length == 0) {
      return next(new ResponseError(Error.ERR404));
    }

    const newData = {
      title: validatedValues.title,
      author: validatedValues.author,
      publisher: validatedValues.publisher,
      publication_date: validatedValues.publication_date,
    };

    //update a book
    await bookModel.updateBook(validatedValues.ISBN, newData);

    const updatedBook = await bookModel.findBookByISBN(validatedValues.ISBN);

    res.json(updatedBook);
  } catch (err) {
    console.log(err);
    next(ResponseError.generateExceptionError(err));
  }
});

// Delete a book
//DELETE /api/books
router.delete("/", async (req, res, next) => {
  try {
    const validatedValues = await bookValidation.validateGetBookSchema(
      req.body
    );

    const book = await bookModel.findBookByISBN(validatedValues.ISBN);

    if (!book || book.length == 0) {
      return next(new ResponseError(Error.ERR404));
    }

    await bookModel.deleteBook(validatedValues.ISBN);

    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    console.log(err);
    next(ResponseError.generateExceptionError(err));
  }
});

module.exports = router;
