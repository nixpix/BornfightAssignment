/// <reference types="cypress" />

import { WelcomePage } from "../support/PageObjects/WelcomePage.spec.js";
import { OrderFormPage } from "../support/PageObjects/OrderFormPage.spec.js";
import { CheckoutPage } from "../support/PageObjects/CheckoutPage.spec";
import { NavigationMenuPage } from "../support/PageObjects/NavigationMenuPage.spec.js";

const navigationMenuPage = new NavigationMenuPage();
const welcomePage = new WelcomePage();
const orderFormPage = new OrderFormPage();
const checkoutPage = new CheckoutPage();

const timeout = 5000

describe("Board game website", () => {
  it("should display the welcome page", () => {
    welcomePage.visit();
    welcomePage.clickLetsGetStartedButton();
  });
  it("should be possible to select board game and add it to the cart", () => {
    cy.wait(timeout)

    orderFormPage.selectFromPublisherPicker("Dan Verssen Games");
    orderFormPage.selectFromGamePicker("Field Commander: Napoleon");
    cy.wait(timeout)
    orderFormPage.clickAddToCartButton();
    cy.wait(timeout)
  });

  it("should be possible to place order for items added to cart", () => {
    cy.wait(timeout)
    navigationMenuPage.clickCheckouteNavItem()
    cy.wait(timeout)
    checkoutPage.emptyCartButton();
  });
});
