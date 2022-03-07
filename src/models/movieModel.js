const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = require("graphql");

const MovieType = new GraphQLObjectType({
  name: "MovieType",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: { type: GraphQLString },
    year: {
      type: GraphQLInt,
    },
    summary: {
      type: GraphQLString,
    },
  }),
});

module.exports = { MovieType };
