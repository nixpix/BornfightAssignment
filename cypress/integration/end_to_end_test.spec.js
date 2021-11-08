/// <reference types="cypress" />

import { WelcomePage } from "../support/PageObjects/WelcomePage.spec.js";
import { OrderFormPage } from "../support/PageObjects/OrderFormPage.spec.js";
import { CheckoutPage } from "../support/PageObjects/CheckoutPage.spec";
import { NavigationMenuPage } from "../support/PageObjects/NavigationMenuPage.spec.js";
import { OrderOverviewPage } from "../support/PageObjects/OrderOverviewPage.spec.js"

const navigationMenuPage = new NavigationMenuPage();
const welcomePage = new WelcomePage();
const orderFormPage = new OrderFormPage();
const checkoutPage = new CheckoutPage();
const orderOverviewPage = new OrderOverviewPage();

const firstname = "Clark"
const lastname = "Kent"
const email = "clark.kent@example.com"
const country = "USA"
const city = "Metropolis"
const shippingAddress = "First street 33245"

const publisher = "Dan Verssen Games"
const game = "Field Commander: Napoleon"
const price = "$100"

let sessionCookies;

const setCookie = () => {
  cy.setCookie(sessionCookies[0].name, sessionCookies[0].value);
  cy.setCookie(sessionCookies[1].name, sessionCookies[1].value);
  cy.setCookie(sessionCookies[2].name, sessionCookies[2].value);
}

describe("Board game ordering website", () => {
  it("should display the welcome page", () => {
    cy.intercept(Cypress.config().baseUrl).as("welcome");
    welcomePage.visit();
    welcomePage.welcomeMessage().should("contain.text", "Welcome!")
    cy.wait("@welcome");

    cy.intercept("https://qa.bornfight.dev/site/order").as("orderForm");
    welcomePage.clickLetsGetStartedButton();
    cy.wait("@orderForm");

    cy.getCookies("").then((cookies) => {
      console.log(cookies);
      sessionCookies = cookies;
    });

  });

  it("should be possible to select board game and add it to the cart", () => {
    setCookie()

    cy.intercept("https://qa.bornfight.dev/site/games?publisher*").as(
      "publisher"
    );
    orderFormPage.selectFromPublisherPicker(publisher).should('have.value', publisher);;
    cy.wait("@publisher");

    cy.intercept("https://qa.bornfight.dev/site/price?game*").as("game");
    orderFormPage.selectFromGamePicker(game).should('have.value', game);
    cy.wait("@game");

    orderFormPage.priceText().contains("Price").should("have.text", "Price: $100")
    
    cy.intercept("https://qa.bornfight.dev/site/add-to-cart*").as("addToCart");
    orderFormPage.clickAddToCartButton();
    cy.wait("@addToCart");
  });

  it("should be possible to place order for items added to cart", () => {
    setCookie()

    cy.intercept("https://qa.bornfight.dev/site/checkout*").as("checkoutPage");
    navigationMenuPage.clickCheckouteNavItem();
    cy.wait("@checkoutPage");

    checkoutPage.fillCheckoutForm(firstname, lastname, email, country, city, shippingAddress)

    cy.intercept("https://qa.bornfight.dev/site/place-order*").as("placeOrder");
    checkoutPage.clickPlaceOrderButton();
    cy.wait("@placeOrder");
  });

  it("order should be placed successfully and order details should be displayed", () => {
    setCookie()

    orderOverviewPage.topBanner().should("contain.text", "Your order has been placed!")
    
    orderOverviewPage.firstnameField().should("contain.text", firstname)
    orderOverviewPage.lastnameField().should("contain.text", lastname)
    orderOverviewPage.emailField().should("contain.text", email)
    orderOverviewPage.countryField().should("contain.text", country)
    orderOverviewPage.cityField().should("contain.text", city)
    orderOverviewPage.shippingAddressField().should("contain.text", shippingAddress)

    orderOverviewPage.orderDetailsFirstRowPublisher().should("contain.text", publisher)
    orderOverviewPage.orderDetailsFirstRowGame().should("contain.text", game)
    orderOverviewPage.orderDetailsFirstRowPrice().should("contain.text", price)
  })
});
