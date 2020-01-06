const assert = require("assert");
const User = require("../src/user");

describe("Deleting a user", done => {
  let joe;
  beforeEach(done => {
    joe = new User({ name: "joe" });
    joe.save().then(() => done());
  });

  it("model instance remove", done => {
    joe
      .remove()
      .then(() => User.findOne({ name: "joe" }))
      .then(user => {
        assert(user === null);
        done();
      });
  });

  it("class method remove", done => {
    // Remove a bunch of records with some given criteria
    User.deleteMany({ name: "joe" })
      .then(() => User.findOne({ name: "joe" }))
      .then(user => {
        assert(user === null);
        done();
      });
  });

  it("class method findOneAndDelete", done => {
    // Remove a bunch of records with some given criteria
    User.findOneAndDelete({ name: "joe" })
      .then(() => User.findOne({ name: "joe" }))
      .then(user => {
        assert(user === null);
        done();
      });
  });

  //   it("class method findByIdAndRemove", done => {
  //     // Remove a bunch of records with some given criteria
  //     User.findByIdAndRemove(joe._id)
  //       .then(() => User.findOne({ name: "joe" }))
  //       .then(user => {
  //         assert(user === null);
  //         done();
  //       });
  //   });
});
