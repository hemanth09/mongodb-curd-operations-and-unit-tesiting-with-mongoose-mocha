const assert = require("assert");
const User = require("../src/user");

describe("Virtual type", () => {
  it("postCount return number of posts", done => {
    new User({
      name: "Joe",
      posts: [{ title: "Test post" }]
    })
      .save()
      .then(() => User.findOne({ name: "Joe" }))
      .then(user => {
        assert(user.postCount === 1);
        done();
      });
  });
});
