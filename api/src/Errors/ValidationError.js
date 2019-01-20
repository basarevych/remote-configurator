const { GraphQLError } = require("graphql");

class ValidationError extends GraphQLError {
  constructor(errors) {
    super("Validation error");
    this.code = "E_VALIDATION";

    if (errors) {
      this.details = _.reduce(
        _.keys(errors),
        (acc, cur) => {
          if (acc[cur]) acc[cur].push(errors[cur].message);
          else acc[cur] = [errors[cur].message];
          return acc;
        },
        {}
      );
    }
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "error.validation";
  }
}

module.exports = ValidationError;
