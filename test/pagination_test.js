const assert = require("assert");
const User = require("../src/user");

describe("Pagination", () => {
  let joe, maria, alex, zach;

  beforeEach(done => {
    joe = new User({ name: "Joe" });
    maria = new User({ name: "Maria" });
    alex = new User({ name: "Alex" });
    zach = new User({ name: "Zach" });

    Promise.all([joe.save(), maria.save(), alex.save(), zach.save()]).then(() =>
      done()
    );
  });

  it("can skip and limit the result set", done => {
    User.find({})
      .sort({ name: 1 })
      .skip(1)
      .limit(2)
      .then(users => {
        assert(users.length === 2);
        assert(users[0].name === "Joe");
        assert(users[1].name === "Maria");
        done();
      });
  });
});
