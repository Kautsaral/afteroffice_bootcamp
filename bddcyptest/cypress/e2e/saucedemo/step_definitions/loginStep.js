import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the SauceDemo login page", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("I enter the username {string} and password {string}",(username, password) => {
    cy.get("#user-name").clear().type(username);
    cy.get("#password").clear().type(password);
  }
);

When("I click the login button", () => {
  cy.get("#login-button").click();
});

Then("I should be redirected to the inventory page", () => {
  cy.url().should("include", "inventory");
});

Then("I should see an error message", () => {
  cy.get('[data-test="error"]').should(
    "contain",
    "Epic sadface: Username and password do not match any user in this service"
  );
});