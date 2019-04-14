const { GraphQLError } = require("graphql");

class ValidationError extends GraphQLError {
  constructor(errors) {
    super("Validation error");
    this.code = "E_VALIDATION";

    if (errors) {
      this.details = _.reduce(
        _.keys(errors),
        (acc, cur) => {
          let msg = errors[cur].reason || errors[cur].message;
          if (acc[cur]) acc[cur].push(msg);
          else acc[cur] = [msg];
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
