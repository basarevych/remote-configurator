"use strict";

const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");
const constants = require("../common/constants");

const typeDefs = `
  scalar Date

  interface OperationStatus {
    success: Boolean!
  }

  enum UserRole {
    ${_.values(constants.roles).join("\n")}
  }

  type UserStatus {
    isAuthenticated: Boolean!
    login: String
    roles: [UserRole]
  }

  type AuthOperationStatus implements OperationStatus {
    success: Boolean!
  }

  type User {
    id: String!
    whenCreated: Date!
    whenUpdated: Date!
    login: String!
    roles: [UserRole]!
  }

  type UserOperationStatus implements OperationStatus {
    success: Boolean!
    id: String
  }

  type Device {
    id: String!
    whenCreated: Date!
    whenUpdated: Date!
    name: String!
  }

  type DeviceOperationStatus implements OperationStatus {
    success: Boolean!
    id: String
  }

  type Query {
    status: UserStatus
    users: [User]
    devices: [Device]
  }

  type Mutation {
    signIn(login: String, password: String): AuthOperationStatus
    signOut: AuthOperationStatus

    createUser(login: String, password: String, roles: [UserRole]): UserOperationStatus
    editUser(id: String, login: String, password: String, roles: [UserRole]): UserOperationStatus
    deleteUser(id: String): UserOperationStatus

    createDevice(name: String, password: String): DeviceOperationStatus
    editDevice(id: String, name: String, password: String): DeviceOperationStatus
    deleteDevice(id: String): DeviceOperationStatus
  }
`;

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false }
});
