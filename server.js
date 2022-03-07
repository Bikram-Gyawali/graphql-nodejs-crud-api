const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const graphQlResolvers = require("./src/resolvers");
const graphQlSchema = require("./src/schema");

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
  })
);

const uri = `mongodb+srv://bikram:bikram123@cluster0.pctsj.mongodb.net/graphql?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(uri, options)
  .then(() => app.listen(3000, console.log("'Server is listening on 3000")));

/*
// get all posts
  // # {
  //   #   posts{
  //   #     _id,
  //   #     body,
  //   #     createdAt
  //   #   }
  //   # }
    
  // get post by id
  // {
  //   post(_id:"62260d3d18988f46d2cc39bd"){
  //     _id,
  //     body,
  //     createdAt
  //   }
  // }

  // create post
  //   # mutation{
  //   #   createPost(post:{body:"Hello World this is fifth post"}){
  //   #     body,createdAt
  //   #   }
  //   # }
    
  // update post
  //   # mutation{
  //   #   updatePost(_id:"62260d3d18988f46d2cc39bd",body:"first post is updated now")
  //   # }
    
  // delete post
  //   # mutation{
  //   #   deletePost(_id:"62260d3d18988f46d2cc39bd"){_id,body,createdAt}
  //   # }
  */
