"use strict";

const graphqlHTTP = require("express-graphql");
const schema = require("../schema");
const ValidationError = require("../lib/ValidationError");

module.exports = async () => (req, res, next) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
    formatError: error => {
      let parsed;
      if (
        error.originalError &&
        error.originalError.name === "ValidationError" &&
        !(error.originalError instanceof ValidationError)
      )
        parsed = ValidationError.fromMongoose(error.originalError);

      // Frontend exprects message to be a string which is passed to
      // React Intl formatMessage() method as { id: message } object.
      // If message is an array then it consists of two items which are
      // the first and second parameters of formatMessage()

      // When the code is E_VALIDATION then details is an object of
      // { [fieldName]: message } form, where message is the same as
      // descibed above. Special field name "_error" can be used for an
      // error not specific to a particular field (displayed above the form)

      return {
        message:
          (parsed && parsed.message) ||
          (error.originalError && error.originalError.message) ||
          error.message ||
          "Error",
        code:
          (parsed && parsed.code) ||
          (error.originalError && error.originalError.code) ||
          error.code ||
          undefined,
        details:
          (parsed && parsed.details) ||
          (error.originalError && error.originalError.details) ||
          error.details ||
          undefined
      };
    }
  })(req, res, next);
};
