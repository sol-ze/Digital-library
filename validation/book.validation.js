const Joi = require("joi");
const validate = require("./validation");

const createBookSchema = Joi.object({
  ISBN: Joi.string()
    .pattern(/^[0-9]+$/)
    .min(5)
    .max(13)
    .required()
    .trim(),
  title: Joi.string().min(3).max(255).required().trim(),
  author: Joi.string().max(255).required().trim(),
  publisher: Joi.string().min(1).max(255).required(),
  publication_date: Joi.date().iso().required(),
});

const getBookSchema = Joi.object({
  ISBN: Joi.string()
    .pattern(/^[0-9]+$/)
    .min(5)
    .max(13)
    .required()
    .trim(),
});

const updateBookSchema = Joi.object({
  ISBN: Joi.string()
    .pattern(/^[0-9]+$/)
    .min(5)
    .max(13)
    .required()
    .trim(),
  title: Joi.string().min(3).max(255).optional().trim(),
  author: Joi.string().max(255).optional().trim(),
  publisher: Joi.string().min(1).max(255).optional(),
  publication_date: Joi.date().iso().optional(),
}).min(2);

const authorSchema = Joi.object({
  author: Joi.string().min(1).max(255).optional(),
});

const validateCreateBookSchema = (userInput) =>
  validate(userInput, createBookSchema);

const validateGetBookSchema = (userInput) => validate(userInput, getBookSchema);

const validateAuthorSchema = (userInput) => validate(userInput, authorSchema);

const validateUpdateBookSchema = (userInput) =>
  validate(userInput, updateBookSchema);

module.exports = {
  validateCreateBookSchema,
  validateGetBookSchema,
  validateAuthorSchema,
  validateUpdateBookSchema,
};
