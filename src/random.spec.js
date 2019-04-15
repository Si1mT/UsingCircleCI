const random = require("./random");

describe("random", () => {
	it("number is between 8 and 15", () => {
		const nr = random(8, 15);
		expect(nr).toBeGreaterThanOrEqual(8);
		expect(nr).toBeLessThanOrEqual(15);
	});
	it("number is between 1 and 1000000", () => {
		const nr = random(1, 1000000);
		expect(nr).toBeGreaterThanOrEqual(1);
		expect(nr).toBeLessThanOrEqual(1000000);
	});
});
