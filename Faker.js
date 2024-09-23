const { faker } = require("@faker-js/faker");
const User = require("./models/User");

async function seedUsers() {
  for (let i = 0; i < 40; i++) {
    const user = new User({
      firstName: faker.person.fullName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      age: faker.number.int({ min: 20, max: 60 }),
      gender: faker.person.sexType(),
      phoneNumber: faker.phone.number(),
      country: faker.location.country(),
    });

    await user.save();
  }
}

module.exports = seedUsers;
