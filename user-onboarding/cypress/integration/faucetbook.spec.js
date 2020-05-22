describe("Form Inputs", () => {
	it("Can use the forms", () => {
		cy.visit("http://localhost:3000");

		cy.get('input[name="first_name"]')
			.type("Plumber")
			.should("have.value", "Plumber");

		cy.get('input[name="last_name"]')
			.type("Smith")
			.should("have.value", "Smith");

		cy.get('input[name="email"]')
			.type("plumber@plumber.com")
			.should("have.value", "plumber@plumber.com");

		cy.get('input[name="password"]')
			.type("abcdefghijk")
			.should("have.value", "abcdefghijk");

		cy.get('input[name="accept"]').check();

		cy.get(".subButton").click();
	});
});

describe("Form Validation", () => {
	it("Can validate the inputs inside a form", () => {
		cy.visit("http://localhost:3000");

		cy.get('input[name="first_name"]').type("a");
		cy.get('input[name="first_name"]').clear();
		cy.contains("First Name is required").should("exist");
		cy.get('input[name="first_name"]').type("a");
		cy.contains("First Name is required").should("not.exist");

		cy.get('input[name="last_name"]').type("a");
		cy.get('input[name="last_name"]').clear();
		cy.contains("Last Name is required").should("exist");
		cy.get('input[name="last_name"]').type("a");
		cy.contains("Last Name is required").should("not.exist");

		cy.get('input[name="email"]').type("a");
		cy.get('input[name="email"]').clear();
		cy.contains("Your email is required").should("exist");
		cy.get('input[name="email"]').type("a");
		cy.contains("Your email is required").should("not.exist");

		cy.get('input[name="email"]').type("a");
		cy.contains("Email must be a valid email address").should("exist");
		cy.get('input[name="email"]').type("a@g.com");
		cy.contains("Email must be a valid email address").should("not.exist");

		cy.get('input[name="password"]').type("a");
		cy.contains("Your password must be at least 5 characters long").should(
			"exist"
		);
		cy.get('input[name="password"]').type("abcdefg");
		cy.contains("Your password must be at least 5 characters long").should(
			"not.exist"
		);

		cy.get('input[name="accept"]').check();
		cy.get('input[name="accept"]').uncheck();
		cy.contains("You must accept the terms of service").should("exist");
		cy.get('input[name="accept"]').check();
		cy.contains("You must accept the terms of service").should("not.exist");
	});
});

describe("More Tests", () => {
	it("Add another user if you fill out the for correctly", () => {
		cy.visit("http://localhost:3000");

		cy.get('input[name="first_name"]')
			.type("Plumber")
			.should("have.value", "Plumber");

		cy.get('input[name="last_name"]')
			.type("Smith")
			.should("have.value", "Smith");

		cy.get('input[name="email"]')
			.type("plumber@plumber.com")
			.should("have.value", "plumber@plumber.com");

		cy.get('input[name="password"]')
			.type("abcdefghijk")
			.should("have.value", "abcdefghijk");

		cy.get('input[name="accept"]').check();

        cy.get(".subButton").click();
        
        cy.visit("http://localhost:3000/users");
	});
});
