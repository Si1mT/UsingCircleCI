const capitalize = require("./capitalize");

describe("sum", () => {
	it("error - bad input", () => {
		expect(() => {
			capitalize({ "word": "cat" });
		}).toThrow(/bad input/);
	});
});