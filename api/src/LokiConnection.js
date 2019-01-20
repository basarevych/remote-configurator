const defineConnection = require("graphql-relay-connection/lib/defineConnection")
  .default;

const PREFIX = "loki:";

function base64(i) {
  return new Buffer(i, "ascii").toString("base64");
}

function unbase64(i) {
  return new Buffer(i, "base64").toString("ascii");
}

// Given a comparable value, return a string cursor.
function documentToCursor(doc) {
  return base64(PREFIX + doc.$loki);
}

// Given a string cursor,
// return a comparable value for the comparator function.
function cursorToDocument(cursor) {
  const unbased = unbase64(cursor);
  if (_.startsWith(unbased, PREFIX)) {
    const id = unbased.substring(PREFIX.length);
    const num = parseInt(id, 10);
    if (id && isFinite(num)) {
      return {
        $loki: num,
        id
      };
    }
  }
  return null;
}

// Sort function for array.sort().
// Given two values, return an interger.
function compareDocuments(doc1, doc2) {
  if (doc1.$loki < doc2.$loki) {
    return -1;
  }
  if (doc1.$loki > doc2.$loki) {
    return 1;
  }
  return 0;
}

const { connectionFromArray, connectionFromPromisedArray } = defineConnection({
  comparableToCursor: documentToCursor,
  cursorToComparable: cursorToDocument,
  comparator: compareDocuments
});

module.exports = {
  connectionFromArray,
  connectionFromPromisedArray,
  documentToCursor,
  cursorToDocument
};
