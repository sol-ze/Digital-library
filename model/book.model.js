const knex = require("../config/db");

const createBook = (ISBN, title, author, publisher, publication_date) => {
  return knex("book").insert({
    ISBN,
    title,
    author,
    publisher,
    publication_date,
  });
};

const findBookByISBN = (ISBN) => {
  return knex("book").whereRaw("ISBN = ?", ISBN);
};

const getAllBooks = () => {
  return knex("book").select("*");
};

const getBooksByAuthor = (author) => {
  return knex("book").where("author", author).select("*");
};

const updateBook = (ISBN, updateFields) => {
  return knex("book").where({ ISBN }).update(updateFields);
};

const deleteBook = (ISBN) => {
  return knex("book").where({ ISBN }).del();
};

module.exports = {
  createBook,
  findBookByISBN,
  getAllBooks,
  getBooksByAuthor,
  updateBook,
  deleteBook,
};
