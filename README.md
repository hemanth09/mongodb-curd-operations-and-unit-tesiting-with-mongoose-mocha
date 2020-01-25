# Basic MongoDB CRUD operations and Unit testing with mongoose and mocha

# Description

A test driven experience on MongoDB CURD operations using mongoose and mocha.

A good walk through of core fundamentals of MongoDB

- Data Modelling and schema designs
- Handling Relational Data
- Handling Big collections with pagination

### Set Up

Clone and install:

```bash
git clone https://github.com/hemanth09/mongodb-curd-operations-and-unit-testing-with-mongoose-mocha.git
cd mongodb-curd-operations-and-unit-testing-with-mongoose-mocha
npm/yarn install
```

These packages will be installed

- [Mongoose](https://mongoosejs.com/) is a library which helps to modify the database.
- [Mocha](https://mochajs.org/) testing framework is popular for testing Nodejs and we are going to test create, read, update and delete operations on our MongoDB database.

### Running the Application

Run it using:

```bash
npm run test
```

Before that you have to start MongoDb and connect to it.
I am assuming you have MongoDB already installed on your computer. We will start the daemon specifying the location of the database.

```bash
mongod --dbpath=/User/username/data/db
```

If not installed follow the below link to install mongodb

- [Installing Mongo](https://treehouse.github.io/installation-guides/mac/mongo-mac.html)
- [Robo 3T](https://robomongo.org/download) You can install Robo 3T which gives a good user interface to manage your MongoDB database.

### Project Structure

    .
    ├── src                     # Src folder
            └── user                   # user schema to create a user
    ├── test                    # Test folder
            ├── create_test             # creating a user record
            ├── delete_test             # deleting a user record
            ├── reading_test            # Reading a user record
            └── update_test             # Updating a user record

### Example Schema design approach for associating blogPosts and comments to User

- test/association_test
- test/middleware_test

### Handling large data collections by pagination

- test/pagination_test
