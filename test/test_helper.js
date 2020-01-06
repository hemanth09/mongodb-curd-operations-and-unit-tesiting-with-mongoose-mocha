const mongoose = require("mongoose");

before(done => {
  mongoose.connect("mongodb://localhost/user_test", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  mongoose.connection
    .once("open", () => done())
    .on("error", error => console.warn("Warning", error));
});

beforeEach(done => {
  mongoose.connection.collections.users.drop(() => {
    // Ready to run the next test
    done();
  });
});
