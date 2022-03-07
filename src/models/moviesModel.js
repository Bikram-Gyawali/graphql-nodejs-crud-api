const { buildSchema } = require("graphql");

const MovieType = buildSchema(`
""" 
MovieType attributes defination
"""
type MovieType{
    id:ID!,
    "Movie Title"
    title:String!,
    "Release Date"
    year:Int!,
    "Movie Description"
    summary:Stirng!
}
`);

module.exports = { MovieType };
