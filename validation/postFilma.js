const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostFilmaInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.category = !isEmpty(data.category) ? data.category : "";
  data.genre = !isEmpty(data.genre) ? data.genre : "";
  data.quality = !isEmpty(data.quality) ? data.quality : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  if (Validator.isEmpty(data.category)) {
    errors.category = "Category field is required";
  }

  if (Validator.isEmpty(data.genre)) {
    errors.genre = "Genre field is required";
  }

  if (Validator.isEmpty(data.quality)) {
    errors.quality = "Quality field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
