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
  likes: Number,
  blogPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: "blogPost"
    }
  ]
});

UserScheme.virtual("postCount").get(function() {
  return this.posts.length;
});

UserScheme.pre("remove", function(next) {
  const BlogPost = mongoose.model("blogPost");
  //this = joe(particular user)

  BlogPost.remove({ _id: { $in: this.blogPosts } }).then(() => next());
});

const User = mongoose.model("user", UserScheme);

module.exports = User;
