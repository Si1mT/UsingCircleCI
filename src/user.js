const faker = require("faker");

/**
 * returns user by id
 *
 * @param {number} id
 * @returns {*}
 */
module.exports = function contact(id) {
	if (id !== parseInt(id, 10)) {
		throw new Error("id needs to be integer");
	}
	faker.seed(id);
	return {
		userId: id,
		name: faker.name.findName(),
		jobTitle: faker.name.jobTitle(),
		userName: faker.internet.userName(),
		phone: faker.phone.phoneNumber(),
		email: faker.internet.email(),
	};
};
