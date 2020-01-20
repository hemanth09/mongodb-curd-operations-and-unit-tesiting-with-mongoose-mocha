const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = require("./post");

const UserScheme = new Schema({
  name: {
    type: String,
    validate: {
      validator: name => name.length > 2,
      message: "Name must be longer than 2 characters"
    },
    required: [true, "Name is required."]
  },
  posts: [PostSchema],
  likes: Number
});

UserScheme.virtual("postCount").get(function() {
  return this.posts.length;
});

const User = mongoose.model("user", UserScheme);

module.exports = User;
