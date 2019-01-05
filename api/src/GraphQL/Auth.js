const EventEmitter = require("events");

class Auth extends EventEmitter {
  constructor(authRepo) {
    super();

    this.authRepo = authRepo;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "graphql.auth";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["repository.auth"];
  }

  async gql() {
    return {
      Query: {
        status: async (parent, args, context) =>
          this.authRepo.getStatus(context, args)
      },
      Mutation: {
        signIn: async (parent, args, context) =>
          this.authRepo.signIn(context, args),
        signOut: async (parent, args, context) =>
          this.authRepo.signOut(context, args)
      }
    };
  }
}

module.exports = Auth;
